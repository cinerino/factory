import * as ActionFactory from '../../../action';
import { ISimpleOrder } from '../../../order';
import PaymentMethodType from '../../../paymentMethodType';
import { IAttributes as IInformActionAttributes } from '../../interact/inform';
import { IAttributes as IRefundActionAttributes } from '../../trade/refund';
import * as ReturnActionFactory from '../return';
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
     * クレジットカード返金アクション
     */
    refundCreditCard: IRefundActionAttributes<PaymentMethodType.CreditCard>[];
    /**
     * 口座返金アクション
     */
    refundAccount: IRefundActionAttributes<PaymentMethodType.Account>[];
    /**
     * ムビチケ着券取消アクション
     */
    refundMovieTicket: IRefundActionAttributes<PaymentMethodType.MovieTicket>[];
    /**
     * ポイントインセンティブ返却アクション
     */
    returnPointAward: ReturnPointAwardActionFactory.IAttributes[];
    /**
     * 注文通知アクション
     */
    informOrder?: IInformActionAttributes<any, any>[];
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * 注文返品アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
