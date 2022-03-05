import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_JustDravee, CHALLENGE_JustDravee } from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let attackerAddress: string;
let exploit: Contract;
let setup: Contract;
let challenge: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    setup = (await ethers.getContractAt(`contracts/JustDravee/Setup.sol:Setup`, SETUP_JustDravee)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/JustDravee/SheerLocking.sol:SheerLocking`, CHALLENGE_JustDravee)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_JustDravee);
});

it("exploit", async () => {
    // 0xfffffffe00000001
    exploit = await (await ethers.getContractFactory(`contracts/JustDravee/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, { value: await ethers.utils.parseEther("1") });
    expect(await setup.isSolved()).to.eq(true);
});