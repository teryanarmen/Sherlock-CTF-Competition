/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFloraToken, IFloraTokenInterface } from "../IFloraToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "TokenHolder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveFor",
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
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
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
    name: "mint",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFloraToken__factory {
  static readonly abi = _abi;
  static createInterface(): IFloraTokenInterface {
    return new utils.Interface(_abi) as IFloraTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFloraToken {
    return new Contract(address, _abi, signerOrProvider) as IFloraToken;
  }
}
