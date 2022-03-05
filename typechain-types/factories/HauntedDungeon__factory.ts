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
import type {
  HauntedDungeon,
  HauntedDungeonInterface,
} from "../HauntedDungeon";

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
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "Talk",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "attack",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    name: "combatting",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "currentFloor",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "currentMnstr",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    name: "defense",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "effects",
    outputs: [
      {
        internalType: "int8",
        name: "",
        type: "int8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enterDungeon",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "increaseTreasure",
    outputs: [],
    stateMutability: "payable",
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
    name: "insideDungeon",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lives",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "prices",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "shopItems",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "spent",
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
        internalType: "string",
        name: "_prod",
        type: "string",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "payable",
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
    name: "storeAccessLimit",
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
    name: "treasure",
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
    name: "turn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600160006101000a81548160ff0219169083151502179055506040518060a0016040528060018152602001600381526020016005815260200160078152602001603281525060029060056200005d92919062000762565b506040518060a001604052806040518060400160405280600a81526020017f6c696665506f74696f6e0000000000000000000000000000000000000000000081525081526020016040518060400160405280600981526020017f646d67506f74696f6e000000000000000000000000000000000000000000000081525081526020016040518060400160405280600981526020017f646566506f74696f6e000000000000000000000000000000000000000000000081525081526020016040518060400160405280600a81526020017f6c65656368426c6f6f640000000000000000000000000000000000000000000081525081526020016040518060400160405280600781526020017f6d6e746e446577000000000000000000000000000000000000000000000000008152508152506007906005620001a0929190620007a7565b50670853a0d2313c000060146007600060058110620001e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01604051620001f8919062000a6d565b9081526020016040518091039020819055506710a741a4627800006014600760016005811062000251577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160405162000261919062000a6d565b908152602001604051809103902081905550670853a0d2313c000060146007600260058110620002ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01604051620002ca919062000a6d565b90815260200160405180910390208190555067063eb89da4ed00006014600760036005811062000323577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160405162000333919062000a6d565b9081526020016040518091039020819055506702c68af0bb140000601460076004600581106200038c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b016040516200039c919062000a6d565b9081526020016040518091039020819055506040518060600160405280600460000b60000b81526020016000800b60000b81526020016000800b60000b815250601660076000600581106200041a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b016040516200042a919062000a6d565b90815260200160405180910390209060036200044892919062000801565b5060405180606001604052806000800b60000b8152602001600460000b60000b81526020016000800b60000b81525060166007600160058110620004b5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01604051620004c5919062000a6d565b9081526020016040518091039020906003620004e392919062000801565b5060405180606001604052806000800b60000b81526020016000800b60000b8152602001600260000b60000b8152506016600760026005811062000550577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160405162000560919062000a6d565b90815260200160405180910390209060036200057e92919062000801565b5060405180606001604052807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe60000b60000b81526020016000800b60000b8152602001600860000b60000b815250601660076003600581106200060b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b016040516200061b919062000a6d565b90815260200160405180910390209060036200063992919062000801565b5060405180606001604052807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe60000b60000b8152602001600c60000b60000b81526020017ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60000b60000b81525060166007600460058110620006e6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01604051620006f6919062000a6d565b90815260200160405180910390209060036200071492919062000801565b50336001806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503460008190555062000b0b565b826005810192821562000794579160200282015b828111156200079357825182559160200191906001019062000776565b5b509050620007a39190620008a5565b5090565b8260058101928215620007ee579160200282015b82811115620007ed578251829080519060200190620007dc929190620008c4565b5091602001919060010190620007bb565b5b509050620007fd919062000955565b5090565b826003601f01602090048101928215620008925791602002820160005b838211156200086157835183826101000a81548160ff021916908360000b60ff16021790555092602001926001016020816000010492830192600103026200081e565b8015620008905782816101000a81549060ff021916905560010160208160000104928301926001030262000861565b505b509050620008a191906200097d565b5090565b5b80821115620008c0576000816000905550600101620008a6565b5090565b828054620008d29062000aa6565b90600052602060002090601f016020900481019282620008f6576000855562000942565b82601f106200091157805160ff191683800117855562000942565b8280016001018555821562000942579182015b828111156200094157825182559160200191906001019062000924565b5b5090506200095191906200097d565b5090565b5b808211156200097957600081816200096f91906200099c565b5060010162000956565b5090565b5b80821115620009985760008160009055506001016200097e565b5090565b508054620009aa9062000aa6565b6000825580601f10620009be5750620009df565b601f016020900490600052602060002090810190620009de91906200097d565b5b50565b60008154620009f18162000aa6565b620009fd818662000a9b565b9450600182166000811462000a1b576001811462000a2d5762000a64565b60ff1983168652818601935062000a64565b62000a388562000a86565b60005b8381101562000a5c5781548189015260018201915060208101905062000a3b565b838801955050505b50505092915050565b600062000a7b8284620009e2565b915081905092915050565b60008190508160005260206000209050919050565b600081905092915050565b6000600282049050600182168062000abf57607f821691505b6020821081141562000ad65762000ad562000adc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6132908062000b1b6000396000f3fe6080604052600436106101095760003560e01c8063897bfd0911610095578063a0009d7011610064578063a0009d701461039b578063c3825f4b146103d8578063d018db3e14610415578063deaab66f14610452578063e520fc7e1461045c57610109565b8063897bfd0914610312578063899badae1461031c5780638b299903146103595780638da5cb5b1461037057610109565b806315d32881116100dc57806315d32881146101e15780631e6a41ea1461021e5780635ca9e3801461025b5780636e5b24a51461029857806372dfa41f146102d557610109565b8063048afbda1461010e57806304a5736a1461014b57806311bc675114610188578063131a0680146101c5575b600080fd5b34801561011a57600080fd5b506101356004803603810190610130919061219c565b610487565b60405161014291906126de565b60405180910390f35b34801561015757600080fd5b50610172600480360381019061016d9190612219565b6104af565b60405161017f91906126f9565b60405180910390f35b34801561019457600080fd5b506101af60048036038101906101aa9190612173565b6104fe565b6040516101bc91906126c3565b60405180910390f35b6101df60048036038101906101da91906121d8565b61051e565b005b3480156101ed57600080fd5b5061020860048036038101906102039190612173565b6109d6565b60405161021591906126de565b60405180910390f35b34801561022a57600080fd5b5061024560048036038101906102409190612173565b6109ee565b6040516102529190612816565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d919061226d565b610a06565b60405161028f9190612714565b60405180910390f35b3480156102a457600080fd5b506102bf60048036038101906102ba9190612173565b610aa9565b6040516102cc9190612816565b60405180910390f35b3480156102e157600080fd5b506102fc60048036038101906102f79190612173565b610ac1565b60405161030991906126de565b60405180910390f35b61031a610ad9565b005b34801561032857600080fd5b50610343600480360381019061033e9190612173565b610b81565b6040516103509190612816565b60405180910390f35b34801561036557600080fd5b5061036e610b99565b005b34801561037c57600080fd5b5061038561161b565b6040516103929190612594565b60405180910390f35b3480156103a757600080fd5b506103c260048036038101906103bd9190612173565b61163f565b6040516103cf91906126c3565b60405180910390f35b3480156103e457600080fd5b506103ff60048036038101906103fa91906121d8565b61165f565b60405161040c9190612816565b60405180910390f35b34801561042157600080fd5b5061043c60048036038101906104379190612173565b61168d565b60405161044991906126de565b60405180910390f35b61045a6116a5565b005b34801561046857600080fd5b50610471611949565b60405161047e9190612816565b60405180910390f35b600f60205281600052604060002081600281106104a357600080fd5b01600091509150505481565b60168280516020810182018051848252602083016020850120818352809550505050505081600381106104e157600080fd5b60209182820401919006915091509054906101000a900460000b81565b600c6020528060005260406000206000915054906101000a900460ff1681565b6000805411610562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055990612736565b60405180910390fd5b60011515600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146105f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ec90612796565b60405180910390fd5b346014826040516106069190612540565b90815260200160405180910390205414610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c90612756565b60405180910390fd5b6000601560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116106d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ce906127f6565b60405180910390fd5b6016816040516106e79190612540565b908152602001604051809103902060006003811061072e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460000b60000b601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461079591906128ae565b925050819055506016816040516107ac9190612540565b90815260200160405180910390206001600381106107f3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460000b60000b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461085a91906128ae565b925050819055506016816040516108719190612540565b90815260200160405180910390206002600381106108b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602091828204019190069054906101000a900460000b60000b601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461091f91906128ae565b925050819055506001601560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109769190612bde565b9250508190555034601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109cc9190612942565b9250508190555050565b60126020528060005260406000206000915090505481565b60136020528060005260406000206000915090505481565b60078160058110610a1657600080fd5b016000915090508054610a2890612cb3565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5490612cb3565b8015610aa15780601f10610a7657610100808354040283529160200191610aa1565b820191906000526020600020905b815481529060010190602001808311610a8457829003601f168201915b505050505081565b600e6020528060005260406000206000915090505481565b60106020528060005260406000206000915090505481565b60018054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5e90612776565b60405180910390fd5b34600080828254610b789190612942565b92505081905550565b60156020528060005260406000206000915090505481565b6000805411610bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd490612736565b60405180910390fd5b60011515600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610c70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6790612796565b60405180910390fd5b600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610d5057610cc961194f565b600160006101000a81548160ff021916908315150217905550600160009054906101000a900460ff16610d4f576001600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b5b600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060028110610dc8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0154601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205412158015610e255750600160009054906101000a900460ff16155b15611000577f96f8a32e9ed902266712803e26e47fcd66e4a0c019ebf17e00f6cf04ffa84ba933604051610e599190612667565b60405180910390a1610e69611eb9565b6002601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610eb59190612a02565b600080828254610ec59190612942565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc6002601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f329190612a02565b9081150290604051600060405180830381858888f19350505050158015610f5d573d6000803e3d6000fd5b506000601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506113cd565b600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600160028110611078577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0154601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054121580156110d55750600160009054906101000a900460ff16155b1561127d57601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060028110611192577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0160008282546111a29190612b4a565b92505081905550600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600160028110611221577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0154601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112719190612b4a565b925050819055506113cc565b600160009054906101000a900460ff166113af57601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600160028110611349577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01546113559190612b4a565b601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113a39190612b4a565b925050819055506113cb565b6000600160006101000a81548160ff0219169083151502179055505b5b5b6000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054136115e1576000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000808282546115599190612942565b925050819055506000601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f96f8a32e9ed902266712803e26e47fcd66e4a0c019ebf17e00f6cf04ffa84ba9336040516115d49190612695565b60405180910390a1611619565b7f96f8a32e9ed902266712803e26e47fcd66e4a0c019ebf17e00f6cf04ffa84ba93360405161161091906125af565b60405180910390a15b565b60018054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d6020528060005260406000206000915054906101000a900460ff1681565b6014818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b60116020528060005260406000206000915090505481565b60008054116116e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e090612736565b60405180910390fd5b67016345785d8a0000341015611734576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172b906127d6565b60405180910390fd5b346000808282546117459190612942565b925050819055506001600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506003601560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506003601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f96f8a32e9ed902266712803e26e47fcd66e4a0c019ebf17e00f6cf04ffa84ba93360405161193f919061260b565b60405180910390a1565b60005481565b60008060005411611995576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198c90612736565b60405180910390fd5b60001515600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611a28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a1f906127b6565b60405180910390fd5b6001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a789190612942565b925050819055506005600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611cc3573373ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f19350505050158015611b0f573d6000803e3d6000fd5b50600080819055507f96f8a32e9ed902266712803e26e47fcd66e4a0c019ebf17e00f6cf04ffa84ba933604051611b469190612639565b60405180910390a16000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506003601560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506003601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019050611eb6565b604051806040016040528060026001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d1c9190612bde565b60058110611d53577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0154600a611d5f61204f565b611d699190612d44565b611d7391906128ae565b815260200160026001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611dc69190612bde565b60058110611dfd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01546007611e0961204f565b611e139190612d44565b6002611e1f9190612a33565b611e2991906128ae565b815250600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020906002611e79929190612084565b507f96f8a32e9ed902266712803e26e47fcd66e4a0c019ebf17e00f6cf04ffa84ba933604051611ea991906125dd565b60405180910390a1600090505b90565b6003601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506002601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611f4e9190612998565b925050819055506002601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611fa59190612998565b92505081905550600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546001611ff89190612942565b601560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546120469190612942565b92505081905550565b600042443360405160200161206693929190612557565b6040516020818303038152906040528051906020012060001c905090565b82600281019282156120b3579160200282015b828111156120b2578251825591602001919060010190612097565b5b5090506120c091906120c4565b5090565b5b808211156120dd5760008160009055506001016120c5565b5090565b60006120f46120ef84612856565b612831565b90508281526020810184848401111561210c57600080fd5b612117848285612c71565b509392505050565b60008135905061212e8161322c565b92915050565b600082601f83011261214557600080fd5b81356121558482602086016120e1565b91505092915050565b60008135905061216d81613243565b92915050565b60006020828403121561218557600080fd5b60006121938482850161211f565b91505092915050565b600080604083850312156121af57600080fd5b60006121bd8582860161211f565b92505060206121ce8582860161215e565b9150509250929050565b6000602082840312156121ea57600080fd5b600082013567ffffffffffffffff81111561220457600080fd5b61221084828501612134565b91505092915050565b6000806040838503121561222c57600080fd5b600083013567ffffffffffffffff81111561224657600080fd5b61225285828601612134565b92505060206122638582860161215e565b9150509250929050565b60006020828403121561227f57600080fd5b600061228d8482850161215e565b91505092915050565b61229f81612c12565b82525050565b6122b66122b182612c12565b612d16565b82525050565b6122c581612c24565b82525050565b6122d481612c30565b82525050565b6122e381612c3a565b82525050565b60006122f482612887565b6122fe8185612892565b935061230e818560208601612c80565b61231781612e31565b840191505092915050565b600061232d82612887565b61233781856128a3565b9350612347818560208601612c80565b80840191505092915050565b6000612360603583612892565b915061236b82612e4f565b604082019050919050565b6000612383601483612892565b915061238e82612e9e565b602082019050919050565b60006123a6601383612892565b91506123b182612ec7565b602082019050919050565b60006123c9603683612892565b91506123d482612ef0565b604082019050919050565b60006123ec602883612892565b91506123f782612f3f565b604082019050919050565b600061240f602383612892565b915061241a82612f8e565b604082019050919050565b6000612432603f83612892565b915061243d82612fdd565b604082019050919050565b6000612455603483612892565b91506124608261302c565b604082019050919050565b6000612478604183612892565b91506124838261307b565b606082019050919050565b600061249b603b83612892565b91506124a6826130f0565b604082019050919050565b60006124be603283612892565b91506124c98261313f565b604082019050919050565b60006124e1603f83612892565b91506124ec8261318e565b604082019050919050565b6000612504603983612892565b915061250f826131dd565b604082019050919050565b61252381612c67565b82525050565b61253a61253582612c67565b612d3a565b82525050565b600061254c8284612322565b915081905092915050565b60006125638286612529565b6020820191506125738285612529565b60208201915061258382846122a5565b601482019150819050949350505050565b60006020820190506125a96000830184612296565b92915050565b60006040820190506125c46000830184612296565b81810360208301526125d581612376565b905092915050565b60006040820190506125f26000830184612296565b818103602083015261260381612399565b905092915050565b60006040820190506126206000830184612296565b818103602083015261263181612425565b905092915050565b600060408201905061264e6000830184612296565b818103602083015261265f8161246b565b905092915050565b600060408201905061267c6000830184612296565b818103602083015261268d8161248e565b905092915050565b60006040820190506126aa6000830184612296565b81810360208301526126bb816124b1565b905092915050565b60006020820190506126d860008301846122bc565b92915050565b60006020820190506126f360008301846122cb565b92915050565b600060208201905061270e60008301846122da565b92915050565b6000602082019050818103600083015261272e81846122e9565b905092915050565b6000602082019050818103600083015261274f81612353565b9050919050565b6000602082019050818103600083015261276f816123bc565b9050919050565b6000602082019050818103600083015261278f816123df565b9050919050565b600060208201905081810360008301526127af81612402565b9050919050565b600060208201905081810360008301526127cf81612448565b9050919050565b600060208201905081810360008301526127ef816124d4565b9050919050565b6000602082019050818103600083015261280f816124f7565b9050919050565b600060208201905061282b600083018461251a565b92915050565b600061283b61284c565b90506128478282612ce5565b919050565b6000604051905090565b600067ffffffffffffffff82111561287157612870612e02565b5b61287a82612e31565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006128b982612c30565b91506128c483612c30565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038313600083121516156128ff576128fe612d75565b5b817f800000000000000000000000000000000000000000000000000000000000000003831260008312161561293757612936612d75565b5b828201905092915050565b600061294d82612c67565b915061295883612c67565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561298d5761298c612d75565b5b828201905092915050565b60006129a382612c30565b91506129ae83612c30565b9250826129be576129bd612da4565b5b600160000383147f8000000000000000000000000000000000000000000000000000000000000000831416156129f7576129f6612d75565b5b828205905092915050565b6000612a0d82612c67565b9150612a1883612c67565b925082612a2857612a27612da4565b5b828204905092915050565b6000612a3e82612c30565b9150612a4983612c30565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615612a8857612a87612d75565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615612ac557612ac4612d75565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615612b0257612b01612d75565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0582126000841260008412161615612b3f57612b3e612d75565b5b828202905092915050565b6000612b5582612c30565b9150612b6083612c30565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615612b9b57612b9a612d75565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018213600084121615612bd357612bd2612d75565b5b828203905092915050565b6000612be982612c67565b9150612bf483612c67565b925082821015612c0757612c06612d75565b5b828203905092915050565b6000612c1d82612c47565b9050919050565b60008115159050919050565b6000819050919050565b60008160000b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612c9e578082015181840152602081019050612c83565b83811115612cad576000848401525b50505050565b60006002820490506001821680612ccb57607f821691505b60208210811415612cdf57612cde612dd3565b5b50919050565b612cee82612e31565b810181811067ffffffffffffffff82111715612d0d57612d0c612e02565b5b80604052505050565b6000612d2182612d28565b9050919050565b6000612d3382612e42565b9050919050565b6000819050919050565b6000612d4f82612c30565b9150612d5a83612c30565b925082612d6a57612d69612da4565b5b828207905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f536f6d656f6e6520616c726561647920636c61696d656420746865207472656160008201527f73757265212054727920616761696e206c617465720000000000000000000000602082015250565b7f596f7520737572766976656420736f6d65686f77000000000000000000000000600082015250565b7f41206d6f6e737465722061707065617265642100000000000000000000000000600082015250565b7f496e636f727265637420616d6f756e74206f662066756e64732070726f76696460008201527f656420746f2062757920746861742070726f6475637400000000000000000000602082015250565b7f4f6e6c7920746865206f776e6572206d617920696e637265617365207468652060008201527f5472656173757265000000000000000000000000000000000000000000000000602082015250565b7f546f20706c61792c20796f75206d75737420656e746572207468652064756e6760008201527f656f6e0000000000000000000000000000000000000000000000000000000000602082015250565b7f57656c636f6d6520746f20746865204861756e7465642044756e67656f6e2e2060008201527f57696c6c20796f752062652061626c6520746f20636f6e717565722069743f00602082015250565b7f596f752063616e277420646f20746861742120596f7527726520696e2074686560008201527f206d6964646c65206f66206120636f6d62617421000000000000000000000000602082015250565b7f436f6e67726174756c6174696f6e73212020596f7520636f6e7175657265642060008201527f7468652044756e67656f6e20616e6420746f6f6b20746865207472656173757260208201527f6500000000000000000000000000000000000000000000000000000000000000604082015250565b7f596f75206b696c6c656420746865206d6f6e737465722120596f75207265636f60008201527f76657220736f6d65206f6620746865206d6f6e6579207370656e740000000000602082015250565b7f596f75206a75737420646965642e20456e746572207468652044756e67656f6e60008201527f20616761696e20696620796f7520646172650000000000000000000000000000602082015250565b7f596f75206e65656420746f20706179206174206c6561737420302e312065746860008201527f657220746f20656e74657220746865204861756e7465642044756e67656f6e00602082015250565b7f596f7520656e7465726564207468652073746f726520746f6f206d616e79207460008201527f696d6573212053746f726520697320636c6f736564206e6f7700000000000000602082015250565b61323581612c12565b811461324057600080fd5b50565b61324c81612c67565b811461325757600080fd5b5056fea26469706673582212209b65ec768ffdb5627706d20ac0468d0161cc980dd5060587c7544863026ce4eb64736f6c63430008040033";

type HauntedDungeonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HauntedDungeonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HauntedDungeon__factory extends ContractFactory {
  constructor(...args: HauntedDungeonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "HauntedDungeon";
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<HauntedDungeon> {
    return super.deploy(overrides || {}) as Promise<HauntedDungeon>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HauntedDungeon {
    return super.attach(address) as HauntedDungeon;
  }
  connect(signer: Signer): HauntedDungeon__factory {
    return super.connect(signer) as HauntedDungeon__factory;
  }
  static readonly contractName: "HauntedDungeon";
  public readonly contractName: "HauntedDungeon";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HauntedDungeonInterface {
    return new utils.Interface(_abi) as HauntedDungeonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HauntedDungeon {
    return new Contract(address, _abi, signerOrProvider) as HauntedDungeon;
  }
}
