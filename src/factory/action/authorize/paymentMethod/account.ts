import * as ActionFactory from '../../../action';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeAnyPaymentFactory from './any';

import * as chevre from '../../../../chevre';

/**
 * 進行中取引インターフェース
 */
export type IPendingTransaction = chevre.transaction.moneyTransfer.ITransaction;

export interface IAccount<T extends string> {
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber: string;
}

/**
 * トークン化された口座インターフェース
 */
export type ITokenizedAccount = string;

/**
 * 転送元口座
 */
export type IFromAccount<T extends string> = IAccount<T> | ITokenizedAccount;

/**
 * 転送先口座
 */
export type IToAccount<T extends string> = IAccount<T>;

/**
 * オーソリ対象インターフェース
 */
export interface IObject<T extends string> extends AuthorizeAnyPaymentFactory.IObject<PaymentMethodType.Account> {
    typeOf: PaymentMethodType.Account;
    /**
     * 転送元口座
     * 出金取引、転送取引の場合指定
     */
    fromAccount?: IFromAccount<T>;
    /**
     * 転送先口座
     * 入金取引、転送取引の場合指定
     */
    toAccount?: IToAccount<T>;
    /**
     * 取引説明
     */
    notes?: string;
}

export interface IResult<T extends string> extends AuthorizeAnyPaymentFactory.IResult<PaymentMethodType.Account> {
    /**
     * 転送元口座
     */
    fromAccount?: IAccount<T>;
    /**
     * 転送先口座
     */
    toAccount?: IToAccount<T>;
    /**
     * 進行中取引
     */
    pendingTransaction: IPendingTransaction;
}

export type IError = any;

/**
 * 口座決済承認アクション属性インターフェース
 */
export interface IAttributes<T extends string> extends AuthorizeAnyPaymentFactory.IAttributes<PaymentMethodType.Account> {
    object: IObject<T>;
    result?: IResult<T>;
    error?: IError;
}

/**
 * 口座決済承認アクションインターフェース
 */
export type IAction<T extends string> = ActionFactory.IAction<IAttributes<T>>;
