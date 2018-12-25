/**
 * 座席予約承認アクションファクトリー
 */
import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import PriceCurrency from '../../../priceCurrency';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

import * as chevre from '../../../../chevre';
import * as COA from '../../../../coa';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

export enum WebAPIIdentifier {
    COA = 'COA',
    Chevre = 'Chevre'
}

export interface IInstrument<T extends WebAPIIdentifier> {
    typeOf: 'WebAPI';
    identifier: T;
}

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

/**
 * 認可アクション対象
 */
export type IObject = chevre.transaction.reserve.IObjectWithoutDetail & {
    typeOf: ObjectType;
    event?: chevre.event.screeningEvent.IEvent;
    acceptedOffer: chevre.event.screeningEvent.IAcceptedTicketOffer[];
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
