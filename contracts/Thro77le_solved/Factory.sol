pragma solidity 0.8.4;

contract Factory {
    function createContract(bytes memory bytecode, uint salt) public returns (bool) {
        address addr;
        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }
        require(isForbidden(addr), "Only Forbidden Contracts"); // need f0b1d somewhere in contract address...
        require(isFunded(addr), "Only Funded Contracts"); // call a different function in constructor that self destructs and sends funds to you
        return true;
    }

    function isForbidden(address _addr) internal view returns (bool) {
        bytes20 addr = bytes20(_addr);
        bytes20 id   = hex"00000000000000000000000000000000000f0b1d";
        bytes20 mask = hex"00000000000000000000000000000000000fffff";

        for (uint256 i; i != 30; ++i) {
            if (addr & mask == id) {
                return true;
            }
            mask <<= 4;
            id <<= 4;
        }

        return false;
    }

    function isFunded(address _addr) internal view returns (bool) {
        return _addr.balance >= 0.1 ether;
    }
}
