import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_BowTiedPickle, CHALLENGE_BowTiedPickle} from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let attackerAddress: string;
let exploit: Contract;
let setup: Contract; 
let padlock: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    setup = (await ethers.getContractAt(`contracts/BowTiedPickle/Setup.sol:Setup`, SETUP_BowTiedPickle)).connect(attacker);
    padlock = (await ethers.getContractAt(`contracts/BowTiedPickle/Padlock.sol:Padlock`, CHALLENGE_BowTiedPickle)).connect(attacker);
});

it("prints contract address", async function () {
    
});

it("info", async function () {
    //‮6167209‬
    exploit = await (await ethers.getContractFactory(`contracts/BowTiedPickle/Exploit.sol:Exploit`, attacker)).deploy(padlock.address);
    await padlock.pick2({value: 33});
    console.log(await padlock.tumbler2());
    await exploit.finalize();
                
});

it("exploit", async () => {
    // exploit = await (await ethers.getContractFactory(`contracts/Baraa42/Exploit.sol:Exploit`, attacker)).deploy(casino.address, {value: 1});
    expect(await setup.isSolved()).to.eq(true);
    
});