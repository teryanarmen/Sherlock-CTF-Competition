/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SheerLockingInterface extends utils.Interface {
  contractName: "SheerLocking";
  functions: {
    "_successList1(address)": FunctionFragment;
    "_successList2(address)": FunctionFragment;
    "_successList3(address)": FunctionFragment;
    "_successList4(address)": FunctionFragment;
    "_successList5(address)": FunctionFragment;
    "_successList6(address)": FunctionFragment;
    "_successList7(address)": FunctionFragment;
    "solverIsL33t()": FunctionFragment;
    "unSheerLock1(string,string,string,string,string,bytes8)": FunctionFragment;
    "unSheerLock2(string,string,string,string,string,bytes8)": FunctionFragment;
    "unSheerLock3(string,string,string,string,string,bytes8)": FunctionFragment;
    "unSheerLock4(string,string,string,string,string,bytes8)": FunctionFragment;
    "unSheerLock5(string,string,string,string,string,bytes8)": FunctionFragment;
    "unSheerLock6(string,string,string,string,bytes8)": FunctionFragment;
    "unSheerLock7(string,string,string,string,string,bytes8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_successList1",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_successList2",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_successList3",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_successList4",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_successList5",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_successList6",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_successList7",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "solverIsL33t",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unSheerLock1",
    values: [string, string, string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unSheerLock2",
    values: [string, string, string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unSheerLock3",
    values: [string, string, string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unSheerLock4",
    values: [string, string, string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unSheerLock5",
    values: [string, string, string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unSheerLock6",
    values: [string, string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unSheerLock7",
    values: [string, string, string, string, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "_successList1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_successList2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_successList3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_successList4",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_successList5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_successList6",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_successList7",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "solverIsL33t",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unSheerLock1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unSheerLock2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unSheerLock3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unSheerLock4",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unSheerLock5",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unSheerLock6",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unSheerLock7",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SheerLocking extends BaseContract {
  contractName: "SheerLocking";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SheerLockingInterface;

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
    _successList1(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    _successList2(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    _successList3(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    _successList4(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    _successList5(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    _successList6(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    _successList7(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    solverIsL33t(overrides?: CallOverrides): Promise<[boolean]>;

    unSheerLock1(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unSheerLock2(
      passphrase4: string,
      passphrase2: string,
      passphrase3: string,
      passphrase1: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unSheerLock3(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unSheerLock4(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unSheerLock5(
      passphrase3: string,
      passphrase2: string,
      passphrase1: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unSheerLock6(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unSheerLock7(
      passphrase5: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase1: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _successList1(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _successList2(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _successList3(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _successList4(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _successList5(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _successList6(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _successList7(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  solverIsL33t(overrides?: CallOverrides): Promise<boolean>;

  unSheerLock1(
    passphrase1: string,
    passphrase2: string,
    passphrase3: string,
    passphrase4: string,
    passphrase5: string,
    keyThree: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unSheerLock2(
    passphrase4: string,
    passphrase2: string,
    passphrase3: string,
    passphrase1: string,
    passphrase5: string,
    keyThree: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unSheerLock3(
    passphrase1: string,
    passphrase2: string,
    passphrase3: string,
    passphrase4: string,
    passphrase5: string,
    keyThree: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unSheerLock4(
    passphrase1: string,
    passphrase2: string,
    passphrase3: string,
    passphrase4: string,
    passphrase5: string,
    keyThree: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unSheerLock5(
    passphrase3: string,
    passphrase2: string,
    passphrase1: string,
    passphrase4: string,
    passphrase5: string,
    keyThree: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unSheerLock6(
    passphrase1: string,
    passphrase2: string,
    passphrase3: string,
    passphrase5: string,
    keyThree: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unSheerLock7(
    passphrase5: string,
    passphrase2: string,
    passphrase3: string,
    passphrase4: string,
    passphrase1: string,
    keyThree: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _successList1(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    _successList2(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    _successList3(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    _successList4(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    _successList5(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    _successList6(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    _successList7(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    solverIsL33t(overrides?: CallOverrides): Promise<boolean>;

    unSheerLock1(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unSheerLock2(
      passphrase4: string,
      passphrase2: string,
      passphrase3: string,
      passphrase1: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unSheerLock3(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unSheerLock4(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unSheerLock5(
      passphrase3: string,
      passphrase2: string,
      passphrase1: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unSheerLock6(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unSheerLock7(
      passphrase5: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase1: string,
      keyThree: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _successList1(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _successList2(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _successList3(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _successList4(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _successList5(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _successList6(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _successList7(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    solverIsL33t(overrides?: CallOverrides): Promise<BigNumber>;

    unSheerLock1(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unSheerLock2(
      passphrase4: string,
      passphrase2: string,
      passphrase3: string,
      passphrase1: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unSheerLock3(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unSheerLock4(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unSheerLock5(
      passphrase3: string,
      passphrase2: string,
      passphrase1: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unSheerLock6(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unSheerLock7(
      passphrase5: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase1: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _successList1(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _successList2(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _successList3(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _successList4(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _successList5(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _successList6(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _successList7(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    solverIsL33t(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unSheerLock1(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unSheerLock2(
      passphrase4: string,
      passphrase2: string,
      passphrase3: string,
      passphrase1: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unSheerLock3(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unSheerLock4(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unSheerLock5(
      passphrase3: string,
      passphrase2: string,
      passphrase1: string,
      passphrase4: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unSheerLock6(
      passphrase1: string,
      passphrase2: string,
      passphrase3: string,
      passphrase5: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unSheerLock7(
      passphrase5: string,
      passphrase2: string,
      passphrase3: string,
      passphrase4: string,
      passphrase1: string,
      keyThree: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
