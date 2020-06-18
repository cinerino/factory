/**
 * Chevreペイメントカード決済承認
 */
import * as ActionFactory from '../../../action';
import * as AuthorizeAnyPaymentFactory from './any';

import * as chevre from '../../../../chevre';

/**
 * 進行中取引インターフェース
 */
export type IPendingTransaction = chevre.transaction.moneyTransfer.ITransaction;

export type IPaymentCard = chevre.action.transfer.moneyTransfer.IPaymentCard;

/**
 * 決済トークン
 */
export type ITokenizedPaymentCard = string;

/**
 * 転送元インターフェース
 */
export type IFromLocation = IPaymentCard | ITokenizedPaymentCard;

/**
 * 転送先インターフェース
 */
export type IToLocation = IPaymentCard;

/**
 * オーソリ対象インターフェース
 */
export interface IObject extends AuthorizeAnyPaymentFactory.IObject<any> {
    typeOf: string;
    /**
     * 転送元
     */
    fromLocation?: IFromLocation;
    /**
     * 転送先
     */
    toLocation?: IToLocation;
}

export interface IResult extends AuthorizeAnyPaymentFactory.IResult<any> {
    /**
     * 転送元
     */
    fromLocation?: IFromLocation;
    /**
     * 転送先
     */
    toLocation?: IToLocation;
    /**
     * 進行中取引
     */
    pendingTransaction: IPendingTransaction;
}

export type IError = any;

/**
 * ペイメントカード決済承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeAnyPaymentFactory.IAttributes<any> {
    object: IObject;
    result?: IResult;
    error?: IError;
}

/**
 * ペイメントカード決済承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
