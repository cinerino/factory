import * as chevre from '../chevre';
import * as SeatReservationOfferFactory from './offer/seatReservation';

export import seatReservation = SeatReservationOfferFactory;

export type IOfferedThrough = chevre.service.webAPI.IService<chevre.service.webAPI.Identifier>;

/**
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 * @see https://schema.org/Offer
 */
export interface IOffer extends chevre.offer.IOffer {
    /**
     * オファー供給サービス
     */
    offeredThrough?: IOfferedThrough;
}
