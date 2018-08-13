import * as chevre from '@chevre/factory';
import IMultilingualString from '../multilingualString';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import * as URLFactory from '../url';

/**
 * 場所インターフェース
 */
export interface ILocation {
    /**
     * スキーマタイプ
     */
    typeOf: chevre.placeType;
    /**
     * 枝番号
     */
    branchCode: string;
    /**
     * 場所名称
     */
    name: IMultilingualString;
}
/**
 * 親組織インターフェース
 */
export interface IParentOrganization {
    /**
     * スキーマタイプ
     */
    typeOf: OrganizationType;
    /**
     * 組織識別子
     */
    identifier: string;
    /**
     * 組織名称
     */
    name: IMultilingualString;
}

export interface IOrganization extends OrganizationFactory.IOrganization {
    typeOf: OrganizationType.MovieTheater;
    /**
     * 組織識別子
     */
    identifier: string;
    /**
     * 劇場名称
     */
    name: IMultilingualString;
    /**
     * 枝番号
     */
    branchCode: string; // 劇場コード
    /**
     * 親組織
     */
    parentOrganization: IParentOrganization;
    /**
     * 場所
     */
    location: ILocation;
    /**
     * 電話番号
     */
    telephone: string;
    /**
     * 劇場ポータルサイトURL
     */
    url: URLFactory.IURL;
}
