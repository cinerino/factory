import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IPaymentMethod, ISimpleOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import { IAttributes as ISendEmailMessageActionAttributes } from '../transfer/send/message/email';

export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は決済方法
 */
export type IObject<T extends PaymentMethodType | string> = IPaymentMethod<T>;

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

export interface IAttributes<T extends PaymentMethodType | string>
    extends ActionFactory.IAttributes<ActionType.RefundAction, IObject<T>, IResult> {
    recipient: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}

/**
 * 返金アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
