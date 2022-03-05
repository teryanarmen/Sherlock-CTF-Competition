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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SpawnInterface extends utils.Interface {
  contractName: "Spawn";
  functions: {
    "hi()": FunctionFragment;
    "i()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "hi", values?: undefined): string;
  encodeFunctionData(functionFragment: "i", values?: undefined): string;

  decodeFunctionResult(functionFragment: "hi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "i", data: BytesLike): Result;

  events: {};
}

export interface Spawn extends BaseContract {
  contractName: "Spawn";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SpawnInterface;

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
    hi(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    i(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  hi(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  i(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    hi(overrides?: CallOverrides): Promise<void>;

    i(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    hi(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    i(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    hi(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    i(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}