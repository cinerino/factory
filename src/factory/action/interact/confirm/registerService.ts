import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';

import * as chevre from '../../../../chevre';

export type IAcceptedOffer = chevre.order.IAcceptedOffer<any>;
export type IObject = any;
export type IResult = any;

export type IPotentialActions = any;

export interface IAttributes extends ActionFactory.IAttributes<ActionType.ConfirmAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * サービス登録アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
