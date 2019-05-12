import SortType from './sortType';

export interface ISettings {
    chevre?: {
        endpoint: string;
    };
    coa?: {
        endpoint: string;
        refreshToken: string;
    };
    gmo?: {
        endpoint: string;
        siteId: string;
        sitePass: string;
    };
    mvtkReserve?: {
        endpoint: string;
    };
    pecorino?: {
        endpoint: string;
    };
    waiter?: {
        disabled: boolean;
        endpoint: string;
        secret: string;
    };
    lineNotify?: {
        accessToken: string;
        endpoint: string;
    };
}

/**
 * プロジェクトインターフェース
 */
export interface IProject {
    typeOf: 'Project';
    id: string;
    alternateName?: string;
    description?: string;
    email?: string;
    name?: string;
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
