import { ObjectType as AuthorizePointAwardActionObjectType } from '../../authorize/award/point';
import * as GiveActionFactory from '../give';

import * as chevre from '../../../../chevre';

export import ObjectType = AuthorizePointAwardActionObjectType;

/**
 * ポイント付与対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    amount: number;
    toLocation: {
        typeOf: string;
        accountType: string;
        accountNumber: string;
    };
    description: string;
}

export type IResult = any;

/**
 * 目的は注文
 * 注文に対するインセンティブとしてポイントが付与される仕組み
 */
export type IPurpose = chevre.order.ISimpleOrder;

export type IPotentialActions = any;
export interface IAttributes extends GiveActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
    // toLocation: IToLocation;
}

/**
 * ポイント付与アクションインターフェース
 */
export type IAction = GiveActionFactory.IAction<IAttributes>;
