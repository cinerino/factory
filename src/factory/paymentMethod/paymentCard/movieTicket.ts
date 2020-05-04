import * as PaymentMethodFactory from '../../paymentMethod';
import PaymentMethodType from '../../paymentMethodType';
import { IPaymentCard } from '../paymentCard';

import * as chevre from '../../../chevre';

export interface IAttributes extends IPaymentCard {
    /**
     * 購入管理番号(ムビチケ購入番号)
     */
    identifier: string;
    /**
     * pinコード(ムビチケ暗証番号)
     */
    accessCode: string;
    /**
     * 券種区分
     */
    serviceType: string;
    /**
     * ムビチケ利用対象座席予約
     */
    serviceOutput: {
        /**
         * 予約対象イベント
         */
        reservationFor: { typeOf: chevre.eventType.ScreeningEvent; id: string };
        /**
         * 予約チケット
         */
        reservedTicket: { ticketedSeat: chevre.reservation.ISeat<chevre.reservationType> };
    };
}

/**
 * ムビチケインターフェース
 */
export interface IMovieTicket extends IAttributes {
    typeOf: PaymentMethodType.MovieTicket;
}

/**
 * 検索条件インターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface ISearchConditions extends PaymentMethodFactory.ISearchConditions {
}
