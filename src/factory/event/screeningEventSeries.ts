import * as chevre from '../../chevre';
import * as EventFactory from '../event';

import * as COA from '../../coa';

/**
 * COA情報インターフェース
 */
export interface ICOAInfo {
    titleBranchNum: string;
    /**
     * 映倫区分
     */
    kbnEirin?: COA.services.master.IKubunNameResult;
    /**
     * 映像区分
     * ２D、３D
     */
    kbnEizou?: COA.services.master.IKubunNameResult;
    /**
     * 上映方式区分(ＩＭＡＸ，４ＤＸ等)
     */
    kbnJoueihousiki?: COA.services.master.IKubunNameResult;
    /**
     * 字幕吹替区分(字幕、吹き替え)
     */
    kbnJimakufukikae?: COA.services.master.IKubunNameResult;
    /**
     * ムビチケ使用フラグ
     * 1：ムビチケ使用対象
     */
    flgMvtkUse: string;
    /**
     * ムビチケ利用開始日
     * ※日付は西暦8桁 "YYYYMMDD"
     */
    dateMvtkBegin: string;
}

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
