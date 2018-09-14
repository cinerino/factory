import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export interface IData {
    /**
     * 劇場枝番号
     */
    locationBranchCode: string;
    /**
     * 仕入れ期間from
     */
    importFrom: Date;
    /**
     * 仕入れ期間through
     */
    importThrough: Date;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.ImportScreeningEvents;
    data: IData;
}
/**
 * 上映イベント在庫仕入れタスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
