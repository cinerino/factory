import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { AvailablePaymentMethodType, IPaymentMethod, ISimpleOrder } from '../../order';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import { IAttributes as ISendEmailMessageActionAttributes } from '../transfer/send/message/email';

export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は決済方法
 */
export type IObject = IPaymentMethod<AvailablePaymentMethodType>;

export type IResult = any;

export interface IPotentialActions {
    /**
     * 注文通知アクション
     */
    informOrder?: IInformActionAttributes<any, any>[];
    /**
     * 返金処理完了を通知するEメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes[];
}

export type IPurpose = ISimpleOrder;

export interface IAttributes extends ActionFactory.IAttributes<ActionType.RefundAction, IObject, IResult> {
    recipient: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}

/**
 * 返金アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
