import * as ActionFactory from '../../../action';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeAnyPaymentFactory from './any';

import * as chevre from '../../../../chevre';

/**
 * 進行中取引インターフェース
 */
export type IPendingTransaction = chevre.transaction.moneyTransfer.ITransaction;

export interface IAccount {
    /**
     * 口座タイプ
     */
    accountType: string;
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
export type IFromAccount = IAccount | ITokenizedAccount;

/**
 * 転送先口座
 */
export type IToAccount = IAccount;

/**
 * 承認対象インターフェース
 */
export interface IObject extends AuthorizeAnyPaymentFactory.IObject<PaymentMethodType.Account> {
    // typeOf: PaymentMethodType.Account;
    /**
     * 転送元口座
     * 出金取引、転送取引の場合指定
     */
    fromAccount?: IFromAccount;
    /**
     * 転送先口座
     * 入金取引、転送取引の場合指定
     */
    toAccount?: IToAccount;
    /**
     * 取引説明
     */
    notes?: string;
}

export interface IResult extends AuthorizeAnyPaymentFactory.IResult<PaymentMethodType.Account> {
    /**
     * 転送元口座
     */
    fromAccount?: IAccount;
    /**
     * 転送先口座
     */
    toAccount?: IToAccount;
    /**
     * 進行中取引
     */
    pendingTransaction: IPendingTransaction;
}

export type IError = any;

/**
 * 口座決済承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeAnyPaymentFactory.IAttributes<PaymentMethodType.Account> {
    object: IObject;
    result?: IResult;
    error?: IError;
}

/**
 * 口座決済承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
