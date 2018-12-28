import { IOffer } from './offer';

import * as chevre from '../chevre';

export type IOffer = IOffer;

export type IAttributes<T extends chevre.eventType> = chevre.event.IAttributes<T>;

/**
 * イベントインターフェース
 */
export type IEvent<T extends chevre.eventType> = IAttributes<T> & chevre.event.IEvent<T>;
