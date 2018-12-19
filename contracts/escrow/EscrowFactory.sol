pragma solidity ^0.5.0;

import "./Escrow.sol";
import "./EscrowProxy.sol";


contract EscrowFactory {
    Escrow private masterCopy;

    event InstanceCreated(address instance);

    constructor(Escrow _masterCopy) public {
        masterCopy = _masterCopy;
    }
    
    function create(address _license)
        public
        returns (Escrow)
    {
        Escrow instance = Escrow(address(new EscrowProxy(address(masterCopy), _license, msg.sender)));
        emit InstanceCreated(address(instance));
    }
}