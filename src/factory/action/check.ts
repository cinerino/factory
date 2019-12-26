import * as ActionFactory from '../action';
import ActionType from '../actionType';

export type IObject = any;
export type IResult = any;
// export type IPurpose = any;
export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<ActionType.CheckAction, TObject, TResult> {
    // purpose: IPurpose;
}
/**
 * 確認アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
