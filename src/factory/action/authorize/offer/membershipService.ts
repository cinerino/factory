import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { IAcceptedOffer, IServiceOutput } from '../../../order';
import PriceCurrency from '../../../priceCurrency';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

import * as chevre from '../../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export import IService = chevre.service.IService;
export type IObject = IAcceptedOffer<IService>[];
export type IResultAcceptedOffer = IAcceptedOffer<IServiceOutput>[];
export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
    acceptedOffers: IResultAcceptedOffer;
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
 * メンバーシップオファー承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
