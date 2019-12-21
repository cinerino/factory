import { IPropertyValue } from './propertyValue';

/**
 * @see https://schema.org/Thing
 */
export interface IThing {
    /**
     * An alias for the item.
     */
    alternateName?: string;
    /**
     * A description of the item.
     */
    description?: string;
    /**
     * The identifier property represents any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc.
     */
    identifier?: IPropertyValue<string>[];
    /**
     * An image of the item.
     */
    image?: string;
    /**
     * The name of the item.
     */
    name?: string;
    /**
     * URL of the item.
     */
    url?: string;
}
