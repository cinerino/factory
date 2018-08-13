import { IOwnershipInfo } from '../../../ownershipInfo';
import { ProgramMembershipType } from '../../../programMembership';
import * as UnRegisterActionFactory from '../unRegister';

/**
 * 会員プログラム登録解除アクションの対象は、会員プログラムに対する所有権
 */
export type IObject = IOwnershipInfo<ProgramMembershipType>;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes extends UnRegisterActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}
/**
 * 会員プログラム登録解除アクションインターフェース
 */
export type IAction = UnRegisterActionFactory.IAction<IAttributes>;
