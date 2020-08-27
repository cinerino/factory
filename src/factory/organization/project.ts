import { IParentOrganization } from '../organization';
import OrganizationType from '../organizationType';
import SortType from '../sortType';
import { IThing } from '../thing';

/**
 * 通知パラメータ
 */
export interface IInformParams {
    /**
     * 通知先
     */
    recipient: {
        id?: string;
        typeOf: any;
        name: string;
        url: string;
    };
}

export interface ICognitoSettings {
    /**
     * 管理者ユーザープール
     */
    adminUserPool: {
        id: string;
    };
    /**
     * 顧客ユーザープール
     */
    customerUserPool: {
        id: string;
    };
}

/**
 * 注文ステータス変更時イベントインターフェース
 */
export interface IOnOrderStatusChanged {
    informOrder?: IInformParams[];
}

/**
 * ウェブフック設定
 */
export interface IWebhookSettings {
    /**
     * リクエストタイムアウト
     * @see https://github.com/request/request#timeouts
     */
    timeout?: number;
}

export interface IOnRefunded {
    informOrder?: IInformParams[];
}

export interface IPayment {
    onRefunded?: IOnRefunded;
}

/**
 * プロジェクト設定インターフェース
 */
export interface ISettings {
    cognito?: ICognitoSettings;
    onOrderStatusChanged?: IOnOrderStatusChanged;
    webhook?: IWebhookSettings;
    payment?: IPayment;

    // ↓その他の設定
    codeExpiresInSeconds?: number;
    sendgridApiKey?: string;
    transactionWebhookUrl?: string;
    useUsernameAsGMOMemberId?: boolean;
}

/**
 * プロジェクトインターフェース
 */
export interface IProject extends IThing {
    typeOf: OrganizationType.Project;
    id: string;
    email?: string;
    logo?: string;
    parentOrganization?: IParentOrganization;
    telephone?: string;
    settings?: ISettings;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    _id?: SortType;
}

/**
 * プロジェクト検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    ids?: string[];
    /**
     * 名称
     */
    name?: string;
}
