/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BecomeMasterInterface extends utils.Interface {
  contractName: "BecomeMaster";
  functions: {
    "admin()": FunctionFragment;
    "allocate()": FunctionFragment;
    "allocatorBalance(address)": FunctionFragment;
    "collectAllocations()": FunctionFragment;
    "master()": FunctionFragment;
    "sendAllocation(address)": FunctionFragment;
    "takeMasterRole()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "allocate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allocatorBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "collectAllocations",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "master", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendAllocation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "takeMasterRole",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allocate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allocatorBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectAllocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "master", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "takeMasterRole",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BecomeMaster extends BaseContract {
  contractName: "BecomeMaster";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BecomeMasterInterface;

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
    admin(overrides?: CallOverrides): Promise<[string]>;

    allocate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allocatorBalance(
      allocator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collectAllocations(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    master(overrides?: CallOverrides): Promise<[string]>;

    sendAllocation(
      allocator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    takeMasterRole(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  allocate(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allocatorBalance(
    allocator: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collectAllocations(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  master(overrides?: CallOverrides): Promise<string>;

  sendAllocation(
    allocator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  takeMasterRole(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    allocate(overrides?: CallOverrides): Promise<void>;

    allocatorBalance(
      allocator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectAllocations(overrides?: CallOverrides): Promise<void>;

    master(overrides?: CallOverrides): Promise<string>;

    sendAllocation(allocator: string, overrides?: CallOverrides): Promise<void>;

    takeMasterRole(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    allocate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allocatorBalance(
      allocator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collectAllocations(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    master(overrides?: CallOverrides): Promise<BigNumber>;

    sendAllocation(
      allocator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    takeMasterRole(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allocate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allocatorBalance(
      allocator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collectAllocations(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    master(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendAllocation(
      allocator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    takeMasterRole(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}