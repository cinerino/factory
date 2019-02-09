import * as pecorino from '@pecorino/factory';

import AccountType from './accountType';
import * as OrganizationFactory from './organization';
import OrganizationType from './organizationType';
import { IPerson } from './person';
import { IProgramMembership, ProgramMembershipType } from './programMembership';
import SortType from './sortType';

import * as chevre from '../chevre';

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
     */
    id: string;
    /**
     * 予約番号
     */
    reservationNumber: string;
}

/**
 * 所有対象物のタイプ
 */
export type IGoodType = chevre.reservationType | ProgramMembershipType | AccountGoodType;

/**
 * 所有対象物インタエーフェース (Product or Service)
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
 * 所有対象物インタエーフェース(対象物詳細有)
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
    T extends chevre.reservationType ? chevre.reservation.event.IReservation<chevre.event.screeningEvent.IEvent> :
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
    identifier: any;
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
export type ITypeOfGoodSearchConditions<T extends IGoodType> =
    /**
     * 口座タイプの場合
     */
    T extends AccountGoodType ? {
        typeOf: AccountGoodType;
        accountType: AccountType;
        accountNumber?: string;
        accountNumbers?: string[];
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
        id?: string;
        ids?: string[];
    } :
    any;

/**
 * 所有権検索条件インターフェース
 */
export interface ISearchConditions<T extends IGoodType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
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
