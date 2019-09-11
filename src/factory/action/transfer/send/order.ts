import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import { IGood, IGoodType, IOwnershipInfo } from '../../../ownershipInfo';
import { Identifier as WebAPIIdentifier } from '../../../service/webAPI';
import { IAttributes as IConfirmReservationActionAttributes } from '../../interact/confirm/reservation';
import { IAttributes as IInformActionAttributes } from '../../interact/inform';
import { IAttributes as IRegisterProgramMembershipAttributes } from '../../interact/register/programMembership';
import * as SendActionFactory from '../send';
import { IAttributes as ISendEmailMessageActionAttributes } from './message/email';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = IOrder;

/**
 * 注文配送結果としての所有権
 */
export type IResult = IOwnershipInfo<IGood<IGoodType>>[];

export interface IPotentialActions {
    /**
     * 予約確定アクション
     */
    confirmReservation?: IConfirmReservationActionAttributes<WebAPIIdentifier>[];
    /**
     * 注文通知アクション
     */
    informOrder?: IInformActionAttributes<any, any>[];
    /**
     * 会員プログラムの注文の場合、会員プログラム登録アクション
     */
    registerProgramMembership?: IRegisterProgramMembershipAttributes[];
    /**
     * 注文配送を通知するEメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes[];
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
