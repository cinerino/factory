import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import { IGood, IGoodType, IOwnershipInfo } from '../../../ownershipInfo';
import { IAttributes as IRegisterProgramMembershipTaskAttributes } from '../../../task/registerProgramMembership';
import * as SendActionFactory from '../send';
import { IAttributes as ISendEmailMessageActionAttributes } from './message/email';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = IOrder;
export interface IResult {
    /**
     * 注文配送結果としての所有権
     */
    ownershipInfos: IOwnershipInfo<IGood<IGoodType>>[];
}
export interface IPotentialActions {
    /**
     * 注文配送を通知するEメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes;
    /**
     * 会員プログラムの注文の場合、次回のプログラム更新タスク作成アクションがここに追加されます。
     */
    registerProgramMembership?: IRegisterProgramMembershipTaskAttributes[];
}
export interface IAttributes extends SendActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * 注文配送アクションインターフェース
 */
export type IAction = SendActionFactory.IAction<IAttributes>;
