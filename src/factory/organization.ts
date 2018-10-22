import AccountType from './accountType';
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
/**
 * ムビチケショップ情報インターフェース
 */
export interface IMovieTicketInfo {
    /**
     * ムビチケ興行会社コード
     */
    kgygishCd: string;
    /**
     * ムビチケサイトコード
     */
    stCd: string;
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
export interface IAccountPaymentAccepted<T extends AccountType> {
    /**
     * 決済方法タイプ
     */
    paymentMethodType: PaymentMethodType.Account;
    /**
     * 口座タイプ
     */
    accountType: T;
    /**
     * 口座番号
     */
    accountNumber: string;
}
export interface IMovieTicketPaymentAccepted {
    /**
     * 決済方法タイプ
     */
    paymentMethodType: PaymentMethodType.MovieTicket;
    movieTicketInfo: IMovieTicketInfo;
}
/**
 * 利用可能決済インターフェース
 */
export type IPaymentAccepted<T extends PaymentMethodType> =
    T extends PaymentMethodType.Account ? IAccountPaymentAccepted<AccountType> :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentAccepted :
    T extends PaymentMethodType.Mocoin ? IMocoinPaymentAccepted :
    T extends PaymentMethodType.MovieTicket ? IMovieTicketPaymentAccepted :
    never;
export type POSType = 'POS';
/**
 * POSインターフェース
 */
export interface IPOS {
    typeOf: POSType;
    id: string;
    name: string;
}
export interface IAttributes<T extends OrganizationType> {
    /**
     * 組織タイプ
     */
    typeOf: T;
    identifier?: string;
    name: IMultilingualString;
    legalName?: IMultilingualString;
    location?: any;
    telephone?: string;
    url?: URLFactory.IURL;
    image?: string;
    paymentAccepted?: IPaymentAccepted<PaymentMethodType>[];
    /**
     * Points-of-Sales operated by the organization or person.
     */
    hasPOS?: IPOS[];
}
/**
 * 組織インターフェース
 */
export type IOrganization<T extends IAttributes<OrganizationType>> = T & {
    id: string;
};
