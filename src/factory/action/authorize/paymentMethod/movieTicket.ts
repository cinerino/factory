import * as chevre from '@chevre/factory';
import * as mvtkapi from '@movieticket/reserve-api-nodejs-client';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IKnyknrNoInfo = mvtkapi.mvtk.services.seat.seatInfoSync.IKnyknrNoInfo;
export type IPurchaseNumberAuthIn = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export enum ObjectType {
    MovieTicket = 'MovieTicket'
}
/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    /**
     * 座席予約対象イベント
     */
    event: { typeOf: chevre.eventType; id: string };
    /**
     * 購入管理番号情報
     */
    knyknrNoInfo: IKnyknrNoInfo[];
}
export interface IResult {
    price: number;
    purchaseNumberAuthIn: IPurchaseNumberAuthIn;
    purchaseNumberAuthResult: IPurchaseNumberAuthResult;
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
/**
 * ムビチケ承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
/**
 * ムビチケ承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
