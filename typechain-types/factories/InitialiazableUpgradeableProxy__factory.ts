/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InitialiazableUpgradeableProxy,
  InitialiazableUpgradeableProxyInterface,
} from "../InitialiazableUpgradeableProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610754806100206000396000f3fe6080604052600436106100225760003560e01c8063d1f578941461003b57610031565b366100315761002f610057565b005b610039610057565b005b6100556004803603810190610050919061040a565b610071565b005b61005f6101ca565b61006f61006a6101cc565b6101db565b565b600073ffffffffffffffffffffffffffffffffffffffff166100916101cc565b73ffffffffffffffffffffffffffffffffffffffff16146100b157600080fd5b60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c6100e19190610566565b60001b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b1461013c577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b61014582610201565b6000815111156101c65760008273ffffffffffffffffffffffffffffffffffffffff168260405161017691906104b2565b600060405180830381855af49150503d80600081146101b1576040519150601f19603f3d011682016040523d82523d6000602084013e6101b6565b606091505b50509050806101c457600080fd5b505b5050565b565b60006101d6610250565b905090565b3660008037600080366000845af43d6000803e80600081146101fc573d6000f35b3d6000fd5b61020a816102a7565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600061027e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610360565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102b08161036a565b6102ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e6906104c9565b60405180910390fd5b8061031c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610360565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006103a061039b8461050e565b6104e9565b9050828152602081018484840111156103b857600080fd5b6103c38482856105d6565b509392505050565b6000813590506103da81610707565b92915050565b600082601f8301126103f157600080fd5b813561040184826020860161038d565b91505092915050565b6000806040838503121561041d57600080fd5b600061042b858286016103cb565b925050602083013567ffffffffffffffff81111561044857600080fd5b610454858286016103e0565b9150509250929050565b60006104698261053f565b610473818561054a565b93506104838185602086016105e5565b80840191505092915050565b600061049c602d83610555565b91506104a7826106b8565b604082019050919050565b60006104be828461045e565b915081905092915050565b600060208201905081810360008301526104e28161048f565b9050919050565b60006104f3610504565b90506104ff8282610618565b919050565b6000604051905090565b600067ffffffffffffffff82111561052957610528610678565b5b610532826106a7565b9050602081019050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610571826105cc565b915061057c836105cc565b92508282101561058f5761058e610649565b5b828203905092915050565b60006105a5826105ac565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156106035780820151818401526020810190506105e8565b83811115610612576000848401525b50505050565b610621826106a7565b810181811067ffffffffffffffff821117156106405761063f610678565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6107108161059a565b811461071b57600080fd5b5056fea2646970667358221220f4e2af424e75d1efd624fc83c6a8ea3e0c4933640c7a0122088ae3ba4100ce3e64736f6c63430008040033";

type InitialiazableUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InitialiazableUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InitialiazableUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: InitialiazableUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "InitialiazableUpgradeableProxy";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InitialiazableUpgradeableProxy> {
    return super.deploy(
      overrides || {}
    ) as Promise<InitialiazableUpgradeableProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InitialiazableUpgradeableProxy {
    return super.attach(address) as InitialiazableUpgradeableProxy;
  }
  connect(signer: Signer): InitialiazableUpgradeableProxy__factory {
    return super.connect(signer) as InitialiazableUpgradeableProxy__factory;
  }
  static readonly contractName: "InitialiazableUpgradeableProxy";
  public readonly contractName: "InitialiazableUpgradeableProxy";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InitialiazableUpgradeableProxyInterface {
    return new utils.Interface(_abi) as InitialiazableUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitialiazableUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as InitialiazableUpgradeableProxy;
  }
}
