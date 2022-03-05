import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_naps62, CHALLENGE_naps62} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/naps62/Setup.sol:Setup`, SETUP_naps62)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/naps62/BuiltByANoob.sol:BuiltByANoob`, CHALLENGE_naps62)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_naps62);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/naps62/Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    await exploit.win();
    expect(await setup.isSolved()).to.eq(true);
});