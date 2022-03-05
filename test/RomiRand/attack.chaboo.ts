import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_, CHALLENGE_} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts//Setup.sol:Setup`, SETUP_)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts//Padlock.sol:Padlock`, CHALLENGE_)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_);
});

it("info", async function () {x
    console.log(await ethers.provider.getBalance(await challenge.address));
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts//Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    await exploit.finalize();
    expect(await setup.isSolved()).to.eq(true);
});