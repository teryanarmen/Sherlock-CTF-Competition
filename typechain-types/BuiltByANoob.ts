/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BuiltByANoobInterface extends utils.Interface {
  contractName: "BuiltByANoob";
  functions: {
    "bet(bytes32,bytes,address,uint256,bytes)": FunctionFragment;
    "setHalfByte(bytes1)": FunctionFragment;
    "shiftLeft(uint8)": FunctionFragment;
    "shiftRight(uint8)": FunctionFragment;
    "won()": FunctionFragment;
    "write0()": FunctionFragment;
    "write255()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bet",
    values: [BytesLike, BytesLike, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setHalfByte",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "shiftLeft",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shiftRight",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "won", values?: undefined): string;
  encodeFunctionData(functionFragment: "write0", values?: undefined): string;
  encodeFunctionData(functionFragment: "write255", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setHalfByte",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shiftLeft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shiftRight", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "won", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "write0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "write255", data: BytesLike): Result;

  events: {};
}

export interface BuiltByANoob extends BaseContract {
  contractName: "BuiltByANoob";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BuiltByANoobInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bet(
      passwordHash: BytesLike,
      sig: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _initial: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHalfByte(
      b: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shiftLeft(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shiftRight(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    won(overrides?: CallOverrides): Promise<[boolean]>;

    write0(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    write255(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bet(
    passwordHash: BytesLike,
    sig: BytesLike,
    _token: string,
    _amount: BigNumberish,
    _initial: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHalfByte(
    b: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shiftLeft(
    n: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shiftRight(
    n: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  won(overrides?: CallOverrides): Promise<boolean>;

  write0(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  write255(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bet(
      passwordHash: BytesLike,
      sig: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _initial: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setHalfByte(b: BytesLike, overrides?: CallOverrides): Promise<void>;

    shiftLeft(n: BigNumberish, overrides?: CallOverrides): Promise<void>;

    shiftRight(n: BigNumberish, overrides?: CallOverrides): Promise<void>;

    won(overrides?: CallOverrides): Promise<boolean>;

    write0(overrides?: CallOverrides): Promise<void>;

    write255(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    bet(
      passwordHash: BytesLike,
      sig: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _initial: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHalfByte(
      b: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shiftLeft(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shiftRight(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    won(overrides?: CallOverrides): Promise<BigNumber>;

    write0(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    write255(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bet(
      passwordHash: BytesLike,
      sig: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _initial: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHalfByte(
      b: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shiftLeft(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shiftRight(
      n: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    won(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    write0(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    write255(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}