import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import { IAttributes as IConfirmReservationActionAttributes } from '../interact/confirm/reservation';
import { IAttributes as IGivePointAwardActionAttributes } from '../transfer/give/pointAward';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';
import { IAttributes as IPayActionAttributes } from './pay';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = IOrder;
export type IResult = any;
export interface IPotentialActions {
    /**
     * 注文配送アクション
     */
    sendOrder?: ISendOrderActionAttributes;
    /**
     * 予約確定アクション
     */
    confirmReservation?: IConfirmReservationActionAttributes[];
    /**
     * クレジットカード決済アクション
     */
    payCreditCard?: IPayActionAttributes<PaymentMethodType.CreditCard>[];
    /**
     * 口座決済実行アクションリスト
     */
    payAccount?: IPayActionAttributes<PaymentMethodType.Account>[];
    /**
     * ムビチケ決済アクション
     */
    payMovieTicket?: IPayActionAttributes<PaymentMethodType.MovieTicket>[];
    /**
     * ポイント付与アクション
     * 現時点で複数口座にポイントを付与することはないが、可能性もこめてリストで持っておく
     */
    givePointAward?: IGivePointAwardActionAttributes[];
}
export interface IAttributes extends ActionFactory.IAttributes<ActionType.OrderAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
}
/**
 * 注文アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
