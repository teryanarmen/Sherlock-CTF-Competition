import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_plotchy, CHALLENGE_plotchy} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/plotchy/Setup.sol:Setup`, SETUP_plotchy)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/plotchy/AmusementPark.sol:AmusementPark`, CHALLENGE_plotchy)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_plotchy);
});

it("info", async function () {x
    console.log(await ethers.provider.getBalance(await challenge.address));
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/plotchy/Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    await exploit.finalize();
    expect(await setup.isSolved()).to.eq(true);
});