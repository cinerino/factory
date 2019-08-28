import { IAttributes as IReturnOrderActionAttributes } from '../action/transfer/return/order';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { ICustomization } from '../creativeWork/message/email';
import { IOrder } from '../order';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import { IPerson } from '../person';
import { IProject } from '../project';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

import * as chevre from '../../chevre';

/**
 * 顧客インターフェース
 */
export type IAgent = IPerson;

/**
 * 販売者インターフェース
 */
export type ISeller = OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;

/**
 * 取引結果インターフェース
 */
export type IResult = any;

/**
 * エラーインターフェース
 */
export type IError = any;

/**
 * 返品理由
 */
export enum Reason {
    /**
     * 顧客自身の都合での返品
     */
    Customer = 'Customer',
    /**
     * 販売者都合での返品
     */
    Seller = 'Seller'
}

export interface IReturnableOrder {
    orderNumber: string;
    customer?: {
        email?: string;
        telephone?: string;
    };
}

/**
 * 注文返品開始パラメータインターフェース
 */
export interface IStartParamsWithoutDetail {
    project?: IProject;
    expires: Date;
    agent: IAgent;
    object: {
        clientUser?: IClientUser;
        order: IReturnableOrder;
        cancellationFee: number;
        reason: Reason;
    };
    seller: {
        typeOf: OrganizationType;
        id: string;
    };
}

/**
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams extends TransactionFactory.IStartParams<TransactionType.ReturnOrder, IAgent, undefined, IObject> {
    /**
     * 販売者
     */
    seller: ISeller;
}

export interface IConfirmInformOrderParams {
    /**
     * 通知先
     */
    recipient?: {
        /**
         * 通知URL
         */
        url?: string;
    };
}

export interface IConfirmPotentialActionsParams {
    /**
     * 注文返品アクション
     */
    returnOrder?: {
        /**
         * 注文返品後アクション
         */
        potentialActions?: {
            /**
             * 注文通知アクション
             */
            informOrder?: IConfirmInformOrderParams[];
            /**
             * クレジットカード返金アクションについてカスタマイズする場合に指定
             */
            refundCreditCard?: {
                object: {
                    object: {
                        paymentMethod: {
                            /**
                             * 返金対象決済ID
                             */
                            paymentMethodId: string;
                        };
                    }[];
                };
                potentialActions?: {
                    sendEmailMessage?: {
                        /**
                         * 返金メールカスタマイズ
                         * メール本文をカスタマイズしたい場合、PUGテンプレートを指定
                         * 挿入変数として`order`を使用できます
                         * @see https://pugjs.org/api/getting-started.html
                         */
                        object?: ICustomization;
                    };
                };
            }[];
            // refundAccount?: refundAccountActions,
            /**
             * ムビチケ着券取消を実行するかどうか
             */
            refundMovieTicket?: boolean;
            // returnPointAward?: returnPointAwardActions
        };
    };
}

export interface IConfirmParams {
    /**
     * 取引ID
     */
    id: string;
    agent?: { id?: string };
    /**
     * 取引確定後アクション
     */
    potentialActions?: IConfirmPotentialActionsParams;
}

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    clientUser?: IClientUser;
    order: IOrder;
    /**
     * キャンセル手数料
     */
    cancellationFee: number;
    /**
     * 返品理由
     */
    reason: Reason;
    /**
     * 進行中の予約キャンセル取引
     */
    pendingCancelReservationTransactions?: chevre.transaction.cancelReservation.ITransaction[];
}

export interface IPotentialActions {
    /**
     * 注文返品アクション属性
     */
    returnOrder: IReturnOrderActionAttributes;
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 返品取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}

export interface ISearchConditions extends TransactionFactory.ISearchConditions<TransactionType.ReturnOrder> {
    object?: {
        order?: {
            /**
             * 返品対象注文番号
             */
            orderNumbers?: string[];
        };
        result?: {
        };
    };
}
