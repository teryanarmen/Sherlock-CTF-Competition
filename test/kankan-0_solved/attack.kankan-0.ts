import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_kankan, CHALLENGE_kankan } from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/kankan-0/Setup.sol:Setup`, SETUP_kankan)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/kankan-0/Dead.sol:Dead`, CHALLENGE_kankan)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_kankan);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/kankan-0/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, { value: await ethers.utils.parseEther("5") });
    await exploit.finalize({ gasLimit: 25000000 });
    expect(await setup.isSolved()).to.eq(true);
});