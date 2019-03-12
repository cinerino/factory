/**
 * @deprecated ムビチケは決済方法として解釈するように設計変更したので、こちらはもう拡張すべきでない
 */
import * as mvtkapi from '@movieticket/reserve-api-nodejs-client';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import TransactionType from '../../../transactionType';
import * as AuthorizeFactory from '../../authorize';

export type ISeatInfoSyncIn = mvtkapi.mvtk.services.seat.seatInfoSync.ISeatInfoSyncIn;

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    Mvtk = 'Mvtk'
}

// tslint:disable-next-line:no-suspicious-comment
// TODO ムビチケ着券OUTに変更
export interface IResult {
    price: number;
}

// tslint:disable-next-line:no-suspicious-comment
// TODO ムビチケ着券INに変更
export interface IObject {
    typeOf: ObjectType;
    price: number;
    seatInfoSyncIn: ISeatInfoSyncIn;
}

export interface IPurpose {
    typeOf: TransactionType.PlaceOrder;
    id: string;
}

/**
 * ムビチケ着券情報
 */
export interface IAttributes extends AuthorizeFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;
