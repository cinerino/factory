import AccountType from './accountType';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';
import { IAvailablePlaceType, IPlace } from './place';
import SortType from './sortType';

import * as chevre from '../chevre';

/**
 * 場所インターフェース
 */
export interface ILocation {
    /**
     * スキーマタイプ
     */
    typeOf: string;
    /**
     * 枝番号
     */
    branchCode?: string;
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
    identifier?: any;
    /**
     * 組織名称
     */
    name: IMultilingualString;
}

export type IAcceptedPaymentMethodType = PaymentMethodType | string;
/**
 * GMOショップ情報インターフェース
 */
export interface IGMOInfo {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパス
     */
    shopPass?: string;
}
/**
 * ムビチケショップ情報インターフェース
 */
export interface IMovieTicketInfo {
    /**
     * ムビチケ興行会社コード
     */
    kgygishCd: string;
    /**
     * ムビチケサイトコード
     */
    stCd: string;
}
export interface ICashPaymentAccepted {
    paymentMethodType: PaymentMethodType.Cash;
}
export interface ICreditCardPaymentAccepted {
    paymentMethodType: PaymentMethodType.CreditCard;
    /**
     * GMO情報
     */
    gmoInfo: IGMOInfo;
}
export interface IEMoneyPaymentAccepted {
    paymentMethodType: PaymentMethodType.EMoney;
}
export interface IAccountPaymentAccepted<T extends AccountType> {
    paymentMethodType: PaymentMethodType.Account;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber: string;
}
export interface IMovieTicketPaymentAccepted {
    paymentMethodType: PaymentMethodType.MovieTicket;
    movieTicketInfo: IMovieTicketInfo;
}
export interface ICommonPaymentAccepted {
    paymentMethodType: IAcceptedPaymentMethodType;
}
/**
 * 利用可能決済インターフェース
 */
export type IPaymentAccepted<T extends IAcceptedPaymentMethodType> =
    T extends PaymentMethodType.Account ? IAccountPaymentAccepted<AccountType> :
    T extends PaymentMethodType.Cash ? ICashPaymentAccepted :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentAccepted :
    T extends PaymentMethodType.EMoney ? IEMoneyPaymentAccepted :
    T extends PaymentMethodType.MovieTicket ? IMovieTicketPaymentAccepted :
    ICommonPaymentAccepted;
export type POSType = 'POS';
/**
 * POSインターフェース
 * 管理者が識別しやすいようPOSの属性を指定します
 */
export interface IPOS {
    typeOf: POSType;
    id: string;
    name: string;
}

export type IMakesOffer = IOffer;

/**
 * サービス提供エリアインターフェース
 */
export type IAreaServed = IPlace<IAvailablePlaceType>;

export interface IAttributes<T extends OrganizationType> {
    /**
     * 組織タイプ
     */
    typeOf: T;
    identifier?: any;
    name: IMultilingualString;
    /**
     * 親組織
     */
    parentOrganization?: IParentOrganization;
    legalName?: IMultilingualString;
    location?: ILocation;
    /**
     * A pointer to products or services offered by the organization or person.
     */
    makesOffer?: IMakesOffer[];
    telephone?: string;
    url?: string;
    image?: string;
    paymentAccepted?: IPaymentAccepted<IAcceptedPaymentMethodType>[];
    /**
     * Points-of-Sales operated by the organization or person.
     */
    hasPOS?: IPOS[];
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: IAreaServed[];
}

/**
 * 組織インターフェース
 */
export type IOrganization<T extends IAttributes<OrganizationType>> = T & {
    id: string;
};

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    'location.branchCode'?: SortType;
}

export interface ILocationSearchConditions {
    typeOfs?: chevre.placeType[] | string[];
    branchCodes?: string[];
    name?: string;
}

/**
 * 組織検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    typeOfs?: OrganizationType[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 場所
     */
    location?: ILocationSearchConditions;
}
