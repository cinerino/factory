import * as chevre from '../chevre';
import PriceSpecificationType from './priceSpecificationType';

/**
 * 価格仕様インターフェース
 */
export type IPriceSpecification<T extends PriceSpecificationType> = chevre.priceSpecification.IPriceSpecification<T> & {
};
