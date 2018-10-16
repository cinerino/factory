import * as chevre from '@chevre/factory';
import * as mvtkapi from '@movieticket/reserve-api-nodejs-client';

import * as ActionFactory from '../../../action';
import OrganizationType from '../../../organizationType';
import PaymentMethodType from '../../../paymentMethodType';
import * as CheckActionFactory from '../../check';

export type IAgent = ActionFactory.IParticipant;
export type IKnyknrNoInfoIn = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IKnyknrNoInfoIn;
export type IPurchaseNumberAuthIn = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export type ObjectType = PaymentMethodType.MovieTicket;
export interface IObject {
    typeOf: ObjectType;
    /**
     * 座席予約対象イベント
     */
    event: { typeOf: chevre.eventType; id: string };
    /**
     * 販売者
     */
    seller: { typeOf: OrganizationType; id: string };
    /**
     * 購入管理番号情報
     */
    knyknrNoInfo: IKnyknrNoInfoIn[];
}
export interface IResult {
    purchaseNumberAuthIn: IPurchaseNumberAuthIn;
    purchaseNumberAuthResult: IPurchaseNumberAuthResult;
}
export type IError = any;
/**
 * ムビチケ確認アクション属性インターフェース
 */
export interface IAttributes extends CheckActionFactory.IAttributes<IObject, IResult> {
    object: IObject;
    agent: IAgent;
}
/**
 * ムビチケ確認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
