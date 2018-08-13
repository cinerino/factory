/**
 * 注文取引ファクトリー
 */
import * as waiterFactory from '@waiter/factory';

import { IAction as IAuthorizeAction, IAttributes as IAuthorizeActionAttributes } from '../action/authorize';
import { IAttributes as IOrderActionAttributes } from '../action/trade/order';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import * as OrderFactory from '../order';
import { IOrganization } from '../organization';
import * as OwnershipInfoFactory from '../ownershipInfo';
import { IContact, IPerson } from '../person';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

/**
 * customer contact interface
 * 購入者連作先インターフェース
 */
export type ICustomerContact = IContact;
/**
 * seller interface
 * 販売者インターフェース
 */
export type ISeller = IOrganization;
/**
 * agent interface
 * 購入者インターフェース
 */
export type IAgent = IPerson;
/**
 * result interface
 * 取引結果インターフェース
 */
export interface IResult {
    /**
     * 注文データ
     */
    order: OrderFactory.IOrder;
    /**
     * 購入者に与えられる所有権リスト
     */
    ownershipInfos: OwnershipInfoFactory.IOwnershipInfo<OwnershipInfoFactory.IGoodType>[];
}
/**
 * error interface
 * エラーインターフェース
 */
export type IError = any;
/**
 * object of a transaction interface
 * 取引対象物インターフェース
 */
export interface IObject {
    /**
     * WAITER許可証トークン
     */
    passportToken?: waiterFactory.passport.IEncodedPassport;
    /**
     * WAITER許可証
     */
    passport?: waiterFactory.passport.IPassport;
    /**
     * user object of the client where a transaction is processing.
     */
    clientUser?: IClientUser;
    /**
     * customer contact
     */
    customerContact?: ICustomerContact;
    /**
     * 認可アクションリスト
     */
    authorizeActions: IAuthorizeAction<IAuthorizeActionAttributes<any, any>>[];
}
export interface IPotentialActions {
    order: IOrderActionAttributes;
}
export type ITransaction = IExtendId<IAttributes>;
/**
 * place order transaction interface
 * 注文取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<TransactionType.PlaceOrder, IAgent, IObject, IResult> {
    /**
     * 購入者
     */
    agent: IAgent;
    /**
     * 販売者
     */
    seller: ISeller;
    /**
     * 取引の結果発生するもの
     */
    result?: IResult;
    /**
     * 取引に関するエラー
     */
    error?: IError;
    /**
     * 取引の対象物
     * 座席仮予約、クレジットカードのオーソリなど、取引を構成する承認などが含まれます。
     */
    object: IObject;
    /**
     * 事後発生アクション
     */
    potentialActions?: IPotentialActions;
}
