/**
 * 座席予約承認アクションファクトリー
 */
import * as chevre from '@chevre/factory';
import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import PriceCurrency from '../../../priceCurrency';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export enum ObjectType {
    SeatReservation = 'SeatReservation'
}
/**
 * 認可アクション結果
 */
export interface IResult {
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
     * 外部サービスからのレスポンス
     */
    responseBody: chevre.transaction.reserve.ITransaction;
}
/**
 * 認可アクション対象
 */
export type IObject = chevre.transaction.reserve.IObjectWithoutDetail & {
    typeOf: ObjectType;
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
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}
export type IAction = ActionFactory.IAction<IAttributes>;
