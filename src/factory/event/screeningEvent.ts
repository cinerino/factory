import * as chevre from '../../chevre';
import * as EventFactory from '../event';
import { Identifier as WebAPIIdentifier, IService as IWebAPI } from '../service/webAPI';

import * as COA from '../../coa';

export type IOfferedThrough = IWebAPI<WebAPIIdentifier>;

/**
 * COA情報インターフェース
 */
export interface ICOAInfo {
    theaterCode: string;
    dateJouei: string;
    titleCode: string;
    titleBranchNum: string;
    timeBegin: string;
    screenCode: string;
    /**
     * トレーラー時間
     * トレーラー含む本編以外の時間（分）
     */
    trailerTime: number;
    /**
     * サービス区分
     * 「通常興行」「レイトショー」など
     */
    kbnService?: COA.services.master.IKubunNameResult;
    /**
     * 音響区分
     */
    kbnAcoustic?: COA.services.master.IKubunNameResult;
    /**
     * サービスデイ名称
     * 「映画の日」「レディースデイ」など ※割引区分、割引コード、特定日等の組み合わせで登録するため名称で連携の方が容易
     */
    nameServiceDay: string;
    /**
     * 購入可能枚数
     */
    availableNum: number;
    /**
     * 予約開始日
     * 予約可能になる日付(YYYYMMDD)
     */
    rsvStartDate: string;
    /**
     * 予約終了日
     * 予約終了になる日付(YYYYMMDD)
     */
    rsvEndDate: string;
    /**
     * 先行予約フラグ
     * 先行予約の場合は'1'、それ以外は'0'
     */
    flgEarlyBooking: string;
}

/**
 * COA券種情報インターフェース
 */
export declare type ICOAOffer = COA.services.reserve.IUpdReserveTicket & {
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
    offers: IOffer;
};

/**
 * イベントインターフェース
 */
export type IEvent = chevre.event.screeningEvent.IEvent & EventFactory.IEvent<chevre.eventType.ScreeningEvent> & IAttributes;

/**
 * 検索条件インターフェース
 */
export type ISearchConditions = chevre.event.screeningEvent.ISearchConditions;
