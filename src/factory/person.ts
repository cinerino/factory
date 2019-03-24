import PersonType from './personType';
import * as ProgramMembershipFactory from './programMembership';
import { IPropertyValue } from './propertyValue';

/**
 * 追加属性インターフェース
 */
export type IAdditionalProperty = IPropertyValue<string | undefined>[];

/**
 * 識別子インターフェース
 */
export type IIdentifier = IPropertyValue<string>[];

/**
 * プロフィールインターフェース
 */
export interface IProfile {
    /**
     * 追加属性
     * プロジェクト固有の属性等
     */
    additionalProperty?: IAdditionalProperty;
    /**
     * Email address.
     */
    email?: string;
    /**
     * Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property.
     */
    givenName?: string;
    /**
     * Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property.
     */
    familyName?: string;
    /**
     * The telephone number.
     */
    telephone?: string;
}

/**
 * 人物インターフェース
 */
export type IPerson = IProfile & {
    description?: string;
    /**
     * Person ID (Amazon Cognito User Identifier)
     */
    id: string;
    /**
     * 人を識別するもの
     * サービスを使用するアプリケーション側で都合のいいように設定する
     */
    identifier?: IIdentifier;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     */
    memberOf?: ProgramMembershipFactory.IProgramMembership;
    name?: string;
    typeOf: PersonType;
    url?: string;
};
