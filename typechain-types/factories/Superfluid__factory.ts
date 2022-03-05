/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Superfluid, SuperfluidInterface } from "../Superfluid";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "StreamNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "StreamStillActive",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [],
    name: "UPDATE_DETAILS_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getStream",
    outputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawnBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentPerBlock",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stopBlock",
            type: "uint256",
          },
        ],
        internalType: "struct Superfluid.Timeframe",
        name: "timeframe",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "refuel",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "refund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stopBlock",
            type: "uint256",
          },
        ],
        internalType: "struct Superfluid.Timeframe",
        name: "timeframe",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "paymentPerBlock",
        type: "uint256",
      },
    ],
    name: "streamTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymentPerBlock",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stopBlock",
            type: "uint256",
          },
        ],
        internalType: "struct Superfluid.Timeframe",
        name: "timeframe",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct Superfluid.Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "updateDetails",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "withdraw",
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
  "0x60c06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1660601b8152503480156200004757600080fd5b507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6040518060400160405280600a81526020017f5375706572666c75696400000000000000000000000000000000000000000000815250805190602001206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001204630604051602001620000fb95949392919062000151565b6040516020818303038152906040528051906020012060a08181525050620001f6565b6200012981620001ae565b82525050565b6200013a81620001c2565b82525050565b6200014b81620001ec565b82525050565b600060a0820190506200016860008301886200012f565b6200017760208301876200012f565b6200018660408301866200012f565b62000195606083018562000140565b620001a460808301846200011e565b9695505050505050565b6000620001bb82620001cc565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60805160601c60a05161321d62000242600039600081816115be0152611943015260008181610b8301528181610c1201528181610f8b0152818161101a01526110ca015261321d6000f3fe6080604052600436106101025760003560e01c806352d1902d116100955780638da5cb5b116100645780638da5cb5b146102db5780639b38693314610306578063affed0e014610322578063f2fde38b1461034d578063f698da251461037657610109565b806352d1902d1461023f578063715018a61461026a5780638129fc1c14610281578063894e9a0d1461029857610109565b80633656eec2116100d15780633656eec21461018d5780633659cfe6146101ca5780634a35de23146101f35780634f1ef2861461022357610109565b80631d12189b1461010e578063278ecde1146101395780632e1a7d4d14610155578063344c8e431461017157610109565b3661010957005b600080fd5b34801561011a57600080fd5b506101236103a1565b6040516101309190612885565b60405180910390f35b610153600480360381019061014e919061239a565b6103c5565b005b61016f600480360381019061016a919061239a565b6105b6565b005b61018b600480360381019061018691906123ff565b61074b565b005b34801561019957600080fd5b506101b460048036038101906101af91906123c3565b6108d4565b6040516101c19190612ac8565b60405180910390f35b3480156101d657600080fd5b506101f160048036038101906101ec9190612254565b610b81565b005b61020d600480360381019061020891906122d1565b610d30565b60405161021a9190612ac8565b60405180910390f35b61023d6004803603810190610238919061227d565b610f89565b005b34801561024b57600080fd5b506102546110c6565b6040516102619190612885565b60405180910390f35b34801561027657600080fd5b5061027f61117f565b005b34801561028d57600080fd5b50610296611207565b005b3480156102a457600080fd5b506102bf60048036038101906102ba919061239a565b6112fb565b6040516102d297969594939291906127b5565b60405180910390f35b3480156102e757600080fd5b506102f06113bb565b6040516102fd919061279a565b60405180910390f35b610320600480360381019061031b919061243b565b6113e5565b005b34801561032e57600080fd5b50610337611843565b6040516103449190612ac8565b60405180910390f35b34801561035957600080fd5b50610374600480360381019061036f9190612254565b611849565b005b34801561038257600080fd5b5061038b611941565b6040516103989190612885565b60405180910390f35b7fa10cd4cb00add4d4726811705a7c4165b449456352c3bc9ba4801838090d97ea81565b3373ffffffffffffffffffffffffffffffffffffffff1660cb600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610460576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4360cb60008381526020019081526020016000206006016001015411156104b3576040517f59e57cec00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104bf82336108d4565b90508060cb600084815260200190815260200160002060030160008282546104e79190612bd0565b9250508190555060cb600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161055f92919061285c565b602060405180830381600087803b15801561057957600080fd5b505af115801561058d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b19190612348565b505050565b3373ffffffffffffffffffffffffffffffffffffffff1660cb600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610651576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061065d82336108d4565b90508060cb60008481526020019081526020016000206004016000828254019250508190555060cb600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016106f492919061285c565b602060405180830381600087803b15801561070e57600080fd5b505af1158015610722573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107469190612348565b505050565b3373ffffffffffffffffffffffffffffffffffffffff1660cb600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107e6576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060cb60008481526020019081526020016000206003016000828254019250508190555060cb600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161087d93929190612825565b602060405180830381600087803b15801561089757600080fd5b505af11580156108ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cf9190612348565b505050565b60008060cb60008581526020019081526020016000206040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015481526020016006820160405180604001604052908160008201548152602001600182015481525050815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161415610aaa576040517f13c872ee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610ab98260c00151611965565b905060008260a0015182610acd9190612b76565b9050826020015173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415610b2157826080015181610b179190612bd0565b9350505050610b7b565b826000015173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415610b7357808360600151610b699190612bd0565b9350505050610b7b565b600093505050505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610c10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0790612988565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610c4f6119ba565b73ffffffffffffffffffffffffffffffffffffffff1614610ca5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9c906129a8565b60405180910390fd5b610cae81611a11565b610d2d81600067ffffffffffffffff811115610cf3577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610d255781602001600182028036833780820191505090505b506000611a90565b50565b6000806040518060e001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff168152602001868152602001600081526020018481526020018581525090508060cb600060c954815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015560c082015181600601600082015181600001556020820151816001015550509050508573ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b8152600401610f1393929190612825565b602060405180830381600087803b158015610f2d57600080fd5b505af1158015610f41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f659190612348565b5060c96000815480929190610f7990612d0c565b9190505591505095945050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415611018576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100f90612988565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166110576119ba565b73ffffffffffffffffffffffffffffffffffffffff16146110ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a4906129a8565b60405180910390fd5b6110b682611a11565b6110c282826001611a90565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614611156576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114d906129c8565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b611187611c0d565b73ffffffffffffffffffffffffffffffffffffffff166111a56113bb565b73ffffffffffffffffffffffffffffffffffffffff16146111fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f290612a68565b60405180910390fd5b6112056000611c15565b565b600060019054906101000a900460ff1661122f5760008054906101000a900460ff1615611238565b611237611cdb565b5b611277576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126e90612a08565b60405180910390fd5b60008060019054906101000a900460ff1615905080156112c7576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6112cf611cec565b6112d7611d45565b80156112f85760008060016101000a81548160ff0219169083151502179055505b50565b60cb6020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050154908060060160405180604001604052908160008201548152602001600182015481525050905087565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060cb60008681526020019081526020016000206040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015481526020016006820160405180604001604052908160008201548152602001600182015481525050815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614156115ba576040517f13c872ee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000007fa10cd4cb00add4d4726811705a7c4165b449456352c3bc9ba4801838090d97ea87878760000151886020015160ca600081548092919061161d90612d0c565b91905055604051602001611636969594939291906128a0565b6040516020818303038152906040528051906020012060405160200161165d929190612763565b6040516020818303038152906040528051906020012090506000600182856000015186602001518760400151604051600081526020016040526040516116a69493929190612901565b6020604051602081039080840390855afa1580156116c8573d6000803e3d6000fd5b5050506020604051035190503373ffffffffffffffffffffffffffffffffffffffff16836000015173ffffffffffffffffffffffffffffffffffffffff1614801561174257508073ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff16145b1580156117ba57508073ffffffffffffffffffffffffffffffffffffffff16836000015173ffffffffffffffffffffffffffffffffffffffff161480156117b857503373ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff16145b155b156117f1576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8560cb6000898152602001908152602001600020600501819055508460cb6000898152602001908152602001600020600601600082015181600001556020820151816001015590505050505050505050565b60ca5481565b611851611c0d565b73ffffffffffffffffffffffffffffffffffffffff1661186f6113bb565b73ffffffffffffffffffffffffffffffffffffffff16146118c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118bc90612a68565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611935576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192c90612968565b60405180910390fd5b61193e81611c15565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008160000151431161197b57600090506119b5565b816020015143101561199e578160000151436119979190612bd0565b90506119b5565b816000015182602001516119b29190612bd0565b90505b919050565b60006119e87f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611d96565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611a19611c0d565b73ffffffffffffffffffffffffffffffffffffffff16611a376113bb565b73ffffffffffffffffffffffffffffffffffffffff1614611a8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a8490612a68565b60405180910390fd5b50565b611abc7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611da0565b60000160009054906101000a900460ff1615611ae057611adb83611daa565b611c08565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611b2657600080fd5b505afa925050508015611b5757506040513d601f19601f82011682018060405250810190611b549190612371565b60015b611b96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8d90612a28565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114611bfb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bf2906129e8565b60405180910390fd5b50611c07838383611e63565b5b505050565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000611ce630611e8f565b15905090565b600060019054906101000a900460ff16611d3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3290612aa8565b60405180910390fd5b611d43611eb2565b565b600060019054906101000a900460ff16611d94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8b90612aa8565b60405180910390fd5b565b6000819050919050565b6000819050919050565b611db381611e8f565b611df2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de990612a48565b60405180910390fd5b80611e1f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611d96565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611e6c83611f13565b600082511180611e795750805b15611e8a57611e888383611f62565b505b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611f01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ef890612aa8565b60405180910390fd5b611f11611f0c611c0d565b611c15565b565b611f1c81611daa565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6060611f6d83611e8f565b611fac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fa390612a88565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051611fd4919061274c565b600060405180830381855af49150503d806000811461200f576040519150601f19603f3d011682016040523d82523d6000602084013e612014565b606091505b509150915061203c82826040518060600160405280602781526020016131c160279139612046565b9250505092915050565b60608315612056578290506120a6565b6000835111156120695782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209d9190612946565b60405180910390fd5b9392505050565b60006120c06120bb84612b08565b612ae3565b9050828152602081018484840111156120d857600080fd5b6120e3848285612c99565b509392505050565b6000813590506120fa81613136565b92915050565b60008151905061210f8161314d565b92915050565b60008135905061212481613164565b92915050565b60008151905061213981613164565b92915050565b600082601f83011261215057600080fd5b81356121608482602086016120ad565b91505092915050565b6000813590506121788161317b565b92915050565b60006060828403121561219057600080fd5b61219a6060612ae3565b905060006121aa8482850161223f565b60008301525060206121be84828501612115565b60208301525060406121d284828501612115565b60408301525092915050565b6000604082840312156121f057600080fd5b6121fa6040612ae3565b9050600061220a8482850161222a565b600083015250602061221e8482850161222a565b60208301525092915050565b60008135905061223981613192565b92915050565b60008135905061224e816131a9565b92915050565b60006020828403121561226657600080fd5b6000612274848285016120eb565b91505092915050565b6000806040838503121561229057600080fd5b600061229e858286016120eb565b925050602083013567ffffffffffffffff8111156122bb57600080fd5b6122c78582860161213f565b9150509250929050565b600080600080600060c086880312156122e957600080fd5b60006122f7888289016120eb565b955050602061230888828901612169565b94505060406123198882890161222a565b935050606061232a888289016121de565b92505060a061233b8882890161222a565b9150509295509295909350565b60006020828403121561235a57600080fd5b600061236884828501612100565b91505092915050565b60006020828403121561238357600080fd5b60006123918482850161212a565b91505092915050565b6000602082840312156123ac57600080fd5b60006123ba8482850161222a565b91505092915050565b600080604083850312156123d657600080fd5b60006123e48582860161222a565b92505060206123f5858286016120eb565b9150509250929050565b6000806040838503121561241257600080fd5b60006124208582860161222a565b92505060206124318582860161222a565b9150509250929050565b60008060008060e0858703121561245157600080fd5b600061245f8782880161222a565b94505060206124708782880161222a565b9350506040612481878288016121de565b92505060806124928782880161217e565b91505092959194509250565b6124a781612c04565b82525050565b6124b681612c22565b82525050565b6124cd6124c882612c22565b612d55565b82525050565b60006124de82612b39565b6124e88185612b4f565b93506124f8818560208601612ca8565b80840191505092915050565b61250d81612c75565b82525050565b600061251e82612b44565b6125288185612b5a565b9350612538818560208601612ca8565b61254181612dbd565b840191505092915050565b6000612559602683612b5a565b915061256482612dce565b604082019050919050565b600061257c600283612b6b565b915061258782612e1d565b600282019050919050565b600061259f602c83612b5a565b91506125aa82612e46565b604082019050919050565b60006125c2602c83612b5a565b91506125cd82612e95565b604082019050919050565b60006125e5603883612b5a565b91506125f082612ee4565b604082019050919050565b6000612608602983612b5a565b915061261382612f33565b604082019050919050565b600061262b602e83612b5a565b915061263682612f82565b604082019050919050565b600061264e602e83612b5a565b915061265982612fd1565b604082019050919050565b6000612671602d83612b5a565b915061267c82613020565b604082019050919050565b6000612694602083612b5a565b915061269f8261306f565b602082019050919050565b60006126b7602683612b5a565b91506126c282613098565b604082019050919050565b60006126da602b83612b5a565b91506126e5826130e7565b604082019050919050565b604082016000820151612706600085018261271f565b506020820151612719602085018261271f565b50505050565b61272881612c5e565b82525050565b61273781612c5e565b82525050565b61274681612c68565b82525050565b600061275882846124d3565b915081905092915050565b600061276e8261256f565b915061277a82856124bc565b60208201915061278a82846124bc565b6020820191508190509392505050565b60006020820190506127af600083018461249e565b92915050565b6000610100820190506127cb600083018a61249e565b6127d8602083018961249e565b6127e56040830188612504565b6127f2606083018761272e565b6127ff608083018661272e565b61280c60a083018561272e565b61281960c08301846126f0565b98975050505050505050565b600060608201905061283a600083018661249e565b612847602083018561249e565b612854604083018461272e565b949350505050565b6000604082019050612871600083018561249e565b61287e602083018461272e565b9392505050565b600060208201905061289a60008301846124ad565b92915050565b600060c0820190506128b560008301896124ad565b6128c2602083018861272e565b6128cf604083018761272e565b6128dc606083018661272e565b6128e9608083018561272e565b6128f660a083018461272e565b979650505050505050565b600060808201905061291660008301876124ad565b612923602083018661273d565b61293060408301856124ad565b61293d60608301846124ad565b95945050505050565b600060208201905081810360008301526129608184612513565b905092915050565b600060208201905081810360008301526129818161254c565b9050919050565b600060208201905081810360008301526129a181612592565b9050919050565b600060208201905081810360008301526129c1816125b5565b9050919050565b600060208201905081810360008301526129e1816125d8565b9050919050565b60006020820190508181036000830152612a01816125fb565b9050919050565b60006020820190508181036000830152612a218161261e565b9050919050565b60006020820190508181036000830152612a4181612641565b9050919050565b60006020820190508181036000830152612a6181612664565b9050919050565b60006020820190508181036000830152612a8181612687565b9050919050565b60006020820190508181036000830152612aa1816126aa565b9050919050565b60006020820190508181036000830152612ac1816126cd565b9050919050565b6000602082019050612add600083018461272e565b92915050565b6000612aed612afe565b9050612af98282612cdb565b919050565b6000604051905090565b600067ffffffffffffffff821115612b2357612b22612d8e565b5b612b2c82612dbd565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000612b8182612c5e565b9150612b8c83612c5e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612bc557612bc4612d5f565b5b828202905092915050565b6000612bdb82612c5e565b9150612be683612c5e565b925082821015612bf957612bf8612d5f565b5b828203905092915050565b6000612c0f82612c3e565b9050919050565b60008115159050919050565b6000819050919050565b6000612c3782612c04565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000612c8082612c87565b9050919050565b6000612c9282612c3e565b9050919050565b82818337600083830152505050565b60005b83811015612cc6578082015181840152602081019050612cab565b83811115612cd5576000848401525b50505050565b612ce482612dbd565b810181811067ffffffffffffffff82111715612d0357612d02612d8e565b5b80604052505050565b6000612d1782612c5e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d4a57612d49612d5f565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b61313f81612c04565b811461314a57600080fd5b50565b61315681612c16565b811461316157600080fd5b50565b61316d81612c22565b811461317857600080fd5b50565b61318481612c2c565b811461318f57600080fd5b50565b61319b81612c5e565b81146131a657600080fd5b50565b6131b281612c68565b81146131bd57600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201a3e317f1ccb053b0fc97e1924c9aa82ffb898eceea2f331c015b1e373ffc47964736f6c63430008040033";

type SuperfluidConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SuperfluidConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Superfluid__factory extends ContractFactory {
  constructor(...args: SuperfluidConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Superfluid";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Superfluid> {
    return super.deploy(overrides || {}) as Promise<Superfluid>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Superfluid {
    return super.attach(address) as Superfluid;
  }
  connect(signer: Signer): Superfluid__factory {
    return super.connect(signer) as Superfluid__factory;
  }
  static readonly contractName: "Superfluid";
  public readonly contractName: "Superfluid";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SuperfluidInterface {
    return new utils.Interface(_abi) as SuperfluidInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Superfluid {
    return new Contract(address, _abi, signerOrProvider) as Superfluid;
  }
}