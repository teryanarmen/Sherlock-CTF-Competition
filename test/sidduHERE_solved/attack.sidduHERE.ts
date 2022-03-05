import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_sidduHERE, CHALLENGE_sidduHERE} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/sidduHERE/Setup.sol:Setup`, SETUP_sidduHERE)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/sidduHERE/ExampleQuizExploit.sol:ExampleQuizExploit`, CHALLENGE_sidduHERE)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_sidduHERE);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/sidduHERE/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, {value: await ethers.utils.parseEther("1")});
    await exploit.finalize();
    console.log((await challenge.getBalance()).toString());
    expect(await setup.isSolved()).to.eq(true);
});