import { IAcceptedOffer as IOrderAcceptedOffer } from '../../../order';
import { IProgramMembership } from '../../../programMembership';
import * as RegisterActionFactory from '../register';

export type IAcceptedOffer = IOrderAcceptedOffer<IProgramMembership>;
export type IObject = IAcceptedOffer | IProgramMembership;

export type IResult = any;

// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}

export interface IAttributes extends RegisterActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * 会員プログラム登録アクションインターフェース
 */
export type IAction = RegisterActionFactory.IAction<IAttributes>;
