// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import { Clones } from "@openzeppelin/contracts/proxy/Clones.sol";
import "./Child.sol";

contract Factory is Ownable {
    Child[] public children;
    address masterContract;

    event CreateChild(address newChildAddress, uint256 index, address newOwner);

    constructor(address _masterContract) {
        masterContract = _masterContract;
    }

    function setLibraryAddress(address _masterContract) external onlyOwner {
        masterContract = _masterContract;
    }

    function createChild(uint256 data, address _owner) external onlyOwner {
        require(_owner != address(0), "Invalid _owner address");

        Child child = Child(Clones.clone(masterContract));
        child.initialize(data, children.length, _owner); 
        children.push(child);

        emit CreateChild(address(child), children.length - 1, _owner);
    }

    function getChildren() external view returns (Child[] memory) {
        return children;
    }
}
