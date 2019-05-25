import { IParentOrganization } from './organization';
import SortType from './sortType';

export interface ISettings {
    chevre?: {
        endpoint: string;
    };
    coa?: {
        endpoint: string;
        refreshToken: string;
    };
    cognito?: {
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
    };
    gmo?: {
        endpoint: string;
        siteId: string;
        sitePass: string;
    };
    mvtkReserve?: {
        endpoint: string;
        /**
         * 興行会社コード
         */
        companyCode: string;
    };
    pecorino?: {
        endpoint: string;
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
