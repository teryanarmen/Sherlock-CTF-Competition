/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Setup, SetupInterface } from "../Setup";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    name: "Deployed",
    type: "event",
  },
  {
    inputs: [],
    name: "instance",
    outputs: [
      {
        internalType: "contract Challenge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isSolved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052670de0b6b3a7640000341461001857600080fd5b6000604051610026906101b8565b604051809103906000f080158015610042573d6000803e3d6000fd5b5090506000604051610053906101c5565b604051809103906000f08015801561006f573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff1663d1f57894836040518263ffffffff1660e01b81526004016100ab919061022c565b600060405180830381600087803b1580156100c557600080fd5b505af11580156100d9573d6000803e3d6000fd5b50505050670de0b6b3a7640000816040516100f3906101d2565b6100fd9190610211565b6040518091039082f090508015801561011a573d6000803e3d6000fd5b506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff40fcec21964ffb566044d083b4073f29f7f7929110ea19e1b3ebe375d89055e60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516101a99190610211565b60405180910390a150506102a0565b6106a08061046583390190565b61077480610b0583390190565b6105e38061127983390190565b6101e88161026b565b82525050565b60006101fb60008361025a565b91506102068261029d565b600082019050919050565b600060208201905061022660008301846101df565b92915050565b600060408201905061024160008301846101df565b8181036020830152610252816101ee565b905092915050565b600082825260208201905092915050565b60006102768261027d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b50565b6101b6806102af6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063022ec0951461003b57806364d98f6e14610059575b600080fd5b610043610077565b6040516100509190610115565b60405180910390f35b61006161009b565b60405161006e91906100fa565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163114905090565b6100e581610130565b82525050565b6100f48161015c565b82525050565b600060208201905061010f60008301846100dc565b92915050565b600060208201905061012a60008301846100eb565b92915050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101678261016e565b9050919050565b60006101798261013c565b905091905056fea264697066735822122070861749b78b7f08da495669e9fa58a0dfe15d06731b6bf78272dd9e96eaad3064736f6c63430008040033608060405234801561001057600080fd5b50610680806100206000396000f3fe6080604052600436106100345760003560e01c80630d8d210c1461003957806324e5eeaa14610069578063fcb6617514610094575b600080fd5b610053600480360381019061004e919061032a565b6100bf565b6040516100609190610400565b60405180910390f35b34801561007557600080fd5b5061007e61016b565b60405161008b919061041b565b60405180910390f35b3480156100a057600080fd5b506100a96101f9565b6040516100b691906103e5565b60405180910390f35b600066038d7ea4c68000341461010a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101019061043d565b60405180910390fd5b816000908051906020019061012092919061021f565b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050919050565b600080546101789061054f565b80601f01602080910402602001604051908101604052809291908181526020018280546101a49061054f565b80156101f15780601f106101c6576101008083540402835291602001916101f1565b820191906000526020600020905b8154815290600101906020018083116101d457829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805461022b9061054f565b90600052602060002090601f01602090048101928261024d5760008555610294565b82601f1061026657805160ff1916838001178555610294565b82800160010185558215610294579182015b82811115610293578251825591602001919060010190610278565b5b5090506102a191906102a5565b5090565b5b808211156102be5760008160009055506001016102a6565b5090565b60006102d56102d084610482565b61045d565b9050828152602081018484840111156102ed57600080fd5b6102f884828561050d565b509392505050565b600082601f83011261031157600080fd5b81356103218482602086016102c2565b91505092915050565b60006020828403121561033c57600080fd5b600082013567ffffffffffffffff81111561035657600080fd5b61036284828501610300565b91505092915050565b610374816104cf565b82525050565b610383816104e1565b82525050565b6000610394826104b3565b61039e81856104be565b93506103ae81856020860161051c565b6103b781610610565b840191505092915050565b60006103cf6004836104be565b91506103da82610621565b602082019050919050565b60006020820190506103fa600083018461036b565b92915050565b6000602082019050610415600083018461037a565b92915050565b600060208201905081810360008301526104358184610389565b905092915050565b60006020820190508181036000830152610456816103c2565b9050919050565b6000610467610478565b90506104738282610581565b919050565b6000604051905090565b600067ffffffffffffffff82111561049d5761049c6105e1565b5b6104a682610610565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006104da826104ed565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b8381101561053a57808201518184015260208101905061051f565b83811115610549576000848401525b50505050565b6000600282049050600182168061056757607f821691505b6020821081141561057b5761057a6105b2565b5b50919050565b61058a82610610565b810181811067ffffffffffffffff821117156105a9576105a86105e1565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f6661696c0000000000000000000000000000000000000000000000000000000060008201525056fea2646970667358221220375d3af84716af30ae0a10b712d581927b4e0bfd267d654782b7ceb851cc168364736f6c63430008040033608060405234801561001057600080fd5b50610754806100206000396000f3fe6080604052600436106100225760003560e01c8063d1f578941461003b57610031565b366100315761002f610057565b005b610039610057565b005b6100556004803603810190610050919061040a565b610071565b005b61005f6101ca565b61006f61006a6101cc565b6101db565b565b600073ffffffffffffffffffffffffffffffffffffffff166100916101cc565b73ffffffffffffffffffffffffffffffffffffffff16146100b157600080fd5b60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c6100e19190610566565b60001b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b1461013c577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b61014582610201565b6000815111156101c65760008273ffffffffffffffffffffffffffffffffffffffff168260405161017691906104b2565b600060405180830381855af49150503d80600081146101b1576040519150601f19603f3d011682016040523d82523d6000602084013e6101b6565b606091505b50509050806101c457600080fd5b505b5050565b565b60006101d6610250565b905090565b3660008037600080366000845af43d6000803e80600081146101fc573d6000f35b3d6000fd5b61020a816102a7565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600061027e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610360565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102b08161036a565b6102ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e6906104c9565b60405180910390fd5b8061031c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610360565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000819050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006103a061039b8461050e565b6104e9565b9050828152602081018484840111156103b857600080fd5b6103c38482856105d6565b509392505050565b6000813590506103da81610707565b92915050565b600082601f8301126103f157600080fd5b813561040184826020860161038d565b91505092915050565b6000806040838503121561041d57600080fd5b600061042b858286016103cb565b925050602083013567ffffffffffffffff81111561044857600080fd5b610454858286016103e0565b9150509250929050565b60006104698261053f565b610473818561054a565b93506104838185602086016105e5565b80840191505092915050565b600061049c602d83610555565b91506104a7826106b8565b604082019050919050565b60006104be828461045e565b915081905092915050565b600060208201905081810360008301526104e28161048f565b9050919050565b60006104f3610504565b90506104ff8282610618565b919050565b6000604051905090565b600067ffffffffffffffff82111561052957610528610678565b5b610532826106a7565b9050602081019050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610571826105cc565b915061057c836105cc565b92508282101561058f5761058e610649565b5b828203905092915050565b60006105a5826105ac565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156106035780820151818401526020810190506105e8565b83811115610612576000848401525b50505050565b610621826106a7565b810181811067ffffffffffffffff821117156106405761063f610678565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6107108161059a565b811461071b57600080fd5b5056fea26469706673582212208685870f6a77e279d62f5f6013a68d533fd346a30abbfbb88bd58f4523cadc6b64736f6c6343000804003360806040526040516105e33803806105e383398181016040528101906100259190610080565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100f2565b60008151905061007a816100db565b92915050565b60006020828403121561009257600080fd5b60006100a08482850161006b565b91505092915050565b60006100b4826100bb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100e4816100a9565b81146100ef57600080fd5b50565b6104e2806101016000396000f3fe6080604052600436106100295760003560e01c806315692cc21461002e578063fe93f1ed1461004a575b600080fd5b6100486004803603810190610043919061022b565b610075565b005b34801561005657600080fd5b5061005f61019f565b60405161006c91906102e6565b60405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156100cf57600080fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260405161011791906102cf565b600060405180830381855af49150503d8060008114610152576040519150601f19603f3d011682016040523d82523d6000602084013e610157565b606091505b505090508061019b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019290610301565b60405180910390fd5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006101d66101d184610346565b610321565b9050828152602081018484840111156101ee57600080fd5b6101f98482856103d0565b509392505050565b600082601f83011261021257600080fd5b81356102228482602086016101c3565b91505092915050565b60006020828403121561023d57600080fd5b600082013567ffffffffffffffff81111561025757600080fd5b61026384828501610201565b91505092915050565b6102758161039e565b82525050565b600061028682610377565b6102908185610382565b93506102a08185602086016103df565b80840191505092915050565b60006102b9600c8361038d565b91506102c482610483565b602082019050919050565b60006102db828461027b565b915081905092915050565b60006020820190506102fb600083018461026c565b92915050565b6000602082019050818103600083015261031a816102ac565b9050919050565b600061032b61033c565b90506103378282610412565b919050565b6000604051905090565b600067ffffffffffffffff82111561036157610360610443565b5b61036a82610472565b9050602081019050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006103a9826103b0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b838110156103fd5780820151818401526020810190506103e2565b8381111561040c576000848401525b50505050565b61041b82610472565b810181811067ffffffffffffffff8211171561043a57610439610443565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f63616c6c206661696c656421000000000000000000000000000000000000000060008201525056fea2646970667358221220e55cbd1c0f25544d7b73356d5dca4d6e21466aac9da2d060ff8cffcf55bb29ef64736f6c63430008040033";

type SetupConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SetupConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Setup__factory extends ContractFactory {
  constructor(...args: SetupConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Setup";
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Setup> {
    return super.deploy(overrides || {}) as Promise<Setup>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Setup {
    return super.attach(address) as Setup;
  }
  connect(signer: Signer): Setup__factory {
    return super.connect(signer) as Setup__factory;
  }
  static readonly contractName: "Setup";
  public readonly contractName: "Setup";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SetupInterface {
    return new utils.Interface(_abi) as SetupInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Setup {
    return new Contract(address, _abi, signerOrProvider) as Setup;
  }
}