import { IAttributes as IPayActionAttributes } from '../action/trade/pay';
import { IExtendId } from '../autoGenerated';
import PaymentMethodType from '../paymentMethodType';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export type IData = IPayActionAttributes<PaymentMethodType | string>;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.Pay;
    data: IData;
}
/**
 * 決済タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
