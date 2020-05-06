import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../../action';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeAnyPaymentFactory from './any';

import * as chevre from '../../../../chevre';

export import IUnauthorizedCardOfMember = chevre.paymentMethod.paymentCard.creditCard.IUnauthorizedCardOfMember;
export import IUncheckedCardRaw = chevre.paymentMethod.paymentCard.creditCard.IUncheckedCardRaw;
export import IUncheckedCardTokenized = chevre.paymentMethod.paymentCard.creditCard.IUncheckedCardTokenized;

/**
 * クレジットカード決済承認アクションに必要なクレジットカード情報インターフェース
 */
export type ICreditCard = IUncheckedCardRaw | IUncheckedCardTokenized | IUnauthorizedCardOfMember;

/**
 * クレジットカード決済承認対象インターフェース
 */
export interface IObject extends AuthorizeAnyPaymentFactory.IObject<PaymentMethodType.CreditCard> {
    typeOf: PaymentMethodType.CreditCard;
    /**
     * GMOオーダーID
     * 未指定であれば自動生成されます
     */
    orderId?: string;
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
 * クレジットカード決済承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeAnyPaymentFactory.IAttributes<PaymentMethodType.CreditCard> {
    object: IObject;
    result?: IResult;
    error?: IError;
}

/**
 * クレジットカード決済承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
