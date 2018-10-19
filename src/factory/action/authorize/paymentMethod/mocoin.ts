import * as mocoin from '@mocoin/factory';
import * as ActionFactory from '../../../action';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeAnyPaymentFactory from './any';

export type IMocoinTransaction = mocoin.transaction.ITokenizedTransaction;
/**
 * オーソリ対象インターフェース
 */
export interface IObject extends AuthorizeAnyPaymentFactory.IObject<PaymentMethodType.Mocoin> {
    typeOf: PaymentMethodType.Mocoin;
    transactionId: string;
    /**
     * 決済トークン
     */
    token: string;
    /**
     * 口座番号
     */
    fromAccountNumber: string;
    /**
     * 出金取引メモ
     */
    notes?: string;
}
/**
 * 承認結果はMocoin転送取引
 */
export interface IResult extends AuthorizeAnyPaymentFactory.IResult {
    mocoinTransaction: IMocoinTransaction;
    mocoinEndpoint: string;
}
export type IError = any;
/**
 * Mocoin承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeAnyPaymentFactory.IAttributes<PaymentMethodType.Mocoin> {
    object: IObject;
    result?: IResult;
    error?: IError;
}
export type IAction = ActionFactory.IAction<IAttributes>;
