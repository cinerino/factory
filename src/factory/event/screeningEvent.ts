import * as chevre from '../../chevre';
import * as EventFactory from '../event';

import * as COA from '../../coa';

export type IOfferedThrough = chevre.service.webAPI.IService<chevre.service.webAPI.Identifier>;

export import ICOAInfo = chevre.event.screeningEvent.ICOAInfo;

/**
 * COA券種情報インターフェース
 */
export type ICOAOffer = COA.factory.reserve.IUpdReserveTicket & {
    /**
     * チケット名
     */
    ticketName: string;
    /**
     * チケット名（カナ）
     */
    ticketNameKana: string;
    /**
     * チケット名（英）
     */
    ticketNameEng: string;
    /**
     * ポイント割引の場合の消費ポイント
     */
    usePoint: number;
};

export type IOffer = chevre.event.screeningEvent.IOffer & {
    /**
     * オファー供給サービス
     */
    offeredThrough?: IOfferedThrough;
};

/**
 * イベント属性インターフェース
 */
export type IAttributes = chevre.event.screeningEvent.IAttributes & EventFactory.IEvent<chevre.eventType.ScreeningEvent> & {
    offers?: IOffer;
};

/**
 * イベントインターフェース
 */
export type IEvent = chevre.event.screeningEvent.IEvent & EventFactory.IEvent<chevre.eventType.ScreeningEvent> & IAttributes;

/**
 * 検索条件インターフェース
 */
export type ISearchConditions = chevre.event.screeningEvent.ISearchConditions;
