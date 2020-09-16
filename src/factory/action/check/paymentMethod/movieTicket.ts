import * as ActionFactory from '../../../action';
import * as CheckActionFactory from '../../check';

import * as chevre from '../../../../chevre';

export import IMovieTicket = chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket;

export type IAgent = ActionFactory.IParticipant;
export import IPurchaseNumberAuthIn = chevre.action.check.paymentMethod.movieTicket.IPurchaseNumberAuthIn;
export import IPurchaseNumberAuthResult = chevre.action.check.paymentMethod.movieTicket.IPurchaseNumberAuthResult;
export type ObjectType = string;
export type IMovieTicketResult = IMovieTicket;
export interface IObject {
    typeOf: ObjectType;
    movieTickets: IMovieTicket[];
    /**
     * 販売者
     */
    seller: { typeOf: chevre.organizationType; id: string };
}
export interface IResult {
    purchaseNumberAuthIn: IPurchaseNumberAuthIn;
    purchaseNumberAuthResult: IPurchaseNumberAuthResult;
    /**
     * 認証結果としてのムビチケリスト
     */
    movieTickets: IMovieTicketResult[];
}
export type IError = any;
/**
 * ムビチケ確認アクション属性インターフェース
 */
export interface IAttributes extends CheckActionFactory.IAttributes<IObject, IResult> {
    object: IObject;
    agent: IAgent;
}
/**
 * ムビチケ確認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
