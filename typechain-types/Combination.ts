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

export interface CombinationInterface extends utils.Interface {
  contractName: "Combination";
  functions: {
    "dial(uint8,bool)": FunctionFragment;
    "unlock(uint8)": FunctionFragment;
    "unlocked()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "dial",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unlocked", values?: undefined): string;

  decodeFunctionResult(functionFragment: "dial", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlocked", data: BytesLike): Result;

  events: {};
}

export interface Combination extends BaseContract {
  contractName: "Combination";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CombinationInterface;

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
    dial(
      _rotateVal: BigNumberish,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlock(
      _key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlocked(overrides?: CallOverrides): Promise<[boolean]>;
  };

  dial(
    _rotateVal: BigNumberish,
    _direction: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlock(
    _key: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlocked(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    dial(
      _rotateVal: BigNumberish,
      _direction: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    unlock(_key: BigNumberish, overrides?: CallOverrides): Promise<void>;

    unlocked(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    dial(
      _rotateVal: BigNumberish,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlock(
      _key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlocked(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    dial(
      _rotateVal: BigNumberish,
      _direction: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlock(
      _key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
