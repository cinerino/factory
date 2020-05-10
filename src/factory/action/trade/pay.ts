import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IPaymentMethod, ISimpleOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import PriceCurrency from '../../priceCurrency';
import { IPendingTransaction } from '../authorize/paymentMethod/account';

import * as chevre from '../../../chevre';

export import IMGTicket = chevre.paymentMethod.paymentCard.mgTicket.IMGTicket;
export import IMovieTicket = chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket;

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPurpose = ISimpleOrder;

export type TypeOfObject = 'PaymentMethod';

export interface ICommonPaymentMethod<T extends PaymentMethodType> {
    typeOf: TypeOfObject;
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod<T>;
}
/**
 * クレジットカード決済の場合のオブジェクトインターフェース
 */
export interface ICreditCardPaymentMethod extends ICommonPaymentMethod<PaymentMethodType.CreditCard> {
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
export interface IAccountPaymentMethod<T extends string> extends ICommonPaymentMethod<PaymentMethodType.Account> {
    pendingTransaction: IPendingTransaction<T>;
}
/**
 * ムビチケ決済の場合のオブジェクトインターフェース
 */
export interface IMGTicketPaymentMethod
    extends ICommonPaymentMethod<PaymentMethodType.MGTicket> {
    /**
     * MGチケットリスト
     */
    mgTickets: IMGTicket[];
}
/**
 * ムビチケ決済の場合のオブジェクトインターフェース
 */
export interface IMovieTicketPaymentMethod
    extends ICommonPaymentMethod<PaymentMethodType.MovieTicket> {
    /**
     * ムビチケリスト
     */
    movieTickets: IMovieTicket[];
}

/**
 * 決済対象の決済方法インターフェース
 */
export type IPaymentMethodObject<T> =
    T extends PaymentMethodType.Account ? IAccountPaymentMethod<string> :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentMethod :
    T extends PaymentMethodType.MGTicket ? IMGTicketPaymentMethod :
    T extends PaymentMethodType.MovieTicket ? IMovieTicketPaymentMethod :
    any;

export type IObject<T extends PaymentMethodType | string> = IPaymentMethodObject<T>[];

/**
 * クレジットカード決済の場合の結果インターフェース
 */
export interface ICreditCardResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: GMO.services.credit.IAlterTranResult[];
}

export type IResult<T> =
    T extends PaymentMethodType.Account ? any :
    T extends PaymentMethodType.CreditCard ? ICreditCardResult :
    T extends PaymentMethodType.MGTicket ? any :
    T extends PaymentMethodType.MovieTicket ? any :
    any;

export interface IAttributes<T extends PaymentMethodType | string>
    extends ActionFactory.IAttributes<ActionType.PayAction, IObject<T>, IResult<T>> {
    purpose: IPurpose;
}

/**
 * 決済アクションインターフェース
 */
export type IAction<T extends PaymentMethodType | string> = ActionFactory.IAction<IAttributes<T>>;
