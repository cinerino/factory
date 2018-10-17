import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import PaymentMethodType from '../../../paymentMethodType';
import { IPropertyValue } from '../../../propertyValue';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 承認対象インターフェース
 */
export interface IObject<T extends PaymentMethodType> {
    typeOf: T;
    amount: number;
    additionalProperty: IPropertyValue<any>[];
}
export interface IResult {
    price: number;
    additionalProperty: IPropertyValue<any>[];
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
/**
 * 決済方法承認アクション属性インターフェース
 */
export interface IAttributes<T extends PaymentMethodType> extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject<T>;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
/**
 * 決済方法承認アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
