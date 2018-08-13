import * as ActionFactory from '../../../action';
import * as AuthorizePointAwardActionFactory from '../../authorize/award/point';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 返却対象はポイントインセンティブ承認アクション
 */
export type IObject = AuthorizePointAwardActionFactory.IAttributes;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * ポイントインセンティブ返却アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
