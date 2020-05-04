import * as ActionFactory from '../../../action';
import { ISimpleOrder } from '../../../order';
import PaymentMethodType from '../../../paymentMethodType';
import { IAttributes as IInformActionAttributes } from '../../interact/inform';
import { IAttributes as ICancelActionAttributes } from '../../organize/cancel';
import { IAttributes as IRefundActionAttributes } from '../../trade/refund';
import * as ReturnActionFactory from '../return';
import { IAttributes as ISendEmailMessageActionAttributes } from '../send/message/email';
import * as ReturnPointAwardActionFactory from './pointAward';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は注文
 */
export type IObject = ISimpleOrder;

export type IResult = any;

export interface IPotentialActions {
    /**
     * 予約取消アクション
     */
    cancelReservation?: ICancelActionAttributes<any, any>[];
    /**
     * 注文通知アクション
     */
    informOrder?: IInformActionAttributes<any, any>[];
    /**
     * クレジットカード返金アクション
     */
    refundCreditCard: IRefundActionAttributes<PaymentMethodType.CreditCard>[];
    /**
     * 口座返金アクション
     */
    refundAccount: IRefundActionAttributes<PaymentMethodType.Account>[];
    /**
     * MGチケット着券取消アクション
     */
    refundMGTicket: IRefundActionAttributes<PaymentMethodType.MGTicket>[];
    /**
     * ムビチケ着券取消アクション
     */
    refundMovieTicket: IRefundActionAttributes<PaymentMethodType.MovieTicket>[];
    /**
     * ポイントインセンティブ返却アクション
     */
    returnPointAward: ReturnPointAwardActionFactory.IAttributes[];
    /**
     * Eメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes[];
}

export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}

/**
 * 注文返品アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
