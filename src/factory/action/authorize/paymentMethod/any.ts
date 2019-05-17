import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { IMonetaryAmount } from '../../../monetaryAmount';
import PaymentMethodType from '../../../paymentMethodType';
import PaymentStatusType from '../../../paymentStatusType';
import { IPropertyValue } from '../../../propertyValue';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 汎用決済方法タイプ
 */
export type IAnyPaymentMethod<T extends PaymentMethodType> = T | string;

/**
 * 承認対象インターフェース
 */
export interface IObject<T extends PaymentMethodType> {
    /**
     * 決済方法タイプ
     */
    typeOf: IAnyPaymentMethod<T>;
    /**
     * 決済方法名称
     * 未指定であればデフォルト値が使用されます
     */
    name?: string;
    /**
     * 金額
     */
    amount: number;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
}

export interface IResult<T extends PaymentMethodType> {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId: string;
    /**
     * 金額
     */
    amount: number;
    /**
     * 決済方法
     */
    paymentMethod: IAnyPaymentMethod<T>;
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
    totalPaymentDue?: IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
}

export interface IPurpose {
    typeOf: TransactionType;
    id: string;
}

/**
 * 決済方法承認アクション属性インターフェース
 */
export interface IAttributes<T extends PaymentMethodType> extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
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
