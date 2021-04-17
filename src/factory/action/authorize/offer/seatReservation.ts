import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

import * as chevre from '../../../../chevre';
import * as COA from '../../../../coa';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export import IMovieTicket = chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket;

export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

export type IInstrument<T extends chevre.service.webAPI.Identifier> = chevre.service.webAPI.IService<T>;

export type IRequestBody<T extends chevre.service.webAPI.Identifier> =
    T extends chevre.service.webAPI.Identifier.COA ? COA.factory.reserve.IUpdTmpReserveSeatArgs :
    // T extends WebAPIIdentifier.Chevre ? chevre.transaction.reserve.ITransaction :
    any;
export type IResponseBody<T extends chevre.service.webAPI.Identifier> =
    T extends chevre.service.webAPI.Identifier.COA ? COA.factory.reserve.IUpdTmpReserveSeatResult :
    T extends chevre.service.webAPI.Identifier.Chevre ? chevre.transaction.reserve.ITransaction :
    chevre.transaction.reserve.ITransaction;

export type IResultAcceptedOffer = chevre.order.IAcceptedOffer<chevre.order.IReservation>;

/**
 * 承認アクション結果
 */
export interface IResult<T extends chevre.service.webAPI.Identifier> {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: chevre.priceCurrency;
    /**
     * オファーに対して必要な金額
     * currencyを口座タイプとして扱う
     */
    amount: chevre.monetaryAmount.IMonetaryAmount[];
    /**
     * 外部リクエストエンドポイント
     */
    requestEndpoint?: string;
    /**
     * 外部サービスへのリクエスト
     */
    requestBody?: IRequestBody<T>;
    /**
     * 外部サービスからのレスポンス
     */
    responseBody: IResponseBody<T>;
    acceptedOffers?: IResultAcceptedOffer[];
}

export type IAcceptedPaymentMethod = IMovieTicket;

export type IAcceptedOffer4chevre = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: chevre.propertyValue.IPropertyValue<string>[];
} & chevre.event.screeningEvent.IAcceptedTicketOffer;

export type IAcceptedOfferWithoutDetail4chevre = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: chevre.propertyValue.IPropertyValue<string>[];
} & chevre.event.screeningEvent.IAcceptedTicketOfferWithoutDetail;

export type IObjectWithoutDetail4chevre = {
    acceptedOffer: IAcceptedOfferWithoutDetail4chevre[];
} & chevre.transaction.reserve.IObjectWithoutDetail;

export type IAcceptedOffer4COA = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: chevre.propertyValue.IPropertyValue<string>[];
} & chevre.event.screeningEvent.IAcceptedTicketOfferWithoutDetail
    & chevre.offer.seatReservation.IOfferWithDetails;

export type IAcceptedOfferWithoutDetail4COA = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: chevre.propertyValue.IPropertyValue<string>[];
} & chevre.offer.seatReservation.IOffer;

export interface IObjectWithoutDetail4COA {
    acceptedOffer: IAcceptedOfferWithoutDetail4COA[];
    event: {
        id: string;
    };
}

export type IAcceptedOffer<T extends chevre.service.webAPI.Identifier> =
    T extends chevre.service.webAPI.Identifier.COA ? IAcceptedOffer4COA :
    T extends chevre.service.webAPI.Identifier.Chevre ? IAcceptedOffer4chevre :
    any;

export type IAcceptedOfferWithoutDetail<T extends chevre.service.webAPI.Identifier> =
    T extends chevre.service.webAPI.Identifier.COA ? IAcceptedOfferWithoutDetail4COA :
    T extends chevre.service.webAPI.Identifier.Chevre ? IAcceptedOfferWithoutDetail4chevre :
    any;

export type IObjectWithoutDetail<T extends chevre.service.webAPI.Identifier> =
    T extends chevre.service.webAPI.Identifier.COA ? IObjectWithoutDetail4COA :
    T extends chevre.service.webAPI.Identifier.Chevre ? IObjectWithoutDetail4chevre :
    any;

export type IPendingTransaction = chevre.transaction.ITransaction<chevre.transactionType.Reserve>;

/**
 * 承認アクション対象
 */
export type IObject<T extends chevre.service.webAPI.Identifier> = {
    typeOf: ObjectType;
    event?: chevre.event.screeningEvent.IEvent;
    acceptedOffer: IAcceptedOffer<T>[];
    /**
     * Chevre進行中取引
     */
    pendingTransaction?: IPendingTransaction;
} & IObjectWithoutDetail<T>;

export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}

/**
 * authorize action error interface
 */
export type IError = any;

/**
 * 座席予約承認アクションインターフェース
 */
export interface IAttributes<T extends chevre.service.webAPI.Identifier>
    extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject<T>;
    purpose: IPurpose;
    instrument?: IInstrument<T>;
}

export type IAction<T extends chevre.service.webAPI.Identifier> = ActionFactory.IAction<IAttributes<T>>;
