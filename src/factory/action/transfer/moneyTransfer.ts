import * as pecorino from '@pecorino/factory';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import TransactionType from '../../transactionType';

import * as chevre from '../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPendingTransaction = chevre.transaction.moneyTransfer.ITransaction;

/**
 * 匿名ロケーションインターフェース
 */
export import IAnonymousLocation = pecorino.action.transfer.moneyTransfer.IAnonymousLocation;

export type AvailablePaymentMethodType = string;

/**
 * クレジットカード場所インターフェース
 */
export interface IPaymentMethodLocation {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: AvailablePaymentMethodType;
    /**
     * 決済方法名
     */
    name: string;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: chevre.monetaryAmount.IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty: chevre.propertyValue.IPropertyValue<string>[];
}

/**
 * ペイメントカードインターフェース
 */
export interface IPaymentCard {
    typeOf: string;
    identifier: string;
    accessCode?: string;
}

/**
 * 転送元あるいは転送先の場所インターフェース
 */
export type ILocation = IAnonymousLocation | IPaymentMethodLocation | IPaymentCard;

export interface IObject {
    pendingTransaction: IPendingTransaction;
}

export type IResult = any;

export type IPotentialActions = any;

export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}

export type IPurpose = ITransactionPurpose | chevre.order.ISimpleOrder;

export interface IAttributes
    extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    typeOf: ActionType.ConfirmAction;
    purpose: IPurpose;
    /**
     * 金額
     */
    amount: chevre.monetaryAmount.IMonetaryAmount;
    /**
     * 転送元
     */
    fromLocation: ILocation;
    /**
     * 転送先
     */
    toLocation: ILocation;
}

export type IAction = ActionFactory.IAction<IAttributes>;
