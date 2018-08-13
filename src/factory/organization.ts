/**
 * 組織ファクトリー
 */
import IMultilingualString from './multilingualString';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';
import * as URLFactory from './url';

/**
 * GMOショップ情報インターフェース
 */
export interface IGMOInfo {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパス
     */
    shopPass: string;
}
export interface ICreditCardPaymentAccepted {
    /**
     * 決済方法タイプ
     */
    paymentMethodType: PaymentMethodType.CreditCard;
    /**
     * GMO情報
     */
    gmoInfo: IGMOInfo;
}
export interface IPointPaymentAccepted {
    /**
     * 決済方法タイプ
     */
    paymentMethodType: PaymentMethodType.Point;
    /**
     * 口座番号
     */
    accountNumber: string;
}
export interface IMocoinPaymentAccepted {
    /**
     * 決済方法タイプ
     */
    paymentMethodType: PaymentMethodType.Mocoin;
    /**
     * 口座番号
     */
    accountNumber: string;
}
/**
 * 利用可能決済インターフェース
 */
export type IPaymentAccepted<T extends PaymentMethodType> =
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentAccepted :
    T extends PaymentMethodType.Mocoin ? IMocoinPaymentAccepted :
    T extends PaymentMethodType.Point ? IPointPaymentAccepted :
    never;

/**
 * 組織インターフェース
 */
export interface IOrganization {
    id: string;
    identifier?: string;
    name: IMultilingualString;
    legalName?: IMultilingualString;
    typeOf: OrganizationType;
    location?: any;
    telephone?: string;
    url?: URLFactory.IURL;
    image?: string;
    paymentAccepted?: IPaymentAccepted<PaymentMethodType>[];
}
