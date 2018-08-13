/**
 * 決済方法としてのクレジットカードオーソリファクトリー
 */
import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    CreditCard = 'CreditCard'
}
/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    orderId: string;
    amount: number;
    method: GMO.utils.util.Method;
    payType: GMO.utils.util.PayType;
}
export interface IResult {
    price: number;
    entryTranArgs: GMO.services.credit.IEntryTranArgs;
    execTranArgs: GMO.services.credit.IExecTranArgs;
    execTranResult: GMO.services.credit.IExecTranResult;
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
/**
 * GMOオーソリインターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
export type IAction = ActionFactory.IAction<IAttributes>;
