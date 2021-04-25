import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IInstrument, IPendingTransaction } from '../authorize/paymentMethod/any';

import * as chevre from '../../../chevre';

export import IMovieTicket = chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket;

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPurpose = chevre.order.ISimpleOrder;

export enum ObjectType {
    PaymentMethod = 'PaymentMethod'
}

export interface IPaymentService {
    typeOf: ObjectType;
    /**
     * 決済方法
     */
    paymentMethod: chevre.order.IPaymentMethod;
    pendingTransaction?: IPendingTransaction;
    /**
     * ムビチケリスト
     */
    movieTickets?: IMovieTicket[];
}

export type IObject = IPaymentService[];

/**
 * 決済結果
 */
export interface IResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: chevre.action.trade.pay.ICreditCardSales[];
    seatInfoSyncIn?: any;
    seatInfoSyncResult?: any;
}

export interface IAttributes extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    instrument?: IInstrument;
    purpose: IPurpose;
}

/**
 * 決済アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
