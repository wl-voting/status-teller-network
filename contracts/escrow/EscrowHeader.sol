pragma solidity ^0.5.0;

contract EscrowHeader {
    struct EscrowTransaction {
        address payable seller;
        address payable buyer;
        uint amount;
        uint expirationTime;
        bool released;
        bool canceled;
    }

    event Created(address indexed seller, address indexed buyer, uint amount, uint escrowId);
    event Paid(uint escrowId);
    event Canceled(uint escrowId);
}
