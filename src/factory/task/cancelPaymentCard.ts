import { IPurpose } from '../action/authorize/paymentMethod/any';
import { IExtendId } from '../autoGenerated';
import { IProject } from '../organization/project';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    agent?: { id: string };
    /**
     * 承認アクションID指定であれば、指定アクションのみ中止
     */
    id?: string;
    project: IProject;
    purpose: IPurpose;
}

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.CancelPaymentCard;
    data: IData;
}

/**
 * 決済カード決済承認取消タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;