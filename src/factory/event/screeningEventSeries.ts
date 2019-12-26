import * as chevre from '../../chevre';
import * as EventFactory from '../event';

export import ICOAInfo = chevre.event.screeningEventSeries.ICOAInfo;

/**
 * イベント属性インターフェース
 */
export type IAttributes = chevre.event.screeningEventSeries.IAttributes & EventFactory.IEvent<chevre.eventType.ScreeningEventSeries>;

/**
 * イベントインターフェース
 */
export type IEvent = chevre.event.screeningEventSeries.IEvent & EventFactory.IEvent<chevre.eventType.ScreeningEventSeries> & IAttributes;

/**
 * 検索条件インターフェース
 */
export type ISearchConditions = chevre.event.screeningEventSeries.ISearchConditions;
