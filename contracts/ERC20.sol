// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MintableErc20 is ERC20 {
    constructor() ERC20("Protofire Safe Token", "PST") {
    }

    function mint(uint256 _amount, address to) public {
        _mint(to, _amount);
    }
}