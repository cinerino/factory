import * as mocoin from '@mocoin/factory';
import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export enum ObjectType {
    MocoinPayment = 'MocoinPayment'
}
/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    transactionId: string;
    amount: number;
}
export type IMocoinTransaction = mocoin.transaction.ITokenizedTransaction;
/**
 * 承認結果はMocoin転送取引
 */
export interface IResult {
    price: number;
    amount: number;
    mocoinTransaction: IMocoinTransaction;
    mocoinEndpoint: string;
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export type IError = any;
/**
 * Mocoin承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
export type IAction = ActionFactory.IAction<IAttributes>;
