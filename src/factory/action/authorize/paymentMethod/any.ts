import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import PaymentMethodType from '../../../paymentMethodType';
import PaymentStatusType from '../../../paymentStatusType';
import { IPropertyValue } from '../../../propertyValue';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

import * as chevre from '../../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ResultType {
    Payment = 'Payment'
}

/**
 * 汎用決済方法タイプ
 */
export type IAnyPaymentMethod = PaymentMethodType | string;

/**
 * 承認対象インターフェース
 */
export interface IObject<T extends IAnyPaymentMethod> {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
    /**
     * The amount of money.
     */
    amount: number;
    /**
     * 説明
     */
    description?: string;
    /**
     * 決済方法名称
     * 未指定であればデフォルト値が使用されます
     */
    name?: string;
    /**
     * 決済方法
     */
    paymentMethod: T;
    /**
     * 決済ID
     */
    paymentMethodId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: ResultType;
}

export interface IResult<T extends IAnyPaymentMethod> {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId: string;
    /**
     * The amount of money.
     */
    amount: number;
    /**
     * 決済方法
     */
    paymentMethod: T;
    /**
     * 決済ID
     */
    paymentMethodId: string;
    /**
     * 決済ステータス
     */
    paymentStatus: PaymentStatusType;
    /**
     * 決済方法名称
     */
    name: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: chevre.monetaryAmount.IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
    typeOf: ResultType;
}

export interface IPurpose {
    typeOf: TransactionType;
    id: string;
}

export declare enum ServiceIdentifier {
    Chevre = 'Chevre',
    GMO = 'GMO',
    MovieTicket = 'MovieTicket'
}

export interface IService {
    typeOf: 'WebAPI';
    identifier: ServiceIdentifier;
}

export type IInstrument = IService;

/**
 * 決済方法承認アクション属性インターフェース
 */
export interface IAttributes<T extends PaymentMethodType> extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject<T>;
    agent: IAgent;
    instrument?: IInstrument;
    recipient: IRecipient;
    purpose: IPurpose;
}

/**
 * 決済方法承認アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
