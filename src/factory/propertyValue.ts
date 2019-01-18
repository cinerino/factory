/**
 * 属性値インターフェース
 */
export interface IPropertyValue<T extends any> {
    name: string;
    value: T;
}
