import { IAttributes as IPayActionAttributes } from '../action/interact/confirm/pay';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export type IData = IPayActionAttributes;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ConfirmPay;
    data: IData;
}
/**
 * 決済タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
