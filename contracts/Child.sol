// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract Child is Context, Initializable {
    uint256 public data;
    bool public isEnabled;
    uint256 public index;
    address private _owner;

    mapping(address => bool) private _admins;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event SetAdmin(address indexed user, bool indexed allow);

    function initialize(
        uint256 _data,
        uint256 _index,
        address owner_
    ) public initializer {
        data = _data;
        index = _index;
        isEnabled = false;
        _setOwner(owner_);
    }

    modifier onlyOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    modifier onlyAdmin() {
        require((owner() == _msgSender() || _admins[_msgSender()]), "Ownable: caller is not an admin");
        _;
    }

    function owner() public view virtual returns (address) {
        return _owner;
    }

    function renounceOwnership() public virtual onlyOwner {
        _setOwner(address(0));
    }

    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _setOwner(newOwner);
    }

    function _setOwner(address newOwner) private {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }

    function setAdmin(address user, bool allow) public onlyOwner {
        _admins[user] = allow;
        emit SetAdmin(user, allow);
    }

    function disable() external onlyOwner {
        isEnabled = false;
    }

    function enabled() external onlyOwner {
        isEnabled = true;
    }
}
