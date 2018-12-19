pragma solidity ^0.5.0;

contract OwnableData {
  
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner is allowed");
        _;
    }

    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor(address _owner)
        public
    {
        owner = _owner;
    }
}