import * as GMO from '@motionpicture/gmo-service';

import AccountType from '../../accountType';
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder, IPaymentMethod } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import PriceCurrency from '../../priceCurrency';
import { IPendingTransaction } from '../authorize/paymentMethod/account';
import { IMocoinTransaction } from '../authorize/paymentMethod/mocoin';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IPurpose = IOrder;
export interface ICommonObject<T extends PaymentMethodType> {
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod<T>;
}
/**
 * クレジットカード決済の場合のオブジェクトインターフェース
 */
export interface IObject4creditCard extends ICommonObject<PaymentMethodType.CreditCard> {
    /**
     * 金額
     */
    price: number;
    /**
     * 通貨
     */
    priceCurrency: PriceCurrency;
}
/**
 * 口座決済の場合のオブジェクトインターフェース
 */
export interface IObject4account<T extends AccountType> extends ICommonObject<PaymentMethodType.Account> {
    pendingTransaction: IPendingTransaction<T>;
}
export interface IObject4mocoin extends ICommonObject<PaymentMethodType.Mocoin> {
    mocoinTransaction: IMocoinTransaction;
    mocoinEndpoint: string;
}
export type IObject<T> =
    T extends PaymentMethodType.Account ? IObject4account<AccountType> :
    T extends PaymentMethodType.CreditCard ? IObject4creditCard :
    T extends PaymentMethodType.Mocoin ? IObject4mocoin :
    never;
/**
 * クレジットカード決済の場合の結果インターフェース
 */
export interface IResult4creditCard {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: GMO.services.credit.IAlterTranResult;
}
export type IResult<T> =
    T extends PaymentMethodType.Account ? any :
    T extends PaymentMethodType.CreditCard ? IResult4creditCard :
    T extends PaymentMethodType.Mocoin ? any :
    never;
export interface IAttributes<T extends PaymentMethodType> extends ActionFactory.IAttributes<ActionType.PayAction, IObject<T>, IResult<T>> {
    purpose: IPurpose;
}
/**
 * 支払アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
