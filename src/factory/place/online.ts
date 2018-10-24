import IMultilingualString from '../multilingualString';
import * as PlaceFactory from '../place';
import PlaceType from '../placeType';

/**
 * オンライン店舗インターフェース
 */
export interface IPlace extends PlaceFactory.IPlace<PlaceType.Online> {
    id: string;
    name: IMultilingualString;
}
