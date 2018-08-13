import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    transactionId: string;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.PlaceOrder;
    data: IData;
}
/**
 * 注文受付タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
