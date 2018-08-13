/**
 * 決済方法としてのポイント口座承認アクションファクトリー
 */
import * as pecorino from '@pecorino/factory';

import AccountType from '../../../accountType';
import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    PointPayment = 'PointPayment'
}
/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    amount: number;
}
export type IPointTransaction = pecorino.transaction.withdraw.ITransaction<AccountType.Point>
    | pecorino.transaction.transfer.ITransaction<AccountType.Point>;
export interface IResult {
    price: number;
    amount: number;
    pointTransaction: IPointTransaction;
    pointAPIEndpoint: string;
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export type IError = any;
/**
 * ポイント承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
export type IAction = ActionFactory.IAction<IAttributes>;
