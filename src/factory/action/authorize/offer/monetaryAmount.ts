import * as pecorino from '@pecorino/factory';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { IMonetaryAmount } from '../../../monetaryAmount';
import * as OrderFactory from '../../../order';
import PriceCurrency from '../../../priceCurrency';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';
import { IAccount } from '../../transfer/moneyTransfer';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IRequestBody = any;
export type IResponseBody<T extends string> = pecorino.transaction.deposit.ITransaction<T>;

export interface IResult<T extends string> {
    price: number;
    priceCurrency: PriceCurrency;
    requestEndpoint?: string;
    requestBody?: IRequestBody;
    responseBody: IResponseBody<T>;
}

export type IPendingTransaction<T extends string> = pecorino.transaction.ITransaction<pecorino.transactionType.Deposit, T>;

export type IObject<T extends string> = OrderFactory.IAcceptedOffer<IMonetaryAmount> & {
    toLocation: IAccount<T>;
    pendingTransaction?: IPendingTransaction<T>;
};

export interface ITransactionPurpose {
    typeOf: TransactionType;
    id: string;
}

export type IPurpose = ITransactionPurpose;

export type IError = any;

export interface IAttributes<T extends string> extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject<T>;
    purpose: IPurpose;
}

export type IAction<T extends string> = ActionFactory.IAction<IAttributes<T>>;
