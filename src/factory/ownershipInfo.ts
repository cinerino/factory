import * as pecorino from '@pecorino/factory';

import { IProject } from './organization/project';
import SortType from './sortType';

import * as chevre from '../chevre';

export type IBookingService = chevre.service.webAPI.IService<chevre.service.webAPI.Identifier>;

/**
 * 口座インターフェース
 */
export interface IAccount {
    typeOf: string;
    /**
     * 口座タイプ
     */
    accountType: string;
    /**
     * 口座番号
     */
    accountNumber: string;
    identifier?: string;
}

/**
 * 予約インターフェース
 */
export interface IReservation {
    typeOf: chevre.reservationType;
    /**
     * 予約ID
     */
    id?: string;
    /**
     * 予約番号
     */
    reservationNumber?: string;
    /**
     * ブッキングサービス(API)
     */
    bookingService?: IBookingService;
}

export type IReservationWithDetail = IReservation & chevre.reservation.IReservation<chevre.reservationType>;

export type IServiceOutput = chevre.product.IServiceOutput;

/**
 * 所有対象物インターフェース (Product or Service)
 */
export type IGood = IReservation | IAccount | IServiceOutput;

/**
 * 所有対象物インターフェース(対象物詳細有)
 */
export type IGoodWithDetail = IReservationWithDetail | pecorino.account.IAccount | IServiceOutput;

/**
 * 所有者インターフェース
 */
export type IOwner = chevre.seller.ISeller | chevre.person.IPerson;

export type OwnershipInfoType = 'OwnershipInfo';

/**
 * 所有権インターフェース
 */
export interface IOwnershipInfo<T extends IGood | IGoodWithDetail> {
    project: IProject;
    /**
     * object type
     */
    typeOf: OwnershipInfoType;
    /**
     * 所有権ID
     */
    id: string;
    /**
     * 識別子
     */
    identifier?: any;
    /**
     * owned by whom
     */
    ownedBy: IOwner;
    /**
     * The organization or person from which the product was acquired.
     */
    acquiredFrom?: IOwner;
    /**
     * The date and time of obtaining the product.
     */
    ownedFrom: Date;
    /**
     * The date and time of giving up ownership on the product.
     */
    ownedThrough?: Date;
    /**
     * 所有対象物
     */
    typeOfGood: T;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    /**
     * 所有開始日時
     */
    ownedFrom?: SortType;
}

/**
 * 所有対象物検索条件インターフェース
 */
export interface ITypeOfGoodSearchConditions {
    typeOf?: string | {
        $eq?: string;
        $in?: string[];
    };
    identifier?: {
        $eq?: string;
    };
    id?: {
        $eq?: string;
        $in?: string[];
    };
    issuedThrough?: {
        id?: {
            $eq?: string;
        };
        typeOf?: {
            $eq?: string;
        };
    };
    accountNumber?: {
        $eq?: string;
        $in?: string[];
    };
    /**
     * 口座タイプ
     */
    accountType?: string;
}

/**
 * 所有権検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
        ids?: string[];
    };
    ids?: string[];
    /**
     * 所有者
     */
    ownedBy?: {
        id?: string;
    };
    /**
     * 所有期間
     */
    ownedFrom?: Date;
    /**
     * 所有期間
     */
    ownedThrough?: Date;
    /**
     * 所有対象物
     */
    typeOfGood?: ITypeOfGoodSearchConditions;
}
