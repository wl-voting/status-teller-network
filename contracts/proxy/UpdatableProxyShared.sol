pragma solidity ^0.5.0;

import "./ProxyData.sol";
import "../common/Ownable.sol";

contract UpdatableProxyShared is ProxyData, Ownable {
    
    event InstanceUpdated(address newProxied);

    function updateProxied(address newProxied)
        public
        onlyOwner
    {
        proxied = newProxied;
        emit InstanceUpdated(newProxied);
    }
}