import * as chevre from '../../../../chevre';
import * as ActionFactory from '../../../action';
import * as ConfirmActionFactory from '../confirm';

export type IAgent = ActionFactory.IParticipant;
export type IObject = chevre.transaction.reserve.IConfirmParams & {
    typeOf: chevre.transactionType.Reserve;
};
// tslint:disable-next-line:no-empty-interface
export interface IResult {
}
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ConfirmActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    potentialActions?: IPotentialActions;
}
/**
 * 予約確定アクションインターフェース
 */
export type IAction = ConfirmActionFactory.IAction<IAttributes>;
