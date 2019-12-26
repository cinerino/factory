import { IPurpose } from '../action/authorize/award/point';
import { IExtendId } from '../autoGenerated';
import { IProject } from '../project';
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
    name: TaskName.CancelPointAward;
    data: IData;
}

/**
 * ポイントインセンティブ承認アクション取消タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
