import { IPurpose } from '../action/authorize/paymentMethod/any';
import { IExtendId } from '../autoGenerated';
import { IProject } from '../project';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    project: IProject;
    purpose: IPurpose;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.CancelAccount;
    data: IData;
}

/**
 * 口座承認取消タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
