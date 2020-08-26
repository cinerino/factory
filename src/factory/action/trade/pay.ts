import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { AvailablePaymentMethodType, IPaymentMethod, ISimpleOrder } from '../../order';
import { IPendingTransaction } from '../authorize/paymentMethod/account';

import * as chevre from '../../../chevre';

export import IMovieTicket = chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket;

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPurpose = ISimpleOrder;

export enum ObjectType {
    PaymentMethod = 'PaymentMethod'
}

export interface IPaymentService {
    typeOf: ObjectType;
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod<AvailablePaymentMethodType>;
    entryTranArgs?: GMO.services.credit.IEntryTranArgs;
    execTranArgs?: GMO.services.credit.IExecTranArgs;
    pendingTransaction?: IPendingTransaction;
    /**
     * ムビチケリスト
     */
    movieTickets?: IMovieTicket[];
}

export type IObject = IPaymentService[];

/**
 * クレジットカード決済の場合の結果インターフェース
 */
export interface IResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: GMO.services.credit.IAlterTranResult[];
    seatInfoSyncIn?: any;
    seatInfoSyncResult?: any;
}

export interface IAttributes extends ActionFactory.IAttributes<ActionType.PayAction, IObject, IResult> {
    purpose: IPurpose;
}

/**
 * 決済アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
