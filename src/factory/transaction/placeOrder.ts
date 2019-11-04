import * as waiter from '@waiter/factory';

import { IAction as IAuthorizeAction, IAttributes as IAuthorizeActionAttributes } from '../action/authorize';
import { IObject as IConfirmReservationObject } from '../action/interact/confirm/reservation';
import { IAttributes as IOrderActionAttributes } from '../action/trade/order';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import { ICustomization } from '../creativeWork/message/email';
import { IOrder } from '../order';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import { IPerson, IProfile } from '../person';
import { IInformParams, IOnOrderStatusChanged, IProject } from '../project';
import { Identifier as WebAPIIdentifier } from '../service/webAPI';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

/**
 * 顧客プロフィールインターフェース
 */
export type ICustomerProfile = IProfile;

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
    project: IProject;
    expires: Date;
    agent: IAgent;
    seller: {
        typeOf: OrganizationType;
        id: string;
    };
    object: {
        clientUser?: IClientUser;
        passport?: IPassportBeforeStart;
        /**
         * 注文ステータス変更時イベント
         */
        onOrderStatusChanged?: IOnOrderStatusChanged;
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
 * 注文通知パラメータ
 */
export type IInformOrderParams = IInformParams;

/**
 * 予約確定パラメータ
 */
export interface IConfirmReservationParams {
    /**
     * 確定対象
     */
    object?: IConfirmReservationObject<WebAPIIdentifier>;
}

/**
 * 会員プログラム登録パラメータ
 */
export interface IRegisterProgramMembershipParams {
    object?: {
        typeOf: 'ProgramMembership';
        /**
         * 会員プログラムID
         */
        id: string;
    };
    potentialActions?: {
        /**
         * 次回の会員プログラム注文タスク
         */
        orderProgramMembership?: {
            /**
             * 会員プログラム注文後アクション
             */
            potentialActions?: IPotentialActionsParams;
        };
    };
}

/**
 * 会員プログラム登録パラメータ
 */
export interface ISendEmailMessageParams {
    /**
     * Eメールカスタマイズ
     * メール本文をカスタマイズしたい場合、PUGテンプレートを指定
     * 挿入変数として`order`を使用できます
     * @see https://pugjs.org/api/getting-started.html
     */
    object?: ICustomization;
}

/**
 * 取引確定後アクションパラメータ
 */
export interface IPotentialActionsParams {
    order?: {
        potentialActions?: {
            informOrder?: IInformOrderParams[];
            sendOrder?: {
                potentialActions?: {
                    confirmReservation?: IConfirmReservationParams[];
                    informOrder?: IInformOrderParams[];
                    registerProgramMembership?: IRegisterProgramMembershipParams[];
                    sendEmailMessage?: ISendEmailMessageParams[];
                };
            };
        };
    };
}

/**
 * 取引確定パラメータ
 */
export interface IConfirmParams {
    /**
     * 取引ID
     */
    id: string;
    agent?: { id?: string };
    /**
     * 取引確定後アクション
     */
    potentialActions?: IPotentialActionsParams;
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
     * 承認アクションリスト
     */
    authorizeActions: IAuthorizeAction<IAuthorizeActionAttributes<any, any>>[];
    /**
     * 注文ステータス変更時イベント
     */
    onOrderStatusChanged?: IOnOrderStatusChanged;
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
