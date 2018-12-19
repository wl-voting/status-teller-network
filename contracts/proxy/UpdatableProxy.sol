pragma solidity ^0.5.0;

import "./Proxy.sol";
import "./UpdatableProxyShared.sol";

contract UpdatableProxy is Proxy, UpdatableProxyShared {
    constructor(address proxied, address owner)
        public
        Proxy(proxied)
        OwnableData(owner)
    {}
}