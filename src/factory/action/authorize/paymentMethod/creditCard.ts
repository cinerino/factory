import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { IUnauthorizedCardOfMember, IUncheckedCardRaw, IUncheckedCardTokenized } from '../../../paymentMethod/paymentCard/creditCard';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * クレジットカード承認アクションに必要なクレジットカード情報インターフェース
 */
export type ICreditCard = IUncheckedCardRaw | IUncheckedCardTokenized | IUnauthorizedCardOfMember;
export enum ObjectType {
    CreditCard = 'CreditCard'
}
/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    /**
     * オーダーID
     */
    orderId: string;
    /**
     * 金額
     */
    amount: number;
    /**
     * 支払い方法
     */
    method: GMO.utils.util.Method;
    payType: GMO.utils.util.PayType;
    /**
     * クレジットカード情報
     */
    creditCard: ICreditCard;
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
 * クレジットカード承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
/**
 * クレジットカード承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
