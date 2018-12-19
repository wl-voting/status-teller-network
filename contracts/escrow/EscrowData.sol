pragma solidity ^0.5.0;

import "../proxy/UpdatableProxyData.sol";
import "./EscrowHeader.sol";
import "../license.sol";

contract EscrowData is UpdatableProxyData, EscrowHeader {
    EscrowTransaction[] public transactions;
    License public license;
}