import * as chevre from '@chevre/factory';
import IMultilingualString from '../multilingualString';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import SortType from '../sortType';
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
export interface IAttributes extends OrganizationFactory.IAttributes<OrganizationType.MovieTheater> {
    /**
     * 劇場名称
     */
    name: IMultilingualString;
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
     * 劇場サイトURL
     */
    url: URLFactory.IURL;
}
export type IOrganization = OrganizationFactory.IOrganization<IAttributes>;
/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    'location.branchCode'?: SortType;
}
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 名称
     */
    name?: string;
}
