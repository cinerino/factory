import { IParentOrganization } from '../organization';
import OrganizationType from '../organizationType';
import SortType from '../sortType';

/**
 * 通知パラメータ
 */
export interface IInformParams {
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

export interface IChevreSettings {
    endpoint: string;
}

export interface ICOASettings {
    endpoint: string;
    refreshToken: string;
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

export interface IGMOSettings {
    endpoint: string;
    siteId: string;
    sitePass: string;
}

export interface IMvtkReserveSettings {
    endpoint: string;
    /**
     * 興行会社コード
     */
    companyCode: string;
}

export interface IPecorinoSettings {
    endpoint: string;
}

export interface ILineNotifySettings {
    accessToken: string;
    endpoint: string;
}

/**
 * 注文ステータス変更時イベントインターフェース
 */
export interface IOnOrderStatusChanged {
    informOrder?: IInformParams[];
}

export interface IRepositorySettings {
    event?: any;
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

/**
 * プロジェクト設定インターフェース
 */
export interface ISettings {
    chevre?: IChevreSettings;
    coa?: ICOASettings;
    cognito?: ICognitoSettings;
    gmo?: IGMOSettings;
    mvtkReserve?: IMvtkReserveSettings;
    pecorino?: IPecorinoSettings;
    lineNotify?: ILineNotifySettings;
    onOrderStatusChanged?: IOnOrderStatusChanged;
    repository?: IRepositorySettings;
    webhook?: IWebhookSettings;

    // ↓その他の設定
    codeExpiresInSeconds?: number;
    emailInformUpdateProgrammembership?: string;
    sendgridApiKey?: string;
    transactionWebhookUrl?: string;
    useInMemoryOfferRepo?: boolean;
    useReservationNumberAsConfirmationNumber?: boolean;
    useUsernameAsGMOMemberId?: boolean;
}

/**
 * プロジェクトインターフェース
 */
export interface IProject {
    typeOf: OrganizationType.Project;
    id: string;
    alternateName?: string;
    description?: string;
    email?: string;
    logo?: string;
    name?: string;
    parentOrganization?: IParentOrganization;
    telephone?: string;
    url?: string;
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
