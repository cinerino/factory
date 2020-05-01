import * as PaymentMethodFactory from '../../paymentMethod';
import PaymentMethodType from '../../paymentMethodType';
import { IPaymentCard } from '../paymentCard';

export type IServiceOutput = any;

/**
 * プリペイドカードインターフェース
 */
export interface IPrepaidCard extends IPaymentCard {
    typeOf: PaymentMethodType.PrepaidCard;
    /**
     * 口座番号
     */
    identifier: string;
    /**
     * アクセスコード
     */
    accessCode: string;
    /**
     * ムビチケ利用対象座席予約
     */
    serviceOutput: IServiceOutput;
    /**
     * いつまで有効か
     */
    validThrough?: Date;
}

/**
 * 検索条件インターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface ISearchConditions extends PaymentMethodFactory.ISearchConditions {
    // serviceTypes?: string[];
}
