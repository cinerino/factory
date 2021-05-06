import { IExtendId } from './autoGenerated';
import TaskName from './taskName';

import * as chevre from '../chevre';

export type IData = any;

/**
 * タスク実行結果インターフェース
 */
export interface IExecutionResult {
    executedAt: Date;
    error: any;
}

/**
 * タスク属性インターフェース
 */
export interface IAttributes {
    project: chevre.project.IProject;
    /**
     * タスク名
     */
    name: TaskName;
    /**
     * タスク状況
     */
    status: chevre.taskStatus;
    /**
     * いつ実行するか
     */
    runsAt: Date;
    /**
     * あと何回トライできるか
     */
    remainingNumberOfTries: number;
    /**
     * 最終トライ日時
     */
    lastTriedAt?: Date;
    /**
     * すでにトライした回数
     */
    numberOfTried: number;
    /**
     * 実行結果リスト
     */
    executionResults: IExecutionResult[];
    /**
     * データ
     * TaskNameによってインターフェースが決定する
     */
    data: IData;
}

/**
 * タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    runsAt?: chevre.sortType;
    lastTriedAt?: chevre.sortType;
    numberOfTried?: chevre.sortType;
}

/**
 * 注文検索条件インターフェース
 */
export interface ISearchConditions<T extends TaskName | string> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
        ids?: string[];
    };
    name?: T;
    statuses?: chevre.taskStatus[];
    runsFrom?: Date;
    runsThrough?: Date;
    lastTriedFrom?: Date;
    lastTriedThrough?: Date;
}
