import { IProject } from './organization/project';
import PaymentMethodType from './paymentMethodType';
import SortType from './sortType';

/**
 * payment method interface
 */
export interface IPaymentMethod {
    project: IProject;
    typeOf: PaymentMethodType;
    identifier: string;
}

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    identifier?: SortType;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: {
        id?: { $eq?: string };
        ids?: string[];
    };
    identifiers?: string[];
}
