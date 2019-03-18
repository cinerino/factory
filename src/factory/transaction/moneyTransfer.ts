import AccountType from '../accountType';
import { IAction as IAuthorizeAction, IAttributes as IAuthorizeActionAttributes } from '../action/authorize';
import { IAttributes as IPayActionAttributes } from '../action/trade/pay';
import { IAccount, IAttributes as IMoneyTransferActionAttributes } from '../action/transfer/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import PaymentMethodType from '../paymentMethodType';
import { IPerson } from '../person';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

export type IAgent = IPerson | OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;
export type IRecipient = IPerson | OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;

/**
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams<T extends AccountType>
    extends TransactionFactory.IStartParams<TransactionType.MoneyTransfer, IAgent, IRecipient, IObject<T>> {
    /**
     * 転送先
     */
    recipient: IRecipient;
}

export type IResult = any;

/**
 * エラーインターフェース
 */
export type IError = any;

export type IToLocation<T extends AccountType> = IAccount<T>;

/**
 * 取引対象物インターフェース
 */
export interface IObject<T extends AccountType> {
    clientUser?: IClientUser;
    /**
     * 金額
     */
    amount: number;
    /**
     * 転送先
     */
    toLocation: IToLocation<T>;
    description?: string;
    /**
     * 承認アクションリスト
     */
    authorizeActions: IAuthorizeAction<IAuthorizeActionAttributes<any, any>>[];
}

export interface IPotentialActions<T extends AccountType> {
    /**
     * 通貨転送
     * fromLocationが複数の場合、複数の転送アクションが発生
     */
    moneyTransfer: IMoneyTransferActionAttributes<T>[];
    /**
     * クレジットカード決済
     */
    payCreditCard?: IPayActionAttributes<PaymentMethodType.CreditCard>[];
}

export type ITransaction<T extends AccountType> = IExtendId<IAttributes<T>>;

/**
 * 転送取引インターフェース
 */
export interface IAttributes<T extends AccountType>
    extends TransactionFactory.IAttributes<IStartParams<T>, IResult, IError, IPotentialActions<T>> {
}
