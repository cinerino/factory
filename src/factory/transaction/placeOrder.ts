import * as waiter from '@waiter/factory';

import { IAction as IAuthorizeAction, IAttributes as IAuthorizeActionAttributes } from '../action/authorize';
import { IObject as IConfirmReservationObject } from '../action/interact/confirm/reservation';
import { IAttributes as IOrderActionAttributes } from '../action/trade/order';
import { IObject as IGivePointAwardObject } from '../action/transfer/give/pointAward';
import { IExtendId } from '../autoGenerated';
import { IIdentifier as IOrderIdentifier, IOrder } from '../order';
import { IInformParams, IOnOrderStatusChanged, IProject } from '../organization/project';
import { IPerson, IProfile } from '../person';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

import * as chevre from '../../chevre';

/**
 * 顧客プロフィールインターフェース
 */
export type ICustomerProfile = IProfile;

export import ISeller = TransactionFactory.ISeller;

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

export interface IObject {
    /**
     * 確認番号
     */
    confirmationNumber?: string;
    /**
     * 注文番号
     */
    orderNumber?: string;
    /**
     * 注文名称
     */
    name?: string;
    /**
     * WAITER許可証トークン
     */
    passportToken?: waiter.passport.IEncodedPassport;
    /**
     * WAITER許可証
     */
    passport?: waiter.passport.IPassport;
    /**
     * 承認アクションリスト
     */
    authorizeActions: IAuthorizeAction<IAuthorizeActionAttributes<any, any>>[];
    /**
     * 注文ステータス変更時イベント
     */
    onOrderStatusChanged?: IOnOrderStatusChanged;
    potentialActions?: {
        givePointAward?: IGivePointAwardParams[];
    };
}

export interface IStartParamsWithoutDetail {
    project: IProject;
    expires: Date;
    agent: IAgent;
    seller: {
        id: string;
    };
    object: {
        passport?: IPassportBeforeStart;
        /**
         * 注文ステータス変更時イベント
         */
        onOrderStatusChanged?: IOnOrderStatusChanged;
        /**
         * 注文名称
         */
        name?: string;
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
    object?: IConfirmReservationObject<chevre.service.webAPI.Identifier>;
}

/**
 * メンバーシップ登録パラメータ
 */
export interface IRegisterProgramMembershipParams {
    object?: {
        typeOf: 'ProgramMembership';
        membershipFor: {
            /**
             * プロダクトID
             */
            id: string;
        };
    };
    potentialActions?: {
        /**
         * 次回のメンバーシップ注文タスク
         */
        orderProgramMembership?: {
            /**
             * メンバーシップ注文後アクション
             */
            potentialActions?: IPotentialActionsParams;
        };
    };
}

export type ISendEmailMessageParams = TransactionFactory.ISendEmailMessageParams;

/**
 * インセンティブ付与パラメータ
 */
export interface IGivePointAwardParams {
    object?: IGivePointAwardObject;
}

/**
 * 取引確定後アクションパラメータ
 */
export interface IPotentialActionsParams {
    order?: {
        potentialActions?: {
            givePointAward?: IGivePointAwardParams[];
            informOrder?: IInformOrderParams[];
            sendOrder?: {
                potentialActions?: {
                    confirmReservation?: IConfirmReservationParams[];
                    informOrder?: IInformOrderParams[];
                    // registerProgramMembership?: IRegisterProgramMembershipParams[];
                    sendEmailMessage?: ISendEmailMessageParams[];
                };
            };
        };
    };
}

/**
 * 取引結果の注文パラメータ
 */
export interface IResultOrderParams {
    /**
     * 注文識別子指定
     */
    identifier?: IOrderIdentifier;
    /**
     * 注文確認URLのカスタム指定
     */
    url?: string;
}

/**
 * 取引結果パラメータ
 */
export interface IResultParams {
    order?: IResultOrderParams;
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
    /**
     * 取引結果
     */
    result?: IResultParams;
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
        typeOf?: string;
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
