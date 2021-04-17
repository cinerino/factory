import * as waiter from '@waiter/factory';

import { IExtendId } from './autoGenerated';
import { ICustomization } from './creativeWork/message/email';
import { IProject } from './organization/project';
import TransactionTasksExportationStatus from './transactionTasksExportationStatus';
import TransactionType from './transactionType';

import * as chevre from '../chevre';

/**
 * 販売者インターフェース
 */
export type ISeller = chevre.seller.ISeller;

/**
 * Eメール送信パラメータ
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

/**
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams<T extends TransactionType, TAgent, TRecipient, TObject> {
    project: IProject;
    /**
     * 取引タイプ
     */
    typeOf: T;
    /**
     * 取引主体
     */
    agent: TAgent;
    /**
     * 取引物受取者
     */
    recipient?: TRecipient;
    /**
     * 取引対象
     */
    object: TObject;
    /**
     * 取引進行期限
     */
    expires: Date;
}

export type ITransaction<TStartParams, TResult, TError, TPotentialActions> =
    IExtendId<IAttributes<TStartParams, TResult, TError, TPotentialActions>>;

/**
 * 取引インターフェース
 */
export type IAttributes<TStartParams, TResult, TError, TPotentialActions> = TStartParams & {
    /**
     * 取引状態
     */
    status: chevre.transactionStatusType;
    /**
     * 取引結果
     */
    result?: TResult;
    /**
     * 取引エラー
     */
    error?: TError;
    /**
     * 取引進行期限
     */
    expires: Date;
    /**
     * 取引開始日時
     */
    startDate: Date;
    /**
     * 取引終了日時
     */
    endDate?: Date;
    /**
     * タスクエクスポート日時
     */
    tasksExportedAt?: Date;
    /**
     * タスクエクスポート状態
     */
    tasksExportationStatus: TransactionTasksExportationStatus;
    /**
     * 事後に発生するアクション
     */
    potentialActions?: TPotentialActions;
};

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    startDate?: chevre.sortType;
}

export interface ISearchConditions<T extends TransactionType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
        ids?: string[];
    };
    /**
     * 取引タイプ
     */
    typeOf: T;
    /**
     * IDリスト
     */
    ids?: string[];
    /**
     * ステータスリスト
     */
    statuses?: chevre.transactionStatusType[];
    /**
     * 開始日時(から)
     */
    startFrom?: Date;
    /**
     * 開始日時(まで)
     */
    startThrough?: Date;
    /**
     * 終了日時(から)
     */
    endFrom?: Date;
    /**
     * 終了日時(まで)
     */
    endThrough?: Date;
    agent?: {
        typeOf?: chevre.personType;
        ids?: string[];
        identifiers?: chevre.person.IIdentifier;
        givenName?: string;
        familyName?: string;
        telephone?: string;
        email?: string;
    };
    tasksExportationStatuses?: TransactionTasksExportationStatus[];
}
