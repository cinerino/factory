import * as chevre from '@chevre/factory';
import * as pecorino from '@pecorino/factory';

import AccountType from './accountType';
import { IOrganization } from './organization';
import { IPerson } from './person';
import { IProgramMembership, ProgramMembershipType } from './programMembership';

export interface IAccount {
    typeOf: pecorino.account.TypeOf;
    /**
     * 口座タイプ
     */
    accountType: AccountType;
    /**
     * 口座番号
     */
    accountNumber: string;
}
/**
 * 所有対象物のタイプ
 */
export type IGoodType = chevre.reservationType | ProgramMembershipType | pecorino.account.TypeOf;
/**
 * 所有対象物インタエーフェース (Product or Service)
 */
export type IGood<T extends IGoodType> =
    /**
     * 予約タイプの場合
     */
    T extends chevre.reservationType ? chevre.reservation.event.IReservation<chevre.event.screeningEvent.IEvent> :
    /**
     * 会員プログラムタイプの場合
     */
    T extends ProgramMembershipType ? IProgramMembership :
    /**
     * 口座タイプの場合
     */
    T extends pecorino.account.TypeOf ? IAccount :
    never;
/**
 * 所有者インターフェース
 */
export type IOwner = IOrganization | IPerson;
export type OwnershipInfoType = 'OwnershipInfo';
/**
 * 所有権インターフェース
 */
export interface IOwnershipInfo<T extends IGoodType> {
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
    typeOfGood: IGood<T>;
}
/**
 * 所有権検索条件インターフェース
 */
export interface ISearchConditions<T extends IGoodType> {
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
