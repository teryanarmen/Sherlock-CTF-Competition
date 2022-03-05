import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_ych18, CHALLENGE_ych18} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/ych18/Setup.sol:Setup`, SETUP_ych18)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/ych18/FunnyChallenges.sol:FunnyChallenges`, await setup.instance())).connect(attacker);
});

it("prints contract address", async function () {
    // expect(await setup.instance()).to.eq(CHALLENGE_ych18);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/ych18/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, {value: await ethers.utils.parseEther("2")});
    console.log((await ethers.provider.getBalance(challenge.address)).toString());
    ///await exploit.finalize();
    expect(await setup.isSolved()).to.eq(true);
});