import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import { IGood, IOwnershipInfo } from '../../../ownershipInfo';
import { IAttributes as IConfirmReservationActionAttributes } from '../../interact/confirm/reservation';
import { IAttributes as IInformActionAttributes } from '../../interact/inform';
import { IAttributes as IRegisterServiceAttributes } from '../../interact/register/service';
import { IAttributes as IMoneyTransferActionAttributes } from '../../transfer/moneyTransfer';
import * as SendActionFactory from '../send';
import { IAttributes as ISendEmailMessageActionAttributes } from './message/email';

import * as chevre from '../../../../chevre';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export type IObject = IOrder;

/**
 * 注文配送結果としての所有権
 */
export type IResult = IOwnershipInfo<IGood>[];

export interface IPotentialActions {
    /**
     * 予約確定アクション
     */
    confirmReservation?: IConfirmReservationActionAttributes<chevre.service.webAPI.Identifier>[];
    /**
     * 注文通知アクション
     */
    informOrder?: IInformActionAttributes<any, any>[];
    /**
     * 通貨転送アクション
     */
    moneyTransfer?: IMoneyTransferActionAttributes[];
    /**
     * サービス登録アクション
     */
    registerService?: IRegisterServiceAttributes[];
    /**
     * Eメール送信アクション
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
