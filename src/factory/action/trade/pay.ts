import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IPaymentMethod, ISimpleOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import { IPendingTransaction } from '../authorize/paymentMethod/account';

import * as chevre from '../../../chevre';

export import IMovieTicket = chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket;

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPurpose = ISimpleOrder;

export enum ObjectType {
    PaymentMethod = 'PaymentMethod'
}

export interface ICommonPaymentMethod<T extends PaymentMethodType | string> {
    typeOf: ObjectType;
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod<T>;
}

/**
 * クレジットカード決済の場合のオブジェクトインターフェース
 */
export interface ICreditCardPaymentMethod extends ICommonPaymentMethod<PaymentMethodType.CreditCard> {
    entryTranArgs: GMO.services.credit.IEntryTranArgs;
    execTranArgs: GMO.services.credit.IExecTranArgs;
}

/**
 * 口座決済の場合のオブジェクトインターフェース
 */
export interface IAccountPaymentMethod extends ICommonPaymentMethod<PaymentMethodType.Account> {
    pendingTransaction: IPendingTransaction;
}

/**
 * ムビチケ決済の場合のオブジェクトインターフェース
 */
export interface IMovieTicketPaymentMethod
    extends ICommonPaymentMethod<PaymentMethodType.MGTicket | PaymentMethodType.MovieTicket> {
    /**
     * ムビチケリスト
     */
    movieTickets: IMovieTicket[];
}

/**
 * 決済対象の決済方法インターフェース
 */
export type IPaymentMethodObject<T> =
    T extends PaymentMethodType.Account ? IAccountPaymentMethod :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentMethod :
    T extends PaymentMethodType.MGTicket ? IMovieTicketPaymentMethod :
    T extends PaymentMethodType.MovieTicket ? IMovieTicketPaymentMethod :
    ICommonPaymentMethod<string>;

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
