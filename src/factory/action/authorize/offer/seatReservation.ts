import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import * as SeatReservationOfferFactory from '../../../offer/seatReservation';
import { IMovieTicket } from '../../../paymentMethod/paymentCard/movieTicket';
import PriceCurrency from '../../../priceCurrency';
import { IPropertyValue } from '../../../propertyValue';
import { Identifier as WebAPIIdentifier, IService as IWebAPI } from '../../../service/webAPI';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

import * as chevre from '../../../../chevre';
import * as COA from '../../../../coa';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

export type IInstrument<T extends WebAPIIdentifier> = IWebAPI<T>;

export type IRequestBody<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? COA.services.reserve.IUpdTmpReserveSeatArgs :
    // T extends WebAPIIdentifier.Chevre ? chevre.transaction.reserve.ITransaction :
    any;
export type IResponseBody<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? COA.services.reserve.IUpdTmpReserveSeatResult :
    T extends WebAPIIdentifier.Chevre ? chevre.transaction.reserve.ITransaction :
    chevre.transaction.reserve.ITransaction;

/**
 * 仮予約インターフェース(ttts専用)
 */
export interface ITmpReservation {
    id: string;
    reservedTicket: chevre.reservation.ITicket<chevre.reservationType.EventReservation>;
    additionalTicketText: string;
    reservationNumber: string;
    additionalProperty?: IPropertyValue<string>[];
}

/**
 * 承認アクション結果
 */
export interface IResult<T extends WebAPIIdentifier> {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: PriceCurrency;
    /**
     * オファーに対して必要な消費ポイント
     */
    point: number;
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
    /**
     * 仮予約リスト(ttts専用)
     */
    tmpReservations?: ITmpReservation[];
}

export type IAcceptedPaymentMethod = IMovieTicket;

export type IAcceptedOffer4chevre = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: IPropertyValue<string>[];
} & chevre.event.screeningEvent.IAcceptedTicketOffer;

export type IAcceptedOfferWithoutDetail4chevre = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: IPropertyValue<string>[];
} & chevre.event.screeningEvent.IAcceptedTicketOfferWithoutDetail;

export type IObjectWithoutDetail4chevre = {
    acceptedOffer: IAcceptedOfferWithoutDetail4chevre[];
} & chevre.transaction.reserve.IObjectWithoutDetail;

export type IAcceptedOffer4COA = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: IPropertyValue<string>[];
} & chevre.event.screeningEvent.IAcceptedTicketOfferWithoutDetail
    & SeatReservationOfferFactory.IOfferWithDetails;

export type IAcceptedOfferWithoutDetail4COA = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: IPropertyValue<string>[];
} & SeatReservationOfferFactory.IOffer;

export interface IObjectWithoutDetail4COA {
    acceptedOffer: IAcceptedOfferWithoutDetail4COA[];
    event: {
        id: string;
    };
}

export type IAcceptedOffer<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? IAcceptedOffer4COA :
    T extends WebAPIIdentifier.Chevre ? IAcceptedOffer4chevre :
    any;

export type IAcceptedOfferWithoutDetail<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? IAcceptedOfferWithoutDetail4COA :
    T extends WebAPIIdentifier.Chevre ? IAcceptedOfferWithoutDetail4chevre :
    any;

export type IObjectWithoutDetail<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? IObjectWithoutDetail4COA :
    T extends WebAPIIdentifier.Chevre ? IObjectWithoutDetail4chevre :
    any;

export type IPendingTransaction = chevre.transaction.ITransaction<chevre.transactionType.Reserve>;

/**
 * 承認アクション対象
 */
export type IObject<T extends WebAPIIdentifier> = {
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
export interface IAttributes<T extends WebAPIIdentifier> extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject<T>;
    purpose: IPurpose;
    instrument?: IInstrument<T>;
}

export type IAction<T extends WebAPIIdentifier> = ActionFactory.IAction<IAttributes<T>>;
