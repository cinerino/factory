import * as pecorino from '@pecorino/factory';

import AccountType from './accountType';
import * as OrganizationFactory from './organization';
import OrganizationType from './organizationType';
import { IPerson } from './person';
import { IProgramMembership, ProgramMembershipType } from './programMembership';
import { IProject } from './project';
import { Identifier as WebAPIIdentifier, IService as IWebAPI } from './service/webAPI';
import SortType from './sortType';

import * as chevre from '../chevre';

export type IBookingService = IWebAPI<WebAPIIdentifier>;

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
export interface IAccount<T extends AccountType> {
    typeOf: AccountGoodType.Account;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber: string;
}

/**
 * 予約インターフェース
 */
export interface IReservation<T extends chevre.reservationType> {
    typeOf: T;
    /**
     * 予約ID
     * EventReservationの場合、必ず存在します
     */
    id?: string;
    /**
     * 予約番号
     * EventReservationの場合、必ず存在します
     */
    reservationNumber?: string;
    /**
     * ブッキングサービス(API)
     */
    bookingService?: IBookingService;
}

export type IReservationWithDetail<T extends chevre.reservationType> =
    IReservation<T> & chevre.reservation.IReservation<T>;

/**
 * 所有対象物のタイプ
 */
export type IGoodType = chevre.reservationType | ProgramMembershipType | AccountGoodType;

/**
 * 所有対象物インターフェース (Product or Service)
 */
export type IGood<T extends IGoodType> =
    /**
     * 口座タイプの場合
     */
    T extends AccountGoodType ? IAccount<AccountType> :
    /**
     * 会員プログラムタイプの場合
     */
    T extends ProgramMembershipType ? IProgramMembership :
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
    T extends AccountGoodType ? pecorino.account.IAccount<AccountType> :
    /**
     * 会員プログラムタイプの場合
     */
    T extends ProgramMembershipType ? IProgramMembership :
    /**
     * 予約タイプの場合
     */
    T extends chevre.reservationType ? IReservationWithDetail<T> :
    any;

/**
 * 所有者インターフェース
 */
export type IOwner = OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>> | IPerson;

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
 * 所有権識別タイプ
 */
export type Identifier<T extends IGoodType> =
    /**
     * 口座タイプの場合
     */
    T extends AccountGoodType ? {
        typeOf: AccountGoodType;
        accountType: AccountType;
        accountNumber: string;
    } :
    /**
     * 会員プログラムタイプの場合
     */
    T extends ProgramMembershipType ? any :
    /**
     * 予約タイプの場合
     */
    T extends chevre.reservationType ? {
        typeOf: chevre.reservationType;
        id: string;
    } :
    any;

/**
 * 所有対象物検索条件インターフェース
 */
export interface ITypeOfGoodSearchConditions<T extends IGoodType> {
    typeOf: T;
    /**
     * 予約の場合、予約ID
     * 会員プログラムの場合、プログラムID
     */
    id?: string;
    /**
     * 予約の場合、予約ID
     * 会員プログラムの場合、プログラムID
     */
    ids?: string[];
    /**
     * 口座の場合、口座タイプ
     */
    accountType?: AccountType;
    /**
     * 口座の場合、口座番号
     */
    accountNumber?: string;
    /**
     * 口座の場合、口座番号
     */
    accountNumbers?: string[];
}

/**
 * 所有権検索条件インターフェース
 */
export interface ISearchConditions<T extends IGoodType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { ids?: string[] };
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
    typeOfGood?: ITypeOfGoodSearchConditions<T>;
}
