import * as chevre from '@chevre/factory';
import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import OrderStatus from './orderStatus';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';
import { IIdentifier, IPerson, IProfile } from './person';
import PersonType from './personType';
import PriceCurrency from './priceCurrency';
import SortType from './sortType';

export type TypeOf = 'Order';
/**
 * 決済方法インターフェース
 */
export interface IPaymentMethod<T extends PaymentMethodType> {
    /**
     * 決済方法タイプ
     */
    typeOf: T;
    /**
     * 決済方法名
     */
    name: string;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
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
/**
 * 供給アイテムインターフェース
 */
export type IItemOffered = chevre.reservation.event.IReservation<chevre.event.screeningEvent.IEvent>;
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
    identifier?: string;
    name: string;
    legalName?: IMultilingualString;
    typeOf: OrganizationType;
    telephone?: string;
    url?: string;
}
/**
 * 購入者インターフェース
 */
export type ICustomer = IPerson & IProfile & {
    name: string;
};
/**
 * 注文インターフェース
 */
export interface IOrder {
    /**
     * object type
     */
    typeOf: TypeOf;
    /**
     * Organization or Person
     * The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Amazon.com").
     */
    seller: ISeller;
    /**
     * Person or Organization
     * Party placing the order.
     */
    customer: ICustomer;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber: number;
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
     * Offer
     * The offers included in the order.Also accepts an array of objects.
     */
    acceptedOffers: IAcceptedOffer<IItemOffered>[];
    /**
     * payment methods
     */
    paymentMethods: IPaymentMethod<PaymentMethodType>[];
    /**
     * discount infos
     */
    discounts: IDiscount[];
    /**
     * URL	(recommended for confirmation cards/ Search Answers)
     * URL of the Order, typically a link to the merchant's website where the user can retrieve further details about an order.
     */
    url: string;
    /**
     * OrderStatus	(recommended for confirmation cards/ Search Answers)
     * The current status of the order.
     */
    orderStatus: OrderStatus;
    /**
     * Date order was placed.
     */
    orderDate: Date;
    /**
     * Was the offer accepted as a gift for someone other than the buyer.
     */
    isGift: boolean;
}
/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    orderDate?: SortType;
    orderNumber?: SortType;
    price?: SortType;
}
/**
 * 注文検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    /**
     * 販売者条件
     */
    seller?: {
        typeOf: OrganizationType;
        /**
         * 販売者IDリスト
         */
        ids?: string[];
    };
    /**
     * 購入者条件
     */
    customer?: {
        typeOf: PersonType;
        ids?: string[];
        identifiers?: IIdentifier;
        /**
         * 購入者会員番号リスト
         */
        membershipNumbers?: string[];
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
     * 注文日時(から)
     */
    orderDateFrom: Date;
    /**
     * 注文日時(まで)
     */
    orderDateThrough: Date;
    /**
     * 確認番号リスト
     */
    confirmationNumbers?: string[];
    /**
     * どのイベントに対する予約を注文したか
     */
    reservedEventIds?: string[];
    /**
     * 決済方法
     */
    paymentMethods?: {
        typeOfs?: PaymentMethodType[];
        paymentMethodIds?: string[];
    };
}
