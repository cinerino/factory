import ItemAvailability from './itemAvailability';
import IMultilingualString from './multilingualString';
import PaymentMethodType from './paymentMethodType';
import PriceCurrency from './priceCurrency';
import { IPriceSpecification } from './priceSpecification';
import PriceSpecificationType from './priceSpecificationType';
import { IPropertyValue } from './propertyValue';
import { IQuantitativeValue } from './quantitativeValue';
import { Identifier as WebAPIIdentifier, IService as IWebAPI } from './service/webAPI';
import { UnitCode } from './unitCode';

export type OfferType = 'Offer';

export type IOfferedThrough = IWebAPI<WebAPIIdentifier>;

/**
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 * @see https://schema.org/Offer
 */
export interface IOffer {
    typeOf: OfferType;
    id?: string;
    name?: string | IMultilingualString;
    alternateName?: string | IMultilingualString;
    description?: string | IMultilingualString;
    /**
     * The payment method(s) accepted by seller for this offer.
     */
    acceptedPaymentMethod?: PaymentMethodType[];
    /**
     * The availability of this item—for example In stock, Out of stock, Pre-order, etc.
     */
    availability?: ItemAvailability;
    /**
     * The end of the availability of the product or service included in the offer.
     */
    availabilityEnds?: Date;
    /**
     * The beginning of the availability of the product or service included in the offer.
     */
    availabilityStarts?: Date;
    /**
     * The place(s) from which the offer can be obtained (e.g. store locations).
     */
    availableAtOrFrom?: any;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     */
    category?: any;
    /**
     * オファーの有効な顧客タイプ
     */
    eligibleCustomerType?: any;
    /**
     * オファーが有効となる期間
     */
    eligibleDuration?: IQuantitativeValue<UnitCode.Sec>;
    /**
     * オファーの有効となる数
     */
    eligibleQuantity?: IQuantitativeValue<UnitCode>;
    /**
     * オファーが有効となる地域
     */
    eligibleRegion?: any;
    /**
     * The item being offered.
     */
    itemOffered?: any;
    /**
     * オファー供給サービス
     */
    offeredThrough?: IOfferedThrough;
    /**
     * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
     */
    price?: number;
    /**
     * The currency (in 3-letter ISO 4217 format) of the price or a price component,
     * when attached to PriceSpecification and its subtypes.
     */
    priceCurrency: PriceCurrency;
    /**
     * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
     */
    priceSpecification?: IPriceSpecification<PriceSpecificationType>;
    /**
     * The date when the item becomes valid.
     */
    validFrom?: Date;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     */
    validThrough?: Date;
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IPropertyValue<any>[];
}
