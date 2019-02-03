import { IMonetaryAmount } from './monetaryAmount';
import { IAcceptedOffer, ICustomer, IOrder } from './order';
import { IAttributes as IOrganizationAttributes, IOrganization } from './organization';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';
import PaymentStatusType from './paymentStatusType';
import { IIdentifier, IPerson } from './person';
import PersonType from './personType';
import SortType from './sortType';

export type IBroker = IOrganization<IOrganizationAttributes<OrganizationType>> | IPerson;
export type IProvider = IOrganization<IOrganizationAttributes<OrganizationType>> | IPerson;

export interface IReferenceOrder extends IOrder {
    acceptedOffers: IAcceptedOffer<any>[];
}

/**
 * 請求書インターフェース
 * @see https://schema.org/Invoice
 */
export interface IInvoice {
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
    paymentMethod: PaymentMethodType;
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
    referencesOrder: IOrder;
    /**
     * The date the invoice is scheduled to be paid.
     */
    scheduledPaymentDate?: Date;
    /**
     * The total amount due.
     */
    totalPaymentDue?: IMonetaryAmount;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    accountId?: SortType;
    confirmationNumber?: SortType;
    paymentDueDate?: SortType;
    paymentMethod?: SortType;
    paymentMethodId?: SortType;
    paymentStatus?: SortType;
    'referencesOrder.orderNumber'?: SortType;
}

export interface ICustomerSearchConditions {
    typeOf: PersonType;
    ids?: string[];
    identifiers?: IIdentifier;
    /**
     * 購入者会員番号リスト
     */
    membershipNumbers?: string[];
    /**
     * 電話番号
     */
    telephone?: string;
}

export interface IReferencesOrderSearchConditions {
    orderNumbers?: string[];
}

/**
 * 請求書検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    accountIds?: string[];
    confirmationNumbers?: string[];
    customer?: ICustomerSearchConditions;
    paymentMethods?: PaymentMethodType[];
    paymentMethodIds?: string[];
    paymentStatuses?: PaymentStatusType[];
    referencesOrder?: IReferencesOrderSearchConditions;
}
