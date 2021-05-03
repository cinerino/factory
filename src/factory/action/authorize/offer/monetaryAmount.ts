import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';
import { IPaymentCard, IPendingTransaction } from '../../interact/confirm/moneyTransfer';

import * as chevre from '../../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IRequestBody = any;
export type IResponseBody = IPendingTransaction;

export interface IResult {
    price: number;
    priceCurrency: chevre.priceCurrency;
    requestBody?: IRequestBody;
    responseBody: IResponseBody;
}

export type IObject = chevre.order.IAcceptedOffer<chevre.monetaryAmount.IMonetaryAmount> & {
    toLocation: IPaymentCard;
    pendingTransaction?: IPendingTransaction;
};

export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}

export type IPurpose = ITransactionPurpose;

export type IError = any;

export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;
