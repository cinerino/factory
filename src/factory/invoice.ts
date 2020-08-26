import { IAcceptedOffer, ICustomer, IOrder } from './order';
import { ISeller } from './organization';
import { IProject } from './organization/project';
import PaymentStatusType from './paymentStatusType';
import { IIdentifier, IPerson } from './person';
import PersonType from './personType';
import SortType from './sortType';

import * as chevre from '../chevre';

export type IBroker = ISeller | IPerson;
export type IProvider = ISeller | IPerson;

export interface IReferenceOrder extends IOrder {
    acceptedOffers: IAcceptedOffer<any>[];
}

/**
 * インボイスインターフェース
 * @see https://schema.org/Invoice
 */
export interface IInvoice {
    project: IProject;
    typeOf: 'Invoice';
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId: string;
    /**
     * The time interval used to compute the invoice.
     */
    billingPeriod?: string;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.
     * In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.
     * If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. Supersedes bookingAgent.
     */
    broker?: IBroker;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     */
    category?: string;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber?: string;
    /**
     * Party placing the order or paying the invoice.
     */
    customer?: ICustomer;
    /**
     * The minimum payment required at this time.
     */
    // minimumPaymentDue: string;
    /**
     * The date that payment is due. Supersedes paymentDue.
     */
    paymentDueDate?: Date;
    /**
     * The name of the credit card or other method of payment for the order.
     */
    paymentMethod: string;
    /**
     * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
     */
    paymentMethodId: string;
    /**
     * The status of payment; whether the invoice has been paid or not.
     */
    paymentStatus: PaymentStatusType;
    /**
     * The service provider, service operator, or service performer; the goods producer.
     * Another party (a seller) may offer those services or goods on behalf of the provider.
     * A provider may also serve as the seller. Supersedes carrier.
     */
    provider?: IProvider;
    /**
     * The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
     */
    referencesOrder: IReferenceOrder;
    /**
     * The date the invoice is scheduled to be paid.
     */
    scheduledPaymentDate?: Date;
    /**
     * The total amount due.
     */
    totalPaymentDue?: chevre.monetaryAmount.IMonetaryAmount;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    createdAt?: SortType;
}

export interface ICustomerSearchConditions {
    typeOf?: PersonType;
    ids?: string[];
    identifiers?: IIdentifier;
    /**
     * メールアドレス
     */
    email?: string;
    /**
     * 電話番号
     */
    telephone?: string;
    memberOf?: {
        /**
         * 会員番号
         */
        membershipNumbers?: string[];
    };
}

export interface IReferencesOrderSearchConditions {
    orderNumbers?: string[];
}

/**
 * インボイス検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
        ids?: string[];
    };
    createdFrom?: Date;
    createdThrough?: Date;
    accountIds?: string[];
    confirmationNumbers?: string[];
    customer?: ICustomerSearchConditions;
    paymentMethods?: string[];
    paymentMethodIds?: string[];
    paymentStatuses?: PaymentStatusType[];
    referencesOrder?: IReferencesOrderSearchConditions;
}
