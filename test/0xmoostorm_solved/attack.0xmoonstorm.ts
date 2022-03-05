import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { deployOrGetAt, getEoaOrPrivateKey } from "../../scripts/utils";
import { SETUP_0xmoostorm, CHALLENGE_0xmoostorm} from "../../scripts/addresses"

let accounts: Signer[];
let attacker: Signer;
let eoaAddress: string;
let exploit: Contract;
let setup: Contract; 
let exchange: Contract;
let orderBook: Contract;
let tx: any;

before(async () => {
    [attacker] = await ethers.getSigners();
    setup = (await ethers.getContractAt(`contracts/0xmoostorm/Setup.sol:Setup`, SETUP_0xmoostorm)).connect(attacker);
    exchange = await ethers.getContractAt(`contracts/0xmoostorm/CollisionExchange.sol:CollisionExchange`, setup.exchange());
    orderBook = await ethers.getContractAt(`contracts/0xmoostorm/CollisionExchange.sol:OrderBook`, setup.orderBook());
});

it("prints contract address", async function () {
    const addr = await setup.exchange()
    expect(addr).to.eq(CHALLENGE_0xmoostorm);
});

it("exploit", async () => {
    exploit = await (await ethers.getContractFactory(`contracts/0xmoostorm/Exploit.sol:Exploit`, attacker)).deploy(exchange.address);
    expect(await setup.isSolved()).to.eq(true);
})