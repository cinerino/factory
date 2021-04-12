import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import PriceCurrency from '../../../priceCurrency';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

import * as chevre from '../../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export import IService = chevre.product.IProduct;
export type IObject = chevre.order.IAcceptedOffer<IService>[];
export type IResultAcceptedOffer = chevre.order.IAcceptedOffer<chevre.order.IServiceOutput>[];
export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
    acceptedOffers: IResultAcceptedOffer;
    requestBody?: any;
    responseBody: any;
}
export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}
export type IError = any;
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}

/**
 * プロダクトオファー承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
