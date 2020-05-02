import { IProject } from './organization/project';
import PaymentMethodType from './paymentMethodType';
import SortType from './sortType';
import { IThing } from './thing';

/**
 * payment method interface
 */
export interface IPaymentMethod extends IThing {
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
    };
    identifier?: {
        $eq?: string;
        $in?: string[];
    };
}
