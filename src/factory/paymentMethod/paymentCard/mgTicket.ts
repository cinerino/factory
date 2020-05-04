import * as PaymentMethodFactory from '../../paymentMethod';
import PaymentMethodType from '../../paymentMethodType';

import { IAttributes } from './movieTicket';

/**
 * ムビチケインターフェース
 */
export interface IMGTicket extends IAttributes {
    typeOf: PaymentMethodType.MGTicket;
}

/**
 * 検索条件インターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface ISearchConditions extends PaymentMethodFactory.ISearchConditions {
}
