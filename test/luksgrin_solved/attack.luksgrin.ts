import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_luksgrin, CHALLENGE_luksgrin } from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/luksgrin/Setup.sol:Setup`, SETUP_luksgrin)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/luksgrin/HauntedDungeon.sol:HauntedDungeon`, CHALLENGE_luksgrin)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_luksgrin);
});

it("info", async function () {
    // console.log(await ethers.provider.getBalance(await challenge.address));
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/luksgrin/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, { value: await ethers.utils.parseEther("5"), gasLimit: 25000000 });
    await exploit.finalize();
    expect(await setup.isSolved()).to.eq(true);
});