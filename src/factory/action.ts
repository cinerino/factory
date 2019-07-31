import ActionStatusType from './actionStatusType';
import ActionType from './actionType';
import { IExtendId } from './autoGenerated';
import * as OrganizationFactory from './organization';
import OrganizationType from './organizationType';
import { IPerson } from './person';
import { IProject } from './project';
import { IPropertyValue } from './propertyValue';
import SortType from './sortType';

/**
 * アクションへの関係者インターフェース
 * 継承先にて、インターフェースが強化される可能性あり
 */
export type IParticipant = IPerson | OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;

/**
 * アクション目的インターフェース
 */
export interface IPurpose {
    typeOf: string;
}

/**
 * 追加属性インターフェース
 */
export type IAdditionalProperty = IPropertyValue<string>[];

/**
 * アクション属性
 */
export interface IAttributes<T extends ActionType, TObject, TResult> {
    project?: IProject;
    /**
     * A property-value pair representing an additional characteristics of the entitity,
     * e.g. a product feature or another characteristic for which there is no matching property in schema.org.
     */
    additionalProperty?: IAdditionalProperty;
    /**
     * アクション主体者
     */
    agent: IParticipant;
    /**
     * アクション説明
     */
    description?: string;
    /**
     * アクション失敗時のエラー結果
     */
    error?: any;
    /**
     * The object that helped the agent perform the action. e.g. John wrote a book with a pen.
     */
    instrument?: any;
    /**
     * アクション対象
     */
    object: TObject;
    /**
     * 事後に発生するアクション
     */
    potentialActions?: any;
    /**
     * 目的
     */
    purpose?: IPurpose;
    /**
     * アクション受取者
     */
    recipient?: IParticipant;
    /**
     * アクション結果
     */
    result?: TResult;
    /**
     * アクションタイプ
     */
    typeOf: T;
}

/**
 * アクション動的属性インターフェース
 * リポジトリに保管時にセット、あるいは変更される
 */
export interface IDynamicAttributes {
    /**
     * アクション状態
     */
    actionStatus: ActionStatusType;
    /**
     * 開始日時
     */
    startDate: Date;
    /**
     * 終了日時
     */
    endDate?: Date;
}

/**
 * 抽象アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<ActionType, any, any>> = IExtendId<TAttributes & IDynamicAttributes>;

/**
 * ソート条件インターフェース
 */
export interface ISortOrder {
    // typeOf?: SortType;
    // actionStatus?: SortType;
    startDate?: SortType;
    // endDate?: SortType;
}

/**
 * 検索条件インターフェース
 */
export interface ISearchConditions<T extends ActionType> {
    limit?: number;
    page?: number;
    sort?: ISortOrder;
    project?: { ids?: string[] };
    typeOf?: T;
    actionStatusTypes?: ActionStatusType[];
    startFrom?: Date;
    startThrough?: Date;
    object?: {
        typeOf?: {
            $in?: string[];
        };
        id?: {
            $in?: string[];
        };
        orderNumber?: {
            $in?: string[];
        };
        paymentMethod?: {
            paymentMethodId?: {
                $in?: string[];
            };
        };
    };
    purpose?: {
        typeOf?: {
            $in?: string[];
        };
        id?: {
            $in?: string[];
        };
        orderNumber?: {
            $in?: string[];
        };
    };
    result?: {
        typeOf?: {
            $in?: string[];
        };
        id?: {
            $in?: string[];
        };
        orderNumber?: {
            $in?: string[];
        };
    };
}
