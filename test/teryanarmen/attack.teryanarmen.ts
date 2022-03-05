import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_teryanarmen, CHALLENGE_teryanarmen} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/teryanarmen/Setup.sol:Setup`, SETUP_teryanarmen)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/teryanarmen/Challenge2.sol:Challenge2`, CHALLENGE_teryanarmen)).connect(attacker);
    expect(await setup.isSolved()).to.eq(false);
});

it("prints contract address", async function () {
    let addr = await setup.challenge();
    console.log(addr);
    // console.log(await setup.instance());
    console.log(CHALLENGE_teryanarmen);
    expect(await setup.challenge()).to.eq(CHALLENGE_teryanarmen);
});

it.skip("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/teryanarmen/Exploit.sol:ExploitMain`, attacker)).deploy(challenge.address);
    
    await exploit.finalize();
    expect(await setup.isSolved()).to.eq(true);
});