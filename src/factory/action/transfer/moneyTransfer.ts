import * as pecorino from '@pecorino/factory';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { ISimpleOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import { IPropertyValue } from '../../propertyValue';
import TransactionType from '../../transactionType';
import { IPendingTransaction as IPaymentCardTransaction } from '../authorize/paymentMethod/any';

import * as chevre from '../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPendingTransaction = IPaymentCardTransaction;

/**
 * 匿名ロケーションインターフェース
 */
export import IAnonymousLocation = pecorino.action.transfer.moneyTransfer.IAnonymousLocation;

export type AvailablePaymentMethodType = PaymentMethodType | string;

/**
 * クレジットカード場所インターフェース
 */
export interface IPaymentMethodLocation<T extends AvailablePaymentMethodType> {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: T;
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
    additionalProperty: IPropertyValue<string>[];
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
export type ILocation = IAnonymousLocation | IPaymentMethodLocation<AvailablePaymentMethodType> | IPaymentCard;

export interface IObject {
    pendingTransaction: IPendingTransaction;
}

export type IResult = any;

export type IPotentialActions = any;

export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}

export type IPurpose = ITransactionPurpose | ISimpleOrder;

export interface IAttributes
    extends ActionFactory.IAttributes<ActionType.MoneyTransfer, IObject, IResult> {
    typeOf: ActionType.MoneyTransfer;
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
