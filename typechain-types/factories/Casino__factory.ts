/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Casino, CasinoInterface } from "../Casino";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "Jackpot",
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
        indexed: false,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
    ],
    name: "Round",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prize",
        type: "uint256",
      },
    ],
    name: "Won",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "attemptNumber",
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
        name: "",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "finished",
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
  {
    inputs: [],
    name: "gameOn",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "chance",
        type: "uint256",
      },
    ],
    name: "jackpot",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastWinTime",
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
    name: "lastWinner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "restart",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roundNumber",
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
    name: "tokenToWeiValue",
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
    name: "totalDeposits",
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
    name: "totalJackpot",
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
    name: "totalPrize",
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
    name: "totalSupply",
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
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100216100fd60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350670de0b6b3a7640000600781905550426008819055506001600a819055506001600b60016101000a81548160ff021916908315150217905550610105565b600033905090565b611ef9806101146000396000f3fe6080604052600436106101355760003560e01c8063715018a6116100ab578063bef4876b1161006f578063bef4876b146104b0578063d0e30db0146104dd578063dd62ed3e146104e7578063e6b1e71c1461056c578063f2fde38b146105a4578063fe188184146105f557610135565b8063715018a6146103915780637d882097146103a857806382b1ad50146103d35780638da5cb5b146103fe578063a9059cbb1461043f57610135565b806342833cd1116100fd57806342833cd1146102555780634a1d0eed146102805780634e2786fb146102ab57806369384237146102d65780636bea9a481461030157806370a082311461032c57610135565b8063095ea7b31461013a57806318160ddd146101ab5780631ef3755d146101d65780632583dc87146101ed5780632e1a7d4d1461021a575b600080fd5b34801561014657600080fd5b506101936004803603604081101561015d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610636565b60405180821515815260200191505060405180910390f35b3480156101b757600080fd5b506101c06106c3565b6040518082815260200191505060405180910390f35b3480156101e257600080fd5b506101eb6106c9565b005b3480156101f957600080fd5b5061020261093e565b60405180821515815260200191505060405180910390f35b34801561022657600080fd5b506102536004803603602081101561023d57600080fd5b8101908080359060200190929190505050610951565b005b34801561026157600080fd5b5061026a610ac4565b6040518082815260200191505060405180910390f35b34801561028c57600080fd5b50610295610aca565b6040518082815260200191505060405180910390f35b3480156102b757600080fd5b506102c0610ad0565b6040518082815260200191505060405180910390f35b3480156102e257600080fd5b506102eb610ad6565b6040518082815260200191505060405180910390f35b34801561030d57600080fd5b50610316610adc565b6040518082815260200191505060405180910390f35b34801561033857600080fd5b5061037b6004803603602081101561034f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ae2565b6040518082815260200191505060405180910390f35b34801561039d57600080fd5b506103a6610afa565b005b3480156103b457600080fd5b506103bd610c67565b6040518082815260200191505060405180910390f35b3480156103df57600080fd5b506103e8610c6d565b6040518082815260200191505060405180910390f35b34801561040a57600080fd5b50610413610c73565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561044b57600080fd5b506104986004803603604081101561046257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c9c565b60405180821515815260200191505060405180910390f35b3480156104bc57600080fd5b506104c5610cb1565b60405180821515815260200191505060405180910390f35b6104e5610cc4565b005b3480156104f357600080fd5b506105566004803603604081101561050a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f96565b6040518082815260200191505060405180910390f35b6105a26004803603604081101561058257600080fd5b810190808035906020019092919080359060200190929190505050610fbb565b005b3480156105b057600080fd5b506105f3600480360360208110156105c757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061159f565b005b34801561060157600080fd5b5061060a611791565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905092915050565b60045481565b6106d16117b7565b73ffffffffffffffffffffffffffffffffffffffff166106ef610c73565b73ffffffffffffffffffffffffffffffffffffffff1614610778576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6154606008540142116107f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f436f6f6c20646f776e20706572696f640000000000000000000000000000000081525060200191505060405180910390fd5b60646019600554028161080257fe5b046006546003540101471461087f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f726f756e64207374696c6c206f6e00000000000000000000000000000000000081525060200191505060405180910390fd5b6064600f600554028161088e57fe5b046006600082825401925050819055506006544703600381905550600454670de0b6b3a764000060035402816108c057fe5b0460078190555060006005819055506001600b60016101000a81548160ff0219169083151502179055506001600a6000828254019250508190555060006009819055507f61151c9b41068d1a8a91841576b4689b0ccdf5553e4a9248d86a33f51940dfb1600a546040518082815260200191505060405180910390a1565b600b60019054906101000a900460ff1681565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561099d57600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506000670de0b6b3a7640000600754830281610a0157fe5b04905081600460008282540392505081905550806003600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610a6a573d6000803e3d6000fd5b507f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b653383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15050565b60095481565b60065481565b600a5481565b60075481565b60085481565b60016020528060005260406000206000915090505481565b610b026117b7565b73ffffffffffffffffffffffffffffffffffffffff16610b20610c73565b73ffffffffffffffffffffffffffffffffffffffff1614610ba9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60035481565b60055481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000610ca93384846117bf565b905092915050565b600b60009054906101000a900460ff1681565b67016345785d8a0000341015610d42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f4c6f7720696e766573746d656e7400000000000000000000000000000000000081525060200191505060405180910390fd5b600b60009054906101000a900460ff1615610da8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611e98602c913960400191505060405180910390fd5b600b60019054906101000a900460ff16610e2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f5761697420666f7220746f6b656e2076616c756520757064617465000000000081525060200191505060405180910390fd5b600660095410610ea2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f5761697420706c6561736500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000349050600754670de0b6b3a7640000820281610ebc57fe5b04600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600360008282540192505081905550600754670de0b6b3a7640000820281610f2e57fe5b046004600082825401925050819055507fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6002602052816000526040600020602052806000526040600020600091509150505481565b600b60009054906101000a900460ff161561103e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260048152602001807f4f7665720000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600b60019054906101000a900460ff16801561105c5750600a600954105b6110ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f5761697420666f72206e65787420726f756e640000000000000000000000000081525060200191505060405180910390fd5b6000811180156110de5750600681105b611150576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260078152602001807f216368616e63650000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600a670de0b6b3a76400006001600a54030282028161116b57fe5b04670de0b6b3a764000082020134146111ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f496e636f727265637420616d6f756e740000000000000000000000000000000081525060200191505060405180910390fd5b60003490508060056000828254019250508190555060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200142815260200183815250600c600954600a811061124157fe5b6003020160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015590505060016009600082825401925050819055506112bd83611aa3565b925081600a026112ed847f771f76e0e30e82175cf7ce9c7ff7fe4de36dc79e6f274ddcffd039931e26f07e611adb565b116114565733600b60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b60006101000a81548160ff0219169083151502179055506000600654600554600a85600354028161136457fe5b0401019050600a83600354028161137757fe5b04600360008282540392505081905550600a83600754028161139557fe5b04600760008282540392505081905550426008819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156113f2573d6000803e3d6000fd5b507f256609b3631a3103eba398fc72e575f7cc48472c00621c0a8d3dc8611cddd5fb338486604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a15061159a565b600a600954141561159957600061146b611af9565b905080600b60026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006064604b60055402816114bf57fe5b04905042600881905550600c60006114d79190611dea565b6000600b60016101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611538573d6000803e3d6000fd5b507ffdc49939175858b2bb557093a7d52fa6b6f3aad917d282d61758fab4805f102a828683604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a150505b5b505050565b6115a76117b7565b73ffffffffffffffffffffffffffffffffffffffff166115c5610c73565b73ffffffffffffffffffffffffffffffffffffffff161461164e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156116d4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611e726026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600b60029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561180d57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141580156118e557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414155b156119fe5781600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561197357600080fd5b81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550600190509392505050565b60008082604051602001808281526020019150506040516020818303038152906040528051906020012090508060001c915050919050565b600081831015611aed57828203611af1565b8183035b905092915050565b600080611b04611cba565b90506000611b10611e00565b60005b600a811015611b5857600c81600a8110611b2957fe5b600302016002015483019250828282600a8110611b4257fe5b6020020181815250508080600101915050611b13565b50818381611b6257fe5b069250806000600a8110611b7257fe5b6020020151831015611bbe57600c6000600a8110611b8c57fe5b6003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169350505050611cb7565b60006001600a0390506000600190505b818111611c7a576000600282840381611be357fe5b04820190508381600a8110611bf457fe5b6020020151861015611c0b57600181039250611c74565b8381600a8110611c1757fe5b6020020151861115611c2e57600181019150611c73565b600c60018201600a8110611c3e57fe5b6003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169650505050505050611cb7565b5b50611bce565b600c81600a8110611c8757fe5b6003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16955050505050505b90565b60008060005b600a811015611ddf5781600c82600a8110611cd757fe5b6003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600c83600a8110611d0c57fe5b6003020160010154600c84600a8110611d2157fe5b6003020160020154600c85600a8110611d3657fe5b6003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1631604051602001808681526020018573ffffffffffffffffffffffffffffffffffffffff1660601b8152601401848152602001838152602001828152602001955050505050506040516020818303038152906040528051906020012091508080600101915050611cc0565b508060001c91505090565b5080600a6003020190611dfd9190611e23565b50565b604051806101400160405280600a90602082028036833780820191505090505090565b5b80821115611e6d57600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160009055600282016000905550600301611e24565b509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373576520617265207275696e65642c20776974686472617720796f7572206d6f6e657920616e64206c65617665a26469706673582212204875c80078f01629bf8b6b97356c101ba48555c05f656d5c44ab5abe2b3994b364736f6c63430007030033";

type CasinoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CasinoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Casino__factory extends ContractFactory {
  constructor(...args: CasinoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Casino";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Casino> {
    return super.deploy(overrides || {}) as Promise<Casino>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Casino {
    return super.attach(address) as Casino;
  }
  connect(signer: Signer): Casino__factory {
    return super.connect(signer) as Casino__factory;
  }
  static readonly contractName: "Casino";
  public readonly contractName: "Casino";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CasinoInterface {
    return new utils.Interface(_abi) as CasinoInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Casino {
    return new Contract(address, _abi, signerOrProvider) as Casino;
  }
}