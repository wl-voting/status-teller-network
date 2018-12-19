pragma solidity ^0.5.0;

import "./ProxyData.sol";

contract Proxy is ProxyData {
    constructor(address _proxied) public {
        proxied = _proxied;
    }

    function implementation() public view returns (address) {
        return proxied;
    }
    
    function proxyType() public pure returns (uint256) {
        return 1; // for "forwarding proxy"
                  // see EIP 897 for more details
    }

    function () external payable {
        address addr = proxied;
        assembly {
            let freememstart := mload(0x40)
            calldatacopy(freememstart, 0, calldatasize())
            let success := delegatecall(not(0), addr, freememstart, calldatasize(), freememstart, 0)
            returndatacopy(freememstart, 0, returndatasize())
            switch success
            case 0 { revert(freememstart, returndatasize()) }
            default { return(freememstart, returndatasize()) }
        }
    }
}