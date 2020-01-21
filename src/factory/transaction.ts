import { IExtendId } from './autoGenerated';
import { ICustomization } from './creativeWork/message/email';
import * as OrganizationFactory from './organization';
import { IProject } from './organization/project';
import OrganizationType from './organizationType';
import { IIdentifier } from './person';
import PersonType from './personType';
import SortType from './sortType';
import TransactionStatusType from './transactionStatusType';
import TransactionTasksExportationStatus from './transactionTasksExportationStatus';
import TransactionType from './transactionType';

/**
 * 販売者インターフェース
 */
export type ISeller = OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;

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
    status: TransactionStatusType;
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
    startDate?: SortType;
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
    statuses?: TransactionStatusType[];
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
        typeOf?: PersonType;
        ids?: string[];
        identifiers?: IIdentifier;
        givenName?: string;
        familyName?: string;
        telephone?: string;
        email?: string;
    };
    tasksExportationStatuses?: TransactionTasksExportationStatus[];
}
