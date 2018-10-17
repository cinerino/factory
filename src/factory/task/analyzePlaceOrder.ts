import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';
import { ITransaction } from '../transaction/placeOrder';

export interface IData {
    /**
     * CinerinoプロジェクトID
     */
    projectId: string;
    /**
     * 注文取引
     */
    transaction: ITransaction;
}
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.AnalyzePlaceOrder;
    data: IData;
}
/**
 * 注文取引分析タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;