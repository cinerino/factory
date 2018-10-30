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
export interface IAccountPaymentMethod<T extends AccountType> extends ICommonPaymentMethod<PaymentMethodType.Account> {
    pendingTransaction: IPendingTransaction<T>;
}
/**
 * ムビチケ決済の場合のオブジェクトインターフェース
 */
export interface IMovieTicketPaymentMethod extends ICommonPaymentMethod<PaymentMethodType.MovieTicket> {
    /**
     * ムビチケリスト
     */
    movieTickets: IMovieTicket[];
}
/**
 * 決済対象の決済方法インターフェース
 */
export type IPaymentMethodObject<T> =
    T extends PaymentMethodType.Account ? IAccountPaymentMethod<AccountType> :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentMethod :
    T extends PaymentMethodType.MovieTicket ? IMovieTicketPaymentMethod :
    never;
export type IObject<T extends PaymentMethodType> = IPaymentMethodObject<T>[];
/**
 * クレジットカード決済の場合の結果インターフェース
 */
export interface ICreditCardRsult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: GMO.services.credit.IAlterTranResult[];
}
export type IResult<T> =
    T extends PaymentMethodType.Account ? any :
    T extends PaymentMethodType.CreditCard ? ICreditCardRsult :
    T extends PaymentMethodType.MovieTicket ? any :
    never;
export interface IAttributes<T extends PaymentMethodType> extends ActionFactory.IAttributes<ActionType.PayAction, IObject<T>, IResult<T>> {
    purpose: IPurpose;
}
/**
 * 支払アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
