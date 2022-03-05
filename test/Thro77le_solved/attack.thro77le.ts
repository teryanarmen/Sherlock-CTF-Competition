import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_Thro77le, CHALLENGE_Thro77le } from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let attackerAddress: string;
let exploit: Contract;
let setup: Contract;
let challenge: Contract;
let factory: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    setup = (await ethers.getContractAt(`contracts/Thro77le/Setup.sol:Setup`, SETUP_Thro77le)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/Thro77le/Exploit.sol:Exploit`, CHALLENGE_Thro77le)).connect(attacker);
    factory = (await ethers.getContractAt(`contracts/Thro77le/Exploit.sol:Exploit`, await setup.factory())).connect(attacker);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/Thro77le/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, factory.address, { value: await ethers.utils.parseEther("1") });
    await exploit.check();
    expect(await setup.isSolved()).to.eq(true);
});