import * as ActionFactory from '../../action';
import ActionType from '../../actionType';

import * as chevre from '../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IObject = any;
export type IPurpose = chevre.order.ISimpleOrder;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.ConfirmAction, TObject, TResult> {
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * 確定アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
