import * as GMO from '@motionpicture/gmo-service';

import AccountType from '../../accountType';
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder, IPaymentMethod } from '../../order';
import { IMovieTicket } from '../../paymentMethod/paymentCard/movieTicket';
import PaymentMethodType from '../../paymentMethodType';
import PriceCurrency from '../../priceCurrency';
import { IPendingTransaction } from '../authorize/paymentMethod/account';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IPurpose = IOrder;
export type TypeOfObject = 'PaymentMethod';
export interface ICommonObject<T extends PaymentMethodType> {
    typeOf: TypeOfObject;
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
    entryTranArgs: GMO.services.credit.IEntryTranArgs;
    execTranArgs: GMO.services.credit.IExecTranArgs;
}
/**
 * 口座決済の場合のオブジェクトインターフェース
 */
export interface IObject4account<T extends AccountType> extends ICommonObject<PaymentMethodType.Account> {
    pendingTransaction: IPendingTransaction<T>;
}
/**
 * ムビチケ決済の場合のオブジェクトインターフェース
 */
export interface IObject4movieTicket extends ICommonObject<PaymentMethodType.MovieTicket> {
    /**
     * ムビチケリスト
     */
    movieTickets: IMovieTicket[];
}
export type IObject<T> =
    T extends PaymentMethodType.Account ? IObject4account<AccountType> :
    T extends PaymentMethodType.CreditCard ? IObject4creditCard :
    T extends PaymentMethodType.MovieTicket ? IObject4movieTicket :
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
    T extends PaymentMethodType.MovieTicket ? any :
    never;
export interface IAttributes<T extends PaymentMethodType> extends ActionFactory.IAttributes<ActionType.PayAction, IObject<T>, IResult<T>> {
    purpose: IPurpose;
}
/**
 * 支払アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
