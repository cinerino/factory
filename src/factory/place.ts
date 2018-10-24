import IMultilingualString from './multilingualString';
import PlaceType from './placeType';

/**
 * 場所インターフェース
 */
export interface IPlace<T extends PlaceType> {
    typeOf: T;
    id?: string;
    name?: IMultilingualString;
    description?: IMultilingualString;
    address?: IMultilingualString;
    branchCode?: string;
    containedInPlace?: IPlace<PlaceType>;
    containsPlace?: IPlace<PlaceType>[];
    isAccessibleForFree?: boolean;
    maximumAttendeeCapacity?: number;
    openingHoursSpecification?: any;
    publicAccess?: boolean;
    smokingAllowed?: boolean;
    telephone?: string;
    url?: string;
}
