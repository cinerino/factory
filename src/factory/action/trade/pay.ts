import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder, IPaymentMethod } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import PriceCurrency from '../../priceCurrency';
import { IMocoinTransaction } from '../authorize/paymentMethod/mocoin';
import { IPointTransaction } from '../authorize/paymentMethod/point';

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
 * ポイント決済の場合のオブジェクトインターフェース
 */
export interface IObject4point extends ICommonObject<PaymentMethodType.Point> {
    pointTransaction: IPointTransaction;
    pointAPIEndpoint: string;
}
export interface IObject4mocoin extends ICommonObject<PaymentMethodType.Mocoin> {
    mocoinTransaction: IMocoinTransaction;
    mocoinEndpoint: string;
}
export type IObject<T> =
    T extends PaymentMethodType.CreditCard ? IObject4creditCard :
    T extends PaymentMethodType.Mocoin ? IObject4mocoin :
    T extends PaymentMethodType.Point ? IObject4point :
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
    T extends PaymentMethodType.CreditCard ? IResult4creditCard :
    T extends PaymentMethodType.Mocoin ? any :
    T extends PaymentMethodType.Point ? any :
    never;
export interface IAttributes<T extends PaymentMethodType> extends ActionFactory.IAttributes<ActionType.PayAction, IObject<T>, IResult<T>> {
    purpose: IPurpose;
}
/**
 * 支払アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
