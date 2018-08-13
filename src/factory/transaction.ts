/**
 * transaction factory
 * 取引ファクトリー
 * @namespace transaction
 */
import { IExtendId } from './autoGenerated';
import TransactionStatusType from './transactionStatusType';
import TransactionTasksExportationStatus from './transactionTasksExportationStatus';
import TransactionType from './transactionType';

export type ITransaction<T extends TransactionType, TAgent, TObject, TResult> = IExtendId<IAttributes<T, TAgent, TObject, TResult>>;
/**
 * transaction interface
 * 取引インターフェース
 */
export interface IAttributes<T extends TransactionType, TAgent, TObject, TResult> {
    /**
     * 取引タイプ
     */
    typeOf: T;
    /**
     * 取引状態
     */
    status: TransactionStatusType;
    /**
     * 取引主体
     */
    agent: TAgent;
    /**
     * 取引結果
     */
    result?: TResult;
    /**
     * 取引エラー
     */
    error?: any;
    /**
     * 取引対象
     */
    object?: TObject;
    /**
     * 取引進行期限
     */
    expires: Date;
    /**
     * 取引開始日時
     */
    startDate?: Date;
    /**
     * 取引終了日時
     */
    endDate?: Date;
    /**
     * タスクエクスポート日時
     */
    tasksExportedAt?: Date;
    /**
     * タスクエクスポート状態
     */
    tasksExportationStatus: TransactionTasksExportationStatus;
    /**
     * 事後に発生するアクション
     */
    potentialActions?: any;
}
