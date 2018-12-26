import * as chevre from '../../chevre';
import * as EventFactory from '../event';

/**
 * イベント属性インターフェース
 */
export type IAttributes = chevre.event.screeningEventSeries.IAttributes & EventFactory.IEvent<chevre.eventType.ScreeningEventSeries>;

/**
 * イベントインターフェース
 */
export type IEvent = chevre.event.screeningEventSeries.IEvent & EventFactory.IEvent<chevre.eventType.ScreeningEventSeries>;

/**
 * 検索条件インターフェース
 */
export type ISearchConditions = chevre.event.screeningEventSeries.ISearchConditions;
