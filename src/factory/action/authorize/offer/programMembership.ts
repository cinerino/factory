import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import { IAcceptedOffer } from '../../../order';
import PriceCurrency from '../../../priceCurrency';
import { IProgramMembership } from '../../../programMembership';
import TransactionType from '../../../transactionType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 承認アクション対象
 */
export type IObject = IAcceptedOffer<IProgramMembership>;

/**
 * 承認アクション結果
 */
export interface IResult {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: PriceCurrency;
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
 * 会員プログラムオファー承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
