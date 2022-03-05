import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_ebaizel, CHALLENGE_ebaizel} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/ebaizel/Setup.sol:Setup`, SETUP_ebaizel)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/ebaizel/PixelPavel.sol:PixelPavel`, CHALLENGE_ebaizel)).connect(attacker);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory("contracts/ebaizel/Exploit.sol:Exploit", attacker)).deploy(challenge.address);
    expect(await setup.isSolved()).to.eq(true);
});