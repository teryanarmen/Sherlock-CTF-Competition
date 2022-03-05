/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SeeInterface extends utils.Interface {
  contractName: "See";
  functions: {
    "lookBalance()": FunctionFragment;
    "lookCollaborations(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "lookBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lookCollaborations",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "lookBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lookCollaborations",
    data: BytesLike
  ): Result;

  events: {};
}

export interface See extends BaseContract {
  contractName: "See";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SeeInterface;

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
    lookBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    lookCollaborations(
      _looker: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  lookBalance(overrides?: CallOverrides): Promise<BigNumber>;

  lookCollaborations(
    _looker: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    lookBalance(overrides?: CallOverrides): Promise<BigNumber>;

    lookCollaborations(
      _looker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    lookBalance(overrides?: CallOverrides): Promise<BigNumber>;

    lookCollaborations(
      _looker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    lookBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lookCollaborations(
      _looker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
