import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import PaymentMethodType from '../../../paymentMethodType';
import { IAttributes as IRefundActionAttributes } from '../../trade/refund';
import * as ReturnActionFactory from '../return';
import * as ReturnPointAwardActionFactory from './pointAward';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 返却対象は注文
 */
export type IObject = IOrder;
export type IResult = any;
export interface IPotentialActions {
    /**
     * クレジットカード返金アクション
     */
    refundCreditCard?: IRefundActionAttributes<PaymentMethodType.CreditCard>;
    /**
     * ポイント返金アクション
     */
    refundPoint: IRefundActionAttributes<PaymentMethodType.Point>[];
    /**
     * ポイントインセンティブ返却アクション
     */
    returnPointAward: ReturnPointAwardActionFactory.IAttributes[];
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * 注文返品アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
