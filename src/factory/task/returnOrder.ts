import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

import * as chevre from '../../chevre';

export type IData = chevre.action.transfer.returnAction.order.IAttributes;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ReturnOrder;
    data: IData;
}
/**
 * 注文返品タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
