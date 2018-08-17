/**
 * 決済方法としての口座承認アクションファクトリー
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
    AccountPayment = 'AccountPayment'
}
/**
 * オーソリ対象インターフェース
 */
export interface IObject<T extends AccountType> {
    typeOf: ObjectType;
    amount: number;
    accountType: T;
    fromAccountNumber: string;
}
/**
 * 進行中取引インターフェース
 */
export type IPendingTransaction<T extends AccountType> =
    pecorino.transaction.withdraw.ITransaction<T> | pecorino.transaction.transfer.ITransaction<T>;
export interface IResult<T extends AccountType> {
    amount: number;
    /**
     * 進行中取引
     */
    pendingTransaction: IPendingTransaction<T>;
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export type IError = any;
/**
 * 口座承認アクション属性インターフェース
 */
export interface IAttributes<T extends AccountType> extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject<T>;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
/**
 * 口座承認アクションインターフェース
 */
export type IAction<T extends AccountType> = ActionFactory.IAction<IAttributes<T>>;
