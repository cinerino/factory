import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IPaymentMethod, ISimpleOrder } from '../../order';
import { IMGTicket } from '../../paymentMethod/paymentCard/mgTicket';
import { IMovieTicket } from '../../paymentMethod/paymentCard/movieTicket';
import PaymentMethodType from '../../paymentMethodType';
import PriceCurrency from '../../priceCurrency';
import { IPendingTransaction } from '../authorize/paymentMethod/account';
import { IPendingTransaction as IPrepaidCardPendingTransaction } from '../authorize/paymentMethod/prepaidCard';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPurpose = ISimpleOrder;

export type TypeOfObject = 'PaymentMethod';

export type AccountType = string;

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
 * プリペイドカード決済の場合のオブジェクトインターフェース
 */
export interface IPrepaidCardPaymentMethod extends ICommonPaymentMethod<PaymentMethodType.PrepaidCard> {
    pendingTransaction: IPrepaidCardPendingTransaction;
}

/**
 * 決済対象の決済方法インターフェース
 */
export type IPaymentMethodObject<T> =
    T extends PaymentMethodType.Account ? IAccountPaymentMethod<AccountType> :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentMethod :
    T extends PaymentMethodType.MGTicket ? IMGTicketPaymentMethod :
    T extends PaymentMethodType.MovieTicket ? IMovieTicketPaymentMethod :
    T extends PaymentMethodType.PrepaidCard ? IPrepaidCardPaymentMethod :
    never;

export type IObject<T extends PaymentMethodType> = IPaymentMethodObject<T>[];

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
    T extends PaymentMethodType.PrepaidCard ? any :
    never;

export interface IAttributes<T extends PaymentMethodType> extends ActionFactory.IAttributes<ActionType.PayAction, IObject<T>, IResult<T>> {
    purpose: IPurpose;
}

/**
 * 決済アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
