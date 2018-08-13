import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    transactionId: string;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ReturnOrder;
    data: IData;
}
/**
 * 注文返品タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
