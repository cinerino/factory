import { IExtendId } from '../autoGenerated';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    project?: IProject;
    transactionId: string;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.CancelCreditCard;
    data: IData;
}

/**
 * クレジットカード承認解除タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
