pragma solidity 0.8.4;

contract Killer {
    constructor(address payable _kill) payable {
        selfdestruct(_kill);
    }
}
