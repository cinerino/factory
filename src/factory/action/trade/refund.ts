import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import { IAttributes as ISendEmailMessageActionAttributes } from '../transfer/send/message/email';
import * as PayActionFactory from './pay';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 返却対象は支払アクション
 */
export type IObject<T extends PaymentMethodType> = PayActionFactory.IAction<T>;
export type IResult = any;
export interface IPotentialActions {
    /**
     * 返金処理完了を通知するEメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes;
}
export type IPurpose = IOrder;

export interface IAttributes<T extends PaymentMethodType> extends ActionFactory.IAttributes<ActionType.RefundAction, IObject<T>, IResult> {
    recipient: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}
/**
 * 返金アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
