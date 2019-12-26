import IMultilingualString from './multilingualString';
import PlaceType from './placeType';

export type IAvailablePlaceType = PlaceType | string;

/**
 * 場所インターフェース
 */
export interface IPlace<T extends IAvailablePlaceType> {
    typeOf: T;
    id?: string;
    identifier?: any;
    name?: IMultilingualString;
    description?: IMultilingualString;
    address?: IMultilingualString;
    branchCode?: string;
    containedInPlace?: IPlace<IAvailablePlaceType>;
    containsPlace?: IPlace<IAvailablePlaceType>[];
    isAccessibleForFree?: boolean;
    maximumAttendeeCapacity?: number;
    openingHoursSpecification?: any;
    publicAccess?: boolean;
    smokingAllowed?: boolean;
    telephone?: string;
    url?: string;
}
