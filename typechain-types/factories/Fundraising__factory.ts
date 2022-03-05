/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Fundraising, FundraisingInterface } from "../Fundraising";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minCollab",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetFunds",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "beneficiary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "collaborations",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "donor",
        type: "address",
      },
    ],
    name: "fundAs",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "refundInvalid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "repent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newBeneficiary",
        type: "address",
      },
    ],
    name: "setBeneficiary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startFundraising",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620018213803806200182183398181016040528101906200003791906200008f565b81608081815250508060a081815250505050620000d6565b600080fd5b6000819050919050565b620000698162000054565b81146200007557600080fd5b50565b60008151905062000089816200005e565b92915050565b60008060408385031215620000a957620000a86200004f565b5b6000620000b98582860162000078565b9250506020620000cc8582860162000078565b9150509250929050565b60805160a0516117176200010a6000396000610b900152600081816103820152818161079e0152610eff01526117176000f3fe6080604052600436106100955760003560e01c80634e614cc3116100595780634e614cc31461016357806361b20d8c1461018c57806381ef1b18146101a3578063b29abe5a146101ba578063b60d4288146101f85761009f565b806312065fe0146100b15780631c31f710146100dc57806325ca705a1461010557806338af3eed1461011c5780633a4e799e146101475761009f565b3661009f57600080fd5b3480156100ab57600080fd5b50600080fd5b3480156100bd57600080fd5b506100c6610202565b6040516100d39190610f8f565b60405180910390f35b3480156100e857600080fd5b5061010360048036038101906100fe919061100d565b61020a565b005b34801561011157600080fd5b5061011a610331565b005b34801561012857600080fd5b506101316105fa565b60405161013e9190611049565b60405180910390f35b610161600480360381019061015c919061100d565b61061e565b005b34801561016f57600080fd5b5061018a6004803603810190610185919061100d565b61079c565b005b34801561019857600080fd5b506101a1610af5565b005b3480156101af57600080fd5b506101b8610c76565b005b3480156101c657600080fd5b506101e160048036038101906101dc919061100d565b610d37565b6040516101ef929190611064565b60405180910390f35b610200610d5b565b005b600047905090565b600073ffffffffffffffffffffffffffffffffffffffff1660018054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610299576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029090611110565b60405180910390fd5b60006102a482610ed8565b905060001515811515146102ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e49061117c565b60405180910390fd5b816001806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600160009054906101000a900460ff16610380576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610377906111e8565b60405180910390fd5b7f0000000000000000000000000000000000000000000000000000000000000000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541015610425576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041c9061127a565b60405180910390fd5b60006064605a600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461047891906112c9565b6104829190611352565b9050600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546104d49190611383565b90506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050501580156105ac573d6000803e3d6000fd5b5061dead73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156105f5573d6000803e3d6000fd5b505050565b60018054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003411610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065890611403565b60405180910390fd5b600160009054906101000a900460ff166106b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a7906111e8565b60405180910390fd5b6106ba3334610efb565b6106f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f090611495565b60405180910390fd5b34600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461074b91906114b5565b9250508190555042600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555050565b7f0000000000000000000000000000000000000000000000000000000000000000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015410801561084f57506000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154115b61088e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088590611557565b60405180910390fd5b600060028060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546108de9190611352565b9050600081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546109309190611383565b90506000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610a1491906114b5565b9250508190555042600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055508273ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610aa8573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610aef573d6000803e3d6000fd5b50505050565b3373ffffffffffffffffffffffffffffffffffffffff1660018054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7a906115c3565b60405180910390fd5b600054421180610bb357507f00000000000000000000000000000000000000000000000000000000000000004710155b610bf2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be990611655565b60405180910390fd5b6000600160006101000a81548160ff02191690831515021790555060018054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610c73573d6000803e3d6000fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff1660018054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610d06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfd906116c1565b60405180910390fd5b62278d0042610d1591906114b5565b60008190555060018060006101000a81548160ff021916908315150217905550565b60026020528060005260406000206000915090508060000154908060010154905082565b60003411610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9590611403565b60405180910390fd5b600160009054906101000a900460ff16610ded576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de4906111e8565b60405180910390fd5b610df73334610efb565b610e36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2d90611495565b60405180910390fd5b34600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610e8891906114b5565b9250508190555042600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60007f000000000000000000000000000000000000000000000000000000000000000082600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154610f6c91906114b5565b1015905092915050565b6000819050919050565b610f8981610f76565b82525050565b6000602082019050610fa46000830184610f80565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fda82610faf565b9050919050565b610fea81610fcf565b8114610ff557600080fd5b50565b60008135905061100781610fe1565b92915050565b60006020828403121561102357611022610faa565b5b600061103184828501610ff8565b91505092915050565b61104381610fcf565b82525050565b600060208201905061105e600083018461103a565b92915050565b60006040820190506110796000830185610f80565b6110866020830184610f80565b9392505050565b600082825260208201905092915050565b7f596f752063616e2774206368616e6765207468652062656e656669636961727960008201527f20616e796d6f7265000000000000000000000000000000000000000000000000602082015250565b60006110fa60288361108d565b91506111058261109e565b604082019050919050565b60006020820190508181036000830152611129816110ed565b9050919050565b7f546865206e6577206f776e6572206973206e6f742076616c69642e0000000000600082015250565b6000611166601b8361108d565b915061117182611130565b602082019050919050565b6000602082019050818103600083015261119581611159565b9050919050565b7f5468652066756e6472616973696e6720697320636c6f73656400000000000000600082015250565b60006111d260198361108d565b91506111dd8261119c565b602082019050919050565b60006020820190508181036000830152611201816111c5565b9050919050565b7f596f757220636f6c6c61626f726174696f6e20697320756e61626c6520746f2060008201527f626520726566756e646564000000000000000000000000000000000000000000602082015250565b6000611264602b8361108d565b915061126f82611208565b604082019050919050565b6000602082019050818103600083015261129381611257565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112d482610f76565b91506112df83610f76565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113185761131761129a565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061135d82610f76565b915061136883610f76565b92508261137857611377611323565b5b828204905092915050565b600061138e82610f76565b915061139983610f76565b9250828210156113ac576113ab61129a565b5b828203905092915050565b7f596f75206861766520746f20636f6e7472696275746520736f6d657468696e67600082015250565b60006113ed60208361108d565b91506113f8826113b7565b602082019050919050565b6000602082019050818103600083015261141c816113e0565b9050919050565b7f596f752063616e277420636f6e74726962757465206c657373207468616e206d60008201527f696e696d756d0000000000000000000000000000000000000000000000000000602082015250565b600061147f60268361108d565b915061148a82611423565b604082019050919050565b600060208201905081810360008301526114ae81611472565b9050919050565b60006114c082610f76565b91506114cb83610f76565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611500576114ff61129a565b5b828201905092915050565b7f4e6f7420616e20696e76616c696420616d6f756e740000000000000000000000600082015250565b600061154160158361108d565b915061154c8261150b565b602082019050919050565b6000602082019050818103600083015261157081611534565b9050919050565b7f4e6f74207468652062656e656669636961727900000000000000000000000000600082015250565b60006115ad60138361108d565b91506115b882611577565b602082019050919050565b600060208201905081810360008301526115dc816115a0565b9050919050565b7f5468652066756e6472616973696e67206861736e27742066696e69736865642060008201527f7965740000000000000000000000000000000000000000000000000000000000602082015250565b600061163f60238361108d565b915061164a826115e3565b604082019050919050565b6000602082019050818103600083015261166e81611632565b9050919050565b7f536574207468652062656e656669636961727920666972737400000000000000600082015250565b60006116ab60198361108d565b91506116b682611675565b602082019050919050565b600060208201905081810360008301526116da8161169e565b905091905056fea2646970667358221220b27daa10ac51a45b5f6e7d8723259716141181071d6c67d9e738739a83953b7e64736f6c63430008090033";

type FundraisingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundraisingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Fundraising__factory extends ContractFactory {
  constructor(...args: FundraisingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Fundraising";
  }

  deploy(
    minCollab: BigNumberish,
    targetFunds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Fundraising> {
    return super.deploy(
      minCollab,
      targetFunds,
      overrides || {}
    ) as Promise<Fundraising>;
  }
  getDeployTransaction(
    minCollab: BigNumberish,
    targetFunds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(minCollab, targetFunds, overrides || {});
  }
  attach(address: string): Fundraising {
    return super.attach(address) as Fundraising;
  }
  connect(signer: Signer): Fundraising__factory {
    return super.connect(signer) as Fundraising__factory;
  }
  static readonly contractName: "Fundraising";
  public readonly contractName: "Fundraising";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundraisingInterface {
    return new utils.Interface(_abi) as FundraisingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Fundraising {
    return new Contract(address, _abi, signerOrProvider) as Fundraising;
  }
}
