import * as mvtkapi from '@movieticket/reserve-api-nodejs-client';

import * as ActionFactory from '../../../action';
import { IMovieTicket } from '../../../paymentMethod/paymentCard/movieTicket';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeAnyPaymentFactory from './any';

export type IPurchaseNumberAuthIn = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export type ISeatInfoSyncIn = mvtkapi.mvtk.services.seat.seatInfoSync.ISeatInfoSyncIn;
export type ISeatInfoSyncResult = mvtkapi.mvtk.services.seat.seatInfoSync.ISeatInfoSyncResult;

/**
 * 承認対象インターフェース
 */
export interface IObject extends AuthorizeAnyPaymentFactory.IObject<PaymentMethodType.MovieTicket> {
    typeOf: PaymentMethodType.MovieTicket;
    movieTickets: IMovieTicket[];
}

export interface IResult extends AuthorizeAnyPaymentFactory.IResult<PaymentMethodType.MovieTicket> {
    /**
     * 承認時のムビチケ認証リクエスト
     */
    purchaseNumberAuthIn?: IPurchaseNumberAuthIn;
    /**
     * 承認時のムビチケ認証レスポンス
     */
    purchaseNumberAuthResult?: IPurchaseNumberAuthResult;
    /**
     * 着券済での承認時のムビチケ着券リクエスト
     */
    seatInfoSyncIn?: ISeatInfoSyncIn;
    /**
     * 着券済での承認時のムビチケ着券レスポンス
     */
    seatInfoSyncResult?: ISeatInfoSyncResult;
}

export type IError = any;

/**
 * ムビチケ承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeAnyPaymentFactory.IAttributes<PaymentMethodType.MovieTicket> {
    object: IObject;
    result?: IResult;
    error?: IError;
}

/**
 * ムビチケ承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
