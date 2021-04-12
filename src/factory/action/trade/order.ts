import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import TransactionType from '../../transactionType';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import { IAttributes as IGivePointAwardActionAttributes } from '../transfer/give/pointAward';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';
import { IAttributes as IPayActionAttributes } from './pay';

import * as chevre from '../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export interface IObject extends chevre.order.IOrder {
    acceptedOffers: chevre.order.IAcceptedOffer<any>[];
}

export type IResult = any;

export interface IPotentialActions {
    /**
     * ポイント付与アクション
     * 現時点で複数口座にポイントを付与することはないが、可能性もこめてリストで持っておく
     */
    givePointAward?: IGivePointAwardActionAttributes[];
    /**
     * 注文通知アクション
     */
    informOrder?: IInformActionAttributes<any, any>[];
    /**
     * 決済アクションリスト
     */
    pay?: IPayActionAttributes[];
    /**
     * 注文配送アクション
     */
    sendOrder?: ISendOrderActionAttributes;
}

export interface IPurpose {
    typeOf: TransactionType;
    id: string;
}

export interface IAttributes extends ActionFactory.IAttributes<ActionType.OrderAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
    purpose?: IPurpose;
}

/**
 * 注文アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
