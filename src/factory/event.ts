import * as chevre from '../chevre';

import { Identifier as WebAPIIdentifier, IService as IwebAPI } from './service/webAPI';

export type IAttributes<T extends chevre.eventType> = chevre.event.IAttributes<T> & {
    /**
     * 仕入れ先サービス
     */
    suppliedThrough: IwebAPI<WebAPIIdentifier>;
};

/**
 * イベントインターフェース
 */
export type IEvent<T extends chevre.eventType> = IAttributes<T> & chevre.event.IEvent<T>;
