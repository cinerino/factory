import { IAcceptedOffer as IOrderAcceptedOffer } from '../../../order';
import { IProgramMembership } from '../../../programMembership';
import { IAttributes as IOrderProgramMembershipTaskAttributes } from '../../../task/orderProgramMembership';
import * as RegisterActionFactory from '../register';

export type IAcceptedOffer = IOrderAcceptedOffer<IProgramMembership>;
export type IObject = IProgramMembership;
export type IResult = any;

export interface IPotentialActions {
    /**
     * 次回のメンバーシップ注文タスク
     */
    orderProgramMembership?: IOrderProgramMembershipTaskAttributes[];
}

export interface IAttributes extends RegisterActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * メンバーシップ登録アクションインターフェース
 */
export type IAction = RegisterActionFactory.IAction<IAttributes>;
