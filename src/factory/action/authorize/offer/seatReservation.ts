/**
 * 座席予約承認アクションファクトリー
 */
import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { IEvent as IScreeningEvent } from '../../../event/screeningEvent';
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

export type IRequestBody = any;
export type IResponseBody<T extends WebAPIIdentifier> =
    T extends WebAPIIdentifier.COA ? COA.services.reserve.IUpdTmpReserveSeatResult :
    T extends WebAPIIdentifier.Chevre ? chevre.transaction.reserve.ITransaction :
    chevre.transaction.reserve.ITransaction;

/**
 * 認可アクション結果
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
    requestBody?: IRequestBody;
    /**
     * 外部サービスからのレスポンス
     */
    responseBody: IResponseBody<T>;
}

export type IAcceptedPaymentMethod = IMovieTicket;

export type IAcceptedOffer = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: IPropertyValue<any>[];
} & chevre.event.screeningEvent.IAcceptedTicketOffer;

export type IAcceptedOfferWithoutDetail = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: IPropertyValue<any>[];
} & chevre.event.screeningEvent.IAcceptedTicketOfferWithoutDetail;

export type IObjectWithoutDetail = {
    acceptedOffer: IAcceptedOfferWithoutDetail[];
} & chevre.transaction.reserve.IObjectWithoutDetail;

/**
 * 認可アクション対象
 */
export type IObject = IObjectWithoutDetail & {
    typeOf: ObjectType;
    event?: IScreeningEvent;
    acceptedOffer: IAcceptedOffer[];
};

export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}

/**
 * authorize action error interface
 */
export type IError = any;

/**
 * 座席予約認可アクションインターフェース
 */
export interface IAttributes<T extends WebAPIIdentifier> extends AuthorizeActionFactory.IAttributes<IObject, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
    instrument?: IInstrument<T>;
}

export type IAction<T extends WebAPIIdentifier> = ActionFactory.IAction<IAttributes<T>>;
