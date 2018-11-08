import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../../action';
import { IUnauthorizedCardOfMember, IUncheckedCardRaw, IUncheckedCardTokenized } from '../../../paymentMethod/paymentCard/creditCard';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeAnyPaymentFactory from './any';

/**
 * クレジットカード承認アクションに必要なクレジットカード情報インターフェース
 */
export type ICreditCard = IUncheckedCardRaw | IUncheckedCardTokenized | IUnauthorizedCardOfMember;
/**
 * オーソリ対象インターフェース
 */
export interface IObject extends AuthorizeAnyPaymentFactory.IObject<PaymentMethodType.CreditCard> {
    typeOf: PaymentMethodType.CreditCard;
    /**
     * オーダーID
     */
    orderId: string;
    /**
     * 支払い方法
     */
    method: GMO.utils.util.Method;
    /**
     * クレジットカード情報
     */
    creditCard: ICreditCard;
}
export interface IResult extends AuthorizeAnyPaymentFactory.IResult<PaymentMethodType.CreditCard> {
    entryTranArgs: GMO.services.credit.IEntryTranArgs;
    entryTranResult: GMO.services.credit.IEntryTranResult;
    execTranArgs: GMO.services.credit.IExecTranArgs;
    execTranResult: GMO.services.credit.IExecTranResult;
}
export type IError = any;
/**
 * クレジットカード承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeAnyPaymentFactory.IAttributes<PaymentMethodType.CreditCard> {
    object: IObject;
    result?: IResult;
    error?: IError;
}
/**
 * クレジットカード承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
