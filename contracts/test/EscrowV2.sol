pragma solidity ^0.5.0;

import "../escrow/EscrowDataInternal.sol";
import "../escrow/EscrowProxy.sol";
import "../escrow/EscrowData.sol";
import "../escrow/Escrow.sol";

contract EscrowV2DataInternal is EscrowDataInternal {
    bool internal newVariable;
}

contract EscrowV2Data is EscrowData {
    bool public newVariable;
    event X();
}

contract EscrowV2Proxy is EscrowProxy, EscrowV2DataInternal {
    constructor(address _proxied, address _license, address _owner)
        public
        EscrowProxy(_proxied, _license, _owner)
    {
        newVariable = true;
    }
}

contract EscrowV2 is Escrow, EscrowV2Data {

    constructor(address _license) public Escrow(_license){
        
    }

    // Only methods
    function SetNewVariable(bool _newVariable) public {
        emit X();
        newVariable = _newVariable;
    }

    function GetNewVariable() public view returns (bool) {
        return newVariable;
    }
    
}