/**
 * 合計金額インターフェース
 * @see https://schema.org/MonetaryAmount
 */
export interface IMonetaryAmount {
    typeOf: 'MonetaryAmount';
    /**
     * The currency in which the monetary amount is expressed.
     */
    currency: string;
    /**
     * The upper value of some characteristic or property.
     */
    maxValue?: number;
    /**
     * The lower value of some characteristic or property.
     */
    minValue?: number;
    /**
     * The date when the item becomes valid.
     */
    validFrom?: number;
    /**
     * The date after when the item is not valid. For example the end of an 
     */
    validThrough?: number;
    /**
     * The value of the quantitative value or property value node.
     */
    value?: number;
}
