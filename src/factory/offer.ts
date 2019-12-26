import * as chevre from '../chevre';
import * as SeatReservationOfferFactory from './offer/seatReservation';
import { IPriceSpecification } from './priceSpecification';
import PriceSpecificationType from './priceSpecificationType';
import { Identifier as WebAPIIdentifier, IService as IWebAPI } from './service/webAPI';

export import seatReservation = SeatReservationOfferFactory;

export type IOfferedThrough = IWebAPI<WebAPIIdentifier>;

/**
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 * @see https://schema.org/Offer
 */
export interface IOffer extends chevre.offer.IOffer {
    identifier?: any;
    /**
     * オファー供給サービス
     */
    offeredThrough?: IOfferedThrough;
    /**
     * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
     */
    priceSpecification?: IPriceSpecification<PriceSpecificationType>;
}
