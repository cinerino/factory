import * as pecorino from '@pecorino/factory';

import * as ActionFactory from '../../../action';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeAnyPaymentFactory from './any';

/**
 * 進行中取引インターフェース
 */
export type IPendingTransaction =
    pecorino.transaction.deposit.ITransaction<string>
    | pecorino.transaction.transfer.ITransaction<string>
    | pecorino.transaction.withdraw.ITransaction<string>;

export interface IAccount {
    /**
     * 口座タイプ
     */
    accountType: PaymentMethodType.PrepaidCard;
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
export type IFromLocation = IAccount | ITokenizedAccount;

/**
 * 転送先口座
 */
export type IToLocation = IAccount;

/**
 * オーソリ対象インターフェース
 */
export interface IObject extends AuthorizeAnyPaymentFactory.IObject<PaymentMethodType.PrepaidCard> {
    typeOf: PaymentMethodType.PrepaidCard;
    /**
     * 転送元口座
     * 出金取引、転送取引の場合指定
     */
    fromLocation?: IFromLocation;
    /**
     * 転送先口座
     * 入金取引、転送取引の場合指定
     */
    toLocation?: IToLocation;
}

export interface IResult extends AuthorizeAnyPaymentFactory.IResult<PaymentMethodType.PrepaidCard> {
    /**
     * 転送元口座
     */
    fromLocation?: IFromLocation;
    /**
     * 転送先口座
     */
    toLocation?: IToLocation;
    /**
     * 進行中取引
     */
    pendingTransaction: IPendingTransaction;
}

export type IError = any;

/**
 * プリペイドカード決済承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeAnyPaymentFactory.IAttributes<PaymentMethodType.PrepaidCard> {
    object: IObject;
    result?: IResult;
    error?: IError;
}

/**
 * プリペイドカード決済承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
