import { ISimpleOrder } from '../../../order';
import { IPointTransaction, ObjectType as AuthorizePointAwardActionObjectType } from '../../authorize/award/point';
import * as GiveActionFactory from '../give';

export import ObjectType = AuthorizePointAwardActionObjectType;

/**
 * ポイント付与対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    amount: number;
    toLocation: {
        accountType: string;
        accountNumber: string;
    };
    description: string;
    /**
     * 付与対象のポイント取引
     * 取引が存在すれば、この取引を確定することで付与処理が実行される、という考え方
     */
    pointTransaction?: IPointTransaction;
}

export type IResult = any;

/**
 * 目的は注文
 * 注文に対するインセンティブとしてポイントが付与される仕組み
 */
export type IPurpose = ISimpleOrder;

export type IPotentialActions = any;
export interface IAttributes extends GiveActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
    // toLocation: IToLocation;
}

/**
 * ポイント付与アクションインターフェース
 */
export type IAction = GiveActionFactory.IAction<IAttributes>;
