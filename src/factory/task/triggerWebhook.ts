import { IAttributes as IInformActionAttributes } from '../action/interact/inform';
import { IExtendId } from '../autoGenerated';
// import { IProject } from '../project';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export type IData = IInformActionAttributes<any, any>;
// export interface IData {
//     project?: IProject;
//     /**
//      * Webhook URL
//      */
//     url: string;
//     /**
//      * POSTリクエストボディ
//      */
//     payload: any;
// }

export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.TriggerWebhook;
    data: IData;
}

/**
 * ウェブフックタスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
