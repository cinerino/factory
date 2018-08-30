import * as chevre from '@chevre/factory';
import * as pecorino from '@pecorino/factory';

import AccountType from './accountType';
import { IOrganization } from './organization';
import { IPerson } from './person';
import { IProgramMembership, ProgramMembershipType } from './programMembership';

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
     * 予約タイプの場合
     */
    T extends chevre.reservationType ? IReservation<T> :
    /**
     * 会員プログラムタイプの場合
     */
    T extends ProgramMembershipType ? IProgramMembership :
    never;
/**
 * 所有対象物インタエーフェース(対象物詳細有)
 */
export type IGoodWithDetail<T extends IGoodType> =
    /**
     * 口座タイプの場合
     */
    T extends AccountGoodType ? pecorino.account.IAccount<AccountType> :
    /**
     * 予約タイプの場合
     */
    T extends chevre.reservationType ? chevre.reservation.event.IReservation<chevre.event.screeningEvent.IEvent> :
    /**
     * 会員プログラムタイプの場合
     */
    T extends ProgramMembershipType ? IProgramMembership :
    never;
/**
 * 所有者インターフェース
 */
export type IOwner = IOrganization | IPerson;
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
     * identifier
     */
    identifier: string;
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
 * 所有権検索条件インターフェース
 */
export interface ISearchConditions<T extends IGoodType> {
    limit?: number;
    page?: number;
    /**
     * 所有権識別子
     */
    identifier?: string;
    /**
     * 所有対象物のタイプ
     */
    goodType: T;
    /**
     * 所有対象物
     */
    // typeOfGood?: {
    //     /**
    //      * どのイベント予約か
    //      */
    //     eventReservationFor?: {
    //         /**
    //          * イベントタイプ
    //          */
    //         typeOf: EventType;
    //         identifier: string;
    //     };
    // };
    /**
     * 所有者ID
     */
    ownedBy?: string;
    /**
     * いつの時点での所有か
     */
    ownedAt?: Date;
}
