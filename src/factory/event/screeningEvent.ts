import * as chevre from '../../chevre';
import * as EventFactory from '../event';

/**
 * イベント属性インターフェース
 */
export type IAttributes = chevre.event.screeningEvent.IAttributes & EventFactory.IEvent<chevre.eventType.ScreeningEvent>;

/**
 * イベントインターフェース
 */
export type IEvent = chevre.event.screeningEvent.IEvent & EventFactory.IEvent<chevre.eventType.ScreeningEvent>;

/**
 * 検索条件インターフェース
 */
export type ISearchConditions = chevre.event.screeningEvent.ISearchConditions;
