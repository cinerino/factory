import * as waiter from '@waiter/factory';

import { IAction as IAuthorizeAction, IAttributes as IAuthorizeActionAttributes } from '../action/authorize';
import { IAttributes as IOrderActionAttributes } from '../action/trade/order';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { IOrder } from '../order';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import { IPerson, IProfile } from '../person';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

/**
 * 顧客プロフィールインターフェース
 */
export type ICustomerProfile = IProfile;
/**
 * 顧客プロフィールインターフェース
 * @alias ICustomerProfile
 */
export type ICustomerContact = ICustomerProfile;

/**
 * 販売者インターフェース
 */
export type ISeller = OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;

/**
 * 顧客インターフェース
 */
export type IAgent = IPerson;

export interface IPassportBeforeStart {
    /**
     * WAITER許可証発行者
     */
    issuer: string;
    /**
     * WAITER許可証トークン
     */
    token: waiter.passport.IEncodedPassport;
    /**
     * WAITER許可証トークンシークレット
     */
    secret: string;
}

export interface IStartParamsWithoutDetail {
    expires: Date;
    agent: IAgent;
    seller: {
        typeOf: OrganizationType;
        id: string;
    };
    object: {
        clientUser?: IClientUser;
        passport?: IPassportBeforeStart;
    };
}

/**
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams extends TransactionFactory.IStartParams<TransactionType.PlaceOrder, IAgent, undefined, IObject> {
    /**
     * 販売者
     */
    seller: ISeller;
}

/**
 * 取引結果インターフェース
 */
export interface IResult {
    /**
     * 注文データ
     */
    order: IOrder;
}

/**
 * エラーインターフェース
 */
export type IError = any;

export interface IObject {
    /**
     * WAITER許可証トークン
     */
    passportToken?: waiter.passport.IEncodedPassport;
    /**
     * WAITER許可証
     */
    passport?: waiter.passport.IPassport;
    /**
     * user object of the client where a transaction is processing.
     */
    clientUser?: IClientUser;
    /**
     * customer contact
     */
    // customerContact?: ICustomerProfile;
    /**
     * 承認アクションリスト
     */
    authorizeActions: IAuthorizeAction<IAuthorizeActionAttributes<any, any>>[];
}

export interface IPotentialActions {
    order: IOrderActionAttributes;
}

/**
 * 注文取引インターフェース
 */
export type ITransaction = IExtendId<IAttributes>;

/**
 * 注文取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.PlaceOrder> {
    seller?: {
        typeOf?: OrganizationType;
        ids?: string[];
    };
    object?: {
        /**
         * 顧客プロフィール
         * @deprecated Use agent
         */
        customerContact?: {
            givenName?: string;
            familyName?: string;
            telephone?: string;
            email?: string;
        };
    };
    result?: {
        order?: {
            /**
             * 結果の注文番号
             */
            orderNumbers?: string[];
        };
    };
}
