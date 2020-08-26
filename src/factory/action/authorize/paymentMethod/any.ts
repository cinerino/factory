import * as GMO from '@motionpicture/gmo-service';
import * as mvtkapi from '@movieticket/reserve-api-nodejs-client';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import PaymentMethodType from '../../../paymentMethodType';
import PaymentStatusType from '../../../paymentStatusType';
import { IPropertyValue } from '../../../propertyValue';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

import * as chevre from '../../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ResultType {
    Payment = 'Payment'
}

/**
 * 汎用決済方法タイプ
 */
export type IAnyPaymentMethod = PaymentMethodType | string;

/**
 * 進行中取引インターフェース
 */
export type IPendingTransaction = chevre.transaction.moneyTransfer.ITransaction;

export interface IAccount {
    /**
     * 口座タイプ
     */
    accountType: string;
    /**
     * 口座番号
     */
    accountNumber: string;
}

/**
 * トークン化された口座インターフェース
 */
export type ITokenizedAccount = string;

/**
 * 転送元口座
 */
export type IFromAccount = IAccount | ITokenizedAccount;

/**
 * 転送先口座
 */
export type IToAccount = IAccount;

export type IPaymentCard = chevre.action.transfer.moneyTransfer.IPaymentCard;

/**
 * 決済トークン
 */
export type ITokenizedPaymentCard = string;

/**
 * 転送元インターフェース
 */
export type IFromLocation = IPaymentCard | ITokenizedPaymentCard;

/**
 * 転送先インターフェース
 */
export type IToLocation = IPaymentCard;

export type IPurchaseNumberAuthIn = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthIn;
export type IPurchaseNumberAuthResult = mvtkapi.mvtk.services.auth.purchaseNumberAuth.IPurchaseNumberAuthResult;
export type ISeatInfoSyncIn = mvtkapi.mvtk.services.seat.seatInfoSync.ISeatInfoSyncIn;
export type ISeatInfoSyncResult = mvtkapi.mvtk.services.seat.seatInfoSync.ISeatInfoSyncResult;

export import IUnauthorizedCardOfMember = chevre.paymentMethod.paymentCard.creditCard.IUnauthorizedCardOfMember;
export import IUncheckedCardRaw = chevre.paymentMethod.paymentCard.creditCard.IUncheckedCardRaw;
export import IUncheckedCardTokenized = chevre.paymentMethod.paymentCard.creditCard.IUncheckedCardTokenized;

/**
 * クレジットカード決済承認アクションに必要なクレジットカード情報インターフェース
 */
export type ICreditCard = IUncheckedCardRaw | IUncheckedCardTokenized | IUnauthorizedCardOfMember;

export import IMovieTicket = chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket;

/**
 * 承認対象インターフェース
 */
export interface IObject {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId?: string;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
    /**
     * The amount of money.
     */
    amount: number;
    /**
     * 説明
     */
    description?: string;
    /**
     * 決済方法名称
     * 未指定であればデフォルト値が使用されます
     */
    name?: string;
    /**
     * 決済方法
     */
    paymentMethod: IAnyPaymentMethod;
    /**
     * 決済ID
     */
    paymentMethodId?: string;
    typeOf: ResultType;

    /**
     * 転送元口座(Account決済)
     * 出金取引、転送取引の場合指定
     */
    fromAccount?: IFromAccount;
    /**
     * 転送先口座(Account決済)
     * 入金取引、転送取引の場合指定
     */
    toAccount?: IToAccount;
    /**
     * 取引説明(Account決済)
     */
    notes?: string;

    /**
     * 転送元(PaymentCard決済)
     */
    fromLocation?: IFromLocation;
    /**
     * 転送先(PaymentCard決済)
     */
    toLocation?: IToLocation;

    /**
     * 支払い方法(CreditCard決済)
     */
    method?: GMO.utils.util.Method;
    /**
     * クレジットカード情報(CreditCard決済)
     */
    creditCard?: ICreditCard;

    /**
     * (MovieTicket決済)
     */
    movieTickets?: IMovieTicket[];
}

export interface IResult {
    /**
     * The identifier for the account the payment will be applied to.
     */
    accountId: string;
    /**
     * The amount of money.
     */
    amount: number;
    /**
     * 決済方法
     */
    paymentMethod: IAnyPaymentMethod;
    /**
     * 決済ID
     */
    paymentMethodId: string;
    /**
     * 決済ステータス
     */
    paymentStatus: PaymentStatusType;
    /**
     * 決済方法名称
     */
    name: string;
    /**
     * The total amount due.
     */
    totalPaymentDue?: chevre.monetaryAmount.IMonetaryAmount;
    /**
     * 追加特性
     */
    additionalProperty?: IPropertyValue<string>[];
    typeOf: ResultType;

    /**
     * 転送元口座(Account決済)
     */
    fromAccount?: IAccount;
    /**
     * 転送先口座(Account決済)
     */
    toAccount?: IToAccount;
    /**
     * 進行中取引(Account決済)
     */
    pendingTransaction?: IPendingTransaction;

    /**
     * 転送元(PaymentCard決済)
     */
    fromLocation?: IFromLocation;
    /**
     * 転送先(PaymentCard決済)
     */
    toLocation?: IToLocation;

    /**
     * CreditCard決済の場合
     */
    entryTranArgs?: GMO.services.credit.IEntryTranArgs;
    /**
     * CreditCard決済の場合
     */
    entryTranResult?: GMO.services.credit.IEntryTranResult;
    /**
     * CreditCard決済の場合
     */
    execTranArgs?: GMO.services.credit.IExecTranArgs;
    /**
     * CreditCard決済の場合
     */
    execTranResult?: GMO.services.credit.IExecTranResult;

    /**
     * 承認時のムビチケ認証リクエスト(MovieTicket決済)
     */
    purchaseNumberAuthIn?: IPurchaseNumberAuthIn;
    /**
     * 承認時のムビチケ認証レスポンス(MovieTicket決済)
     */
    purchaseNumberAuthResult?: IPurchaseNumberAuthResult;
    /**
     * 着券済での承認時のムビチケ着券リクエスト(MovieTicket決済)
     */
    seatInfoSyncIn?: ISeatInfoSyncIn;
    /**
     * 着券済での承認時のムビチケ着券レスポンス(MovieTicket決済)
     */
    seatInfoSyncResult?: ISeatInfoSyncResult;
}

export interface IPurpose {
    typeOf: TransactionType;
    id: string;
}

export enum ServiceIdentifier {
    Chevre = 'Chevre',
    GMO = 'GMO',
    MovieTicket = 'MovieTicket'
}

export interface IService {
    typeOf: 'WebAPI';
    identifier: ServiceIdentifier;
}

export type IInstrument = IService;

/**
 * 決済承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    instrument?: IInstrument;
    recipient: IRecipient;
    purpose: IPurpose;
}

/**
 * 決済承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
