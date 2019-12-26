import * as PlaceFactory from '../place';
import PlaceType from '../placeType';

/**
 * 店舗インターフェース
 */
export interface IPlace extends PlaceFactory.IPlace<PlaceType.Store> {
}
