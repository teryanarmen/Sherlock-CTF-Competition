import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_hack3r, CHALLENGE_hack3r} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/hack3r-0m/Setup.sol:Setup`, SETUP_hack3r)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/hack3r-0m/BitMania.sol:BitMania`, CHALLENGE_hack3r)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_hack3r);
});

it("info", async function () {
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory("contracts/hack3r-0m/Exploit.sol:Exploit", attacker)).deploy(challenge.address);
    // await exploit.finalize();
    expect(await setup.isSolved()).to.eq(true);
});

