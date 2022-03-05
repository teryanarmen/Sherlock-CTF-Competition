import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy-ethers";
import '@openzeppelin/hardhat-upgrades';
import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import { HardhatUserConfig } from "hardhat/types";
import * as dotenv from "dotenv";
dotenv.config();

const { GOERLI_URL } = process.env;
const { URL } = process.env;

if (!GOERLI_URL)
  throw new Error(
    `ARCHIVE_URL env var not set. Copy .env.template to .env and set the env var`
  );

const accounts = {
  // derive accounts from mnemonic, see tasks/create-key
  mnemonic: `test test test test test test test test test test test junk`,
};

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      { version: "0.7.0" },
      { version: "0.7.1" },
      { version: "0.7.2" },
      { version: "0.7.3" },
      { version: "0.7.4" },
      { version: "0.7.5" },
      { version: "0.7.6" },
      { version: "0.8.0" },
      { version: "0.8.1" },
      { version: "0.8.2" },
      { version: "0.8.3" },
      { version: "0.8.4" },
      { version: "0.8.5" },
      { version: "0.8.6" },
      { version: "0.8.7" },
      { version: "0.8.8" },
      { version: "0.8.9" },
      { version: "0.8.10" },
      { version: "0.8.11" },
    ],
  },
  networks: {
    hardhat: {
      accounts,
      gasPrice: "auto",
      chainId: 5,
      throwOnTransactionFailures: false,
      loggingEnabled: true,
      forking: {
        url: GOERLI_URL,
        enabled: true,
        blockNumber: 6386400,
      }
    },
    ctf: {
      accounts,
      url: URL,
    },
  },
  mocha: {
    timeout: 300000
  }
}
