import * as chevre from '../../chevre';
import * as EventFactory from '../event';
import { Identifier as WebAPIIdentifier, IService as IWebAPI } from '../service/webAPI';

export type IOfferedThrough = IWebAPI<WebAPIIdentifier>;

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
