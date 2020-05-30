import { IParticipant } from './action';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import OrderStatus from './orderStatus';
import { IProject } from './organization/project';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';
import { IIdentifier as IPersonIdentifier, IPerson } from './person';
import PersonType from './personType';
import PriceCurrency from './priceCurrency';
import { IProgramMembership } from './programMembership';
import { IPropertyValue } from './propertyValue';
import SortType from './sortType';
import { IThing } from './thing';

import * as chevre from '../chevre';

export type TypeOf = 'Order';
export type AvailablePaymentMethodType = PaymentMethodType | string;

/**
 * 決済方法インターフェース
 */
export interface IPaymentMethod<T extends AvailablePaymentMethodType> {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 決済方法タイプ
     */
    typeOf: T;
    /**
     * 決済方法名称
     */
    name: string;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: chevre.monetaryAmount.IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty: IPropertyValue<string>[];
}

/**
 * 割引インターフェース
 */
export interface IDiscount {
    /**
     * 割引タイプ
     */
    typeOf: string;
    name: string;
    /**
     * Any discount applied.
     */
    discount: number;
    /**
     * Code used to redeem a discount.
     */
    discountCode: string;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the discount.
     */
    discountCurrency: string;
}

export type IReservation = chevre.reservation.IReservation<chevre.reservationType.EventReservation>;
export import IMonetaryAmount = chevre.monetaryAmount.IMonetaryAmount;
export import IPaymentCard = chevre.paymentMethod.paymentCard.IPaymentCard;

/**
 * 供給アイテムインターフェース
 */
export type IItemOffered = IMonetaryAmount | IReservation | IProgramMembership | IPaymentCard;

/**
 * offer interface
 * 供給インターフェース
 */
export interface IAcceptedOffer<T extends IItemOffered> extends IOffer {
    /**
     * オファー対象アイテム
     */
    itemOffered: T;
    /**
     * 販売者
     */
    seller: {
        typeOf: OrganizationType | PersonType;
        name: string;
    };
}

/**
 * 販売者インターフェース
 */
export interface ISeller {
    id: string;
    identifier?: any;
    name: string;
    legalName?: IMultilingualString;
    typeOf: OrganizationType;
    telephone?: string;
    url?: string;
}

/**
 * 顧客インターフェース
 */
export type ICustomer = IPerson;

/**
 * 返品者インターフェース
 */
export type IReturner = IParticipant;

export type IIdentifier = IPropertyValue<string>[];

export interface ISimpleOrder extends IThing {
    project: IProject;
    /**
     * object type
     */
    typeOf: TypeOf;
    /**
     * The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Amazon.com").
     */
    seller: ISeller;
    /**
     * Party placing the order.
     */
    customer: ICustomer;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber: string;
    /**
     * The merchant- specific identifier for the transaction.
     */
    orderNumber: string;
    /**
     * The total price of the entire transaction.
     */
    price: number;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the order price.
     */
    priceCurrency: PriceCurrency;
    /**
     * Date order was placed.
     */
    orderDate: Date;
}

/**
 * 注文インターフェース
 * @see https://schema.org/Order
 */
export interface IOrder extends ISimpleOrder {
    /**
     * Offer
     * The offers included in the order.Also accepts an array of objects.
     */
    acceptedOffers: IAcceptedOffer<IItemOffered>[];
    /**
     * Date order was returned.
     */
    dateReturned?: Date;
    /**
     * discount infos
     */
    discounts: IDiscount[];
    /**
     * The identifier property represents any kind of identifier for any kind of Thing
     */
    identifier?: IIdentifier;
    /**
     * Was the offer accepted as a gift for someone other than the buyer.
     */
    isGift?: boolean;
    /**
     * OrderStatus	(recommended for confirmation cards/ Search Answers)
     * The current status of the order.
     */
    orderStatus: OrderStatus;
    /**
     * payment methods
     */
    paymentMethods: IPaymentMethod<AvailablePaymentMethodType>[];
    /**
     * Returner
     */
    returner?: IReturner;
    /**
     * URL	(recommended for confirmation cards/ Search Answers)
     * URL of the Order, typically a link to the merchant's website where the user can retrieve further details about an order.
     */
    url?: string;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    orderDate?: SortType;
    // orderNumber?: SortType;
    // price?: SortType;
}

/**
 * 予約対象検索条件インターフェース
 */
export interface IReservationForSearchConditions {
    typeOfs?: chevre.eventType[];
    ids?: string[];
    /**
     * イベント名称
     */
    name?: string;
    /**
     * 開催中 from
     */
    inSessionFrom?: Date;
    /**
     * 開催中 through
     */
    inSessionThrough?: Date;
    /**
     * 開始日時 from
     */
    startFrom?: Date;
    /**
     * 開始日時 through
     */
    startThrough?: Date;
    /**
     * イベント開催場所
     */
    location?: {
        branchCodes?: string[];
    };
    /**
     * 親イベント情報
     */
    superEvent?: {
        ids?: string[];
        location?: {
            /**
             * 親イベントが実施される場所の枝番号
             */
            branchCodes?: string[];
        };
        workPerformed?: {
            /**
             * イベントで上演される作品識別子リスト
             */
            identifiers?: string[];
        };
    };
}

export interface ISellerSearchConditions {
    typeOf?: OrganizationType;
    /**
     * 販売者IDリスト
     */
    ids?: string[];
}

export interface ICustomerSearchConditions {
    typeOf?: PersonType;
    ids?: string[];
    identifiers?: IPersonIdentifier;
    identifier?: {
        $all?: IPersonIdentifier;
        $in?: IPersonIdentifier;
    };
    additionalProperty?: {
        $all?: IPersonIdentifier;
        $in?: IPersonIdentifier;
    };
    memberOf?: {
        membershipNumber?: {
            $eq?: string;
            $in?: string[];
        };
    };
    givenName?: string | {
        $eq?: string;
        $regex?: string;
    };
    familyName?: string | {
        $eq?: string;
        $regex?: string;
    };
    email?: string | {
        $eq?: string;
        $regex?: string;
    };
    telephone?: string | {
        $eq?: string;
        $regex?: string;
    };
}

export interface IPaymentMethodsSearchConditions {
    accountIds?: string[];
    typeOfs?: AvailablePaymentMethodType[];
    paymentMethodIds?: string[];
}

export interface IAcceptedOffersSearchConditions {
    itemOffered?: {
        typeOfs?: string[];
        /**
         * 予約IDリスト
         */
        ids?: string[];
        /**
         * 予約対象
         */
        reservationFor?: IReservationForSearchConditions;
        /**
         * 予約番号
         */
        reservationNumbers?: string[];
    };
}

/**
 * 注文検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
        ids?: string[];
    };
    /**
     * 販売者条件
     */
    seller?: ISellerSearchConditions;
    /**
     * 顧客条件
     */
    customer?: ICustomerSearchConditions;
    /**
     * 識別子条件
     */
    identifier?: {
        $all?: IIdentifier;
        $in?: IIdentifier;
    };
    /**
     * 注文番号リスト
     */
    orderNumbers?: string[];
    /**
     * 注文ステータスリスト
     */
    orderStatuses?: OrderStatus[];
    /**
     * 注文日時
     */
    orderDate?: {
        /**
         * 注文日時(まで)
         */
        $gte?: Date;
        /**
         * 注文日時(から)
         */
        $lte?: Date;
    };
    /**
     * 注文日時(から)
     * @deprecated Use orderDate.$gte
     */
    orderDateFrom?: Date;
    /**
     * 注文日時(まで)
     * @deprecated Use orderDate.$lte
     */
    orderDateThrough?: Date;
    /**
     * 確認番号リスト
     */
    confirmationNumbers?: string[];
    /**
     * 決済方法
     */
    paymentMethods?: IPaymentMethodsSearchConditions;
    /**
     * 注文アイテム条件
     */
    acceptedOffers?: IAcceptedOffersSearchConditions;
    price?: {
        $gte?: number;
        $lte?: number;
    };
}
