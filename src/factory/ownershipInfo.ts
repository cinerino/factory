import * as pecorino from '@pecorino/factory';

import { IProject } from './organization/project';
import { IPerson } from './person';
import SortType from './sortType';

import * as chevre from '../chevre';

export type IBookingService = chevre.service.webAPI.IService<chevre.service.webAPI.Identifier>;

/**
 * 口座タイプ
 */
export enum AccountGoodType {
    /**
     * 口座
     */
    Account = 'Account'
}

/**
 * 口座インターフェース
 */
export interface IAccount {
    typeOf: AccountGoodType.Account;
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
export interface IReservation<T extends chevre.reservationType> {
    typeOf: T;
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

export type IReservationWithDetail<T extends chevre.reservationType> = IReservation<T> & chevre.reservation.IReservation<T>;

/**
 * 所有対象物のタイプ
 */
export type IGoodType = string;

/**
 * 所有対象物インターフェース (Product or Service)
 */
export type IGood<T extends IGoodType> =
    /**
     * 口座タイプの場合
     */
    T extends AccountGoodType ? IAccount :
    /**
     * 予約タイプの場合
     */
    T extends chevre.reservationType ? IReservation<T> :
    any;

/**
 * 所有対象物インターフェース(対象物詳細有)
 */
export type IGoodWithDetail<T extends IGoodType> =
    /**
     * 口座タイプの場合
     */
    T extends AccountGoodType ? pecorino.account.IAccount :
    /**
     * 予約タイプの場合
     */
    T extends chevre.reservationType ? IReservationWithDetail<T> :
    any;

/**
 * 所有者インターフェース
 */
export type IOwner = chevre.seller.ISeller | IPerson;

export type OwnershipInfoType = 'OwnershipInfo';

/**
 * 所有権インターフェース
 */
export interface IOwnershipInfo<T extends IGood<IGoodType> | IGoodWithDetail<IGoodType>> {
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
    typeOf: string;
    identifier?: {
        $eq?: string;
    };
    id?: string;
    ids?: string[];
    issuedThrough?: {
        id?: {
            $eq?: string;
        };
    };
    /**
     * 口座タイプ
     */
    accountType?: string;
    /**
     * 口座番号
     */
    accountNumber?: string;
    /**
     * 口座番号
     */
    accountNumbers?: string[];
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
