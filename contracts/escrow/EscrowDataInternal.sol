pragma solidity ^0.5.0;

import "../proxy/UpdatableProxyData.sol";
import "./EscrowHeader.sol";
import "../license.sol";

contract EscrowDataInternal is UpdatableProxyData, EscrowHeader {
    EscrowTransaction[] internal transactions;
    License internal license;
    
}