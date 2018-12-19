pragma solidity ^0.5.0;

import "../proxy/Proxy.sol";
import "./EscrowDataInternal.sol";

contract EscrowProxy is Proxy, EscrowDataInternal {
    constructor(address _proxied, address _license, address _owner)
        public
        Proxy(_proxied)
        OwnableData(_owner)
    {
        license = License(_license);
    }
}