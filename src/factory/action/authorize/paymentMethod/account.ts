import * as pecorino from '@pecorino/factory';

import * as ActionFactory from '../../../action';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeAnyPaymentFactory from './any';

export type AccountType = string;

/**
 * 進行中取引インターフェース
 */
export type IPendingTransaction<T extends AccountType> =
    pecorino.transaction.deposit.ITransaction<T>
    | pecorino.transaction.transfer.ITransaction<T>
    | pecorino.transaction.withdraw.ITransaction<T>;

export interface IAccount<T extends AccountType> {
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
export type IFromAccount<T extends AccountType> = IAccount<T> | ITokenizedAccount;

/**
 * 転送先口座
 */
export type IToAccount<T extends AccountType> = IAccount<T>;

/**
 * オーソリ対象インターフェース
 */
export interface IObject<T extends AccountType> extends AuthorizeAnyPaymentFactory.IObject<PaymentMethodType.Account> {
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

export interface IResult<T extends AccountType> extends AuthorizeAnyPaymentFactory.IResult<PaymentMethodType.Account> {
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
    pendingTransaction: IPendingTransaction<T>;
}

export type IError = any;

/**
 * 口座決済承認アクション属性インターフェース
 */
export interface IAttributes<T extends AccountType> extends AuthorizeAnyPaymentFactory.IAttributes<PaymentMethodType.Account> {
    object: IObject<T>;
    result?: IResult<T>;
    error?: IError;
}

/**
 * 口座決済承認アクションインターフェース
 */
export type IAction<T extends AccountType> = ActionFactory.IAction<IAttributes<T>>;
