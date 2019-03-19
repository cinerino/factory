import * as pecorino from '@pecorino/factory';

import AccountType from '../../accountType';
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IMonetaryAmount } from '../../monetaryAmount';
import PaymentMethodType from '../../paymentMethodType';
import { IPropertyValue } from '../../propertyValue';
import SortType from '../../sortType';
import TransactionType from '../../transactionType';
import { IPendingTransaction } from '../authorize/paymentMethod/account';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 出所不明の匿名場所インターフェース
 */
export interface IAnonymousLocation {
    /**
     * ロケーションタイプ
     */
    typeOf: string;
    /**
     * ロケーションID
     */
    id?: string;
    /**
     * ロケーション名
     */
    name?: string;
}

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
    totalPaymentDue?: IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty: IPropertyValue<string>[];
}

/**
 * 口座インターフェース
 */
export interface IAccount<T extends AccountType> {
    typeOf: pecorino.account.TypeOf.Account;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber: string;
    /**
     * 口座名義
     */
    name?: string;
}

/**
 * 転送元あるいは転送先の場所インターフェース
 */
export type ILocation<T extends AccountType> = IAnonymousLocation | IPaymentMethodLocation<AvailablePaymentMethodType> | IAccount<T>;

export interface IObject<T extends AccountType> {
    pendingTransaction: IPendingTransaction<T>;
}

export type IResult = any;

export type IPotentialActions = any;

/**
 * アクションの目的インターフェース
 * ここでは、取引が目的となる
 */
export interface IPurpose {
    /**
     * 取引タイプ
     */
    typeOf: TransactionType;
    /**
     * 取引ID
     */
    id: string;
}

export interface IAttributes<T extends AccountType>
    extends ActionFactory.IAttributes<ActionType.MoneyTransfer, IObject<T>, IResult> {
    typeOf: ActionType.MoneyTransfer;
    /**
     * どんな取引によって発生した転送アクションか
     */
    purpose: IPurpose;
    /**
     * 金額
     */
    amount: number;
    /**
     * 転送元
     */
    fromLocation: ILocation<T>;
    /**
     * 転送先
     */
    toLocation: ILocation<T>;
}

export type IAction<T extends AccountType> = ActionFactory.IAction<IAttributes<T>>;

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    /**
     * アクション開始日時順
     */
    startDate?: SortType;
    /**
     * アクション完了日時順
     */
    endDate?: SortType;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions<T extends AccountType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber?: string;
}
