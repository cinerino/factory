import * as PaymentMethodFactory from '../../paymentMethod';
import PaymentMethodType from '../../paymentMethodType';
import { IPaymentCard } from '../paymentCard';

import * as chevre from '../../../chevre';

/**
 * ムビチケインターフェース
 */
export interface IMovieTicket extends IPaymentCard {
    typeOf: PaymentMethodType.MovieTicket;
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
    /**
     * いつまで有効か
     */
    validThrough?: Date;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions extends PaymentMethodFactory.ISearchConditions {
    serviceTypes?: string[];
}
