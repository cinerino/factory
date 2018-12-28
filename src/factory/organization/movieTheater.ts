import IMultilingualString from '../multilingualString';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import * as OnlinePlaceFactory from '../place/online';
import * as StorePlaceFactory from '../place/store';
import SortType from '../sortType';
import * as URLFactory from '../url';

import * as chevre from '../../chevre';

/**
 * 劇場のオファーインターフェース
 */
export interface IMakesOffer extends OrganizationFactory.IMakesOffer {
    itemOffered: {
        typeOf: chevre.reservationType.EventReservation;
        reservationFor: {
            typeOf: chevre.eventType;
            location: {
                typeOf: chevre.placeType.MovieTheater;
                branchCode: string;
            };
        };
    };
}

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

/**
 * サービス提供店舗インターフェース
 */
export type IAreaServed = StorePlaceFactory.IPlace | OnlinePlaceFactory.IPlace;

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
    makesOffer: IMakesOffer[];
    /**
     * 電話番号
     */
    telephone: string;
    /**
     * 劇場サイトURL
     */
    url: URLFactory.IURL;
    /**
     * Points-of-Sales operated by the organization or person.
     */
    hasPOS: OrganizationFactory.IPOS[];
    /**
     * サービス提供店舗
     */
    areaServed: IAreaServed[];
}

export type IOrganization = OrganizationFactory.IOrganization<IAttributes>;

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    'location.branchCode'?: SortType;
}

export interface ISearchConditions extends OrganizationFactory.ISearchConditions {
    sort?: ISortOrder;
}
