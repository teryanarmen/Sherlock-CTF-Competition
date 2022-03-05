import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_PeterisPrieditis, CHALLENGE_PeterisPrieditis } from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/PeterisPrieditis/Setup.sol:Setup`, SETUP_PeterisPrieditis)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/PeterisPrieditis/StableSwap2.sol:StableSwap2`, CHALLENGE_PeterisPrieditis)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_PeterisPrieditis);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/PeterisPrieditis/Exploit.sol:Exploit`, attacker)).deploy(challenge.address, setup.address, await setup.USDC(), await setup.USDT(), await setup.BUSD());
    await exploit.finalize();
    expect(await setup.isSolved()).to.eq(true);
});