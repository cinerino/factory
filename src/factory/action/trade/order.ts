import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IAcceptedOffer, IOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import TransactionType from '../../transactionType';
import { IAttributes as IInformActionAttributes } from '../interact/inform';
import { IAttributes as IGivePointAwardActionAttributes } from '../transfer/give/pointAward';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';
import { IAttributes as IPayActionAttributes } from './pay';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export interface IObject extends IOrder {
    acceptedOffers: IAcceptedOffer<any>[];
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
    pay?: IPayActionAttributes<PaymentMethodType | string>[];
    /**
     * 口座決済実行アクションリスト
     */
    payAccount?: IPayActionAttributes<PaymentMethodType.Account>[];
    /**
     * クレジットカード決済アクション
     */
    payCreditCard?: IPayActionAttributes<PaymentMethodType.CreditCard>[];
    /**
     * ムビチケ決済アクション
     */
    payMovieTicket?: IPayActionAttributes<PaymentMethodType.MGTicket | PaymentMethodType.MovieTicket>[];
    /**
     * ペイメントカード決済アクション
     */
    payPaymentCard?: IPayActionAttributes<string>[];
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
