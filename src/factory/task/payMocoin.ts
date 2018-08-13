import { IAttributes as IPayActionAttributes } from '../action/trade/pay';
import { IExtendId } from '../autoGenerated';
import PaymentMethodType from '../paymentMethodType';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export type IData = IPayActionAttributes<PaymentMethodType.Mocoin>;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.PayMocoin;
    data: IData;
}
/**
 * ポイント支払タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
