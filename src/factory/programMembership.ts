import { IOffer } from './offer';
import * as OrganizationFactory from './organization';
import OrganizationType from './organizationType';
import { IProject } from './project';
import { IQuantitativeValue } from './quantitativeValue';

export type ProgramMembershipType = 'ProgramMembership';

/**
 * 会員プログラム特典インターフェース
 */
export type Award = any;

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * @see https://schema.org/ProgramMembership
 */
export interface IProgramMembership {
    /**
     * 特典リスト
     */
    award?: Award[];
    /**
     * The organization (airline, travelers' club, etc.) the membership is made with.
     */
    hostingOrganization?: OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;
    id?: string;
    /**
     * A unique identifier for the membership.
     */
    membershipNumber?: string;
    /**
     * The number of membership points earned by the member.
     * If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)
     */
    membershipPointsEarned?: IQuantitativeValue<any>;
    /**
     * The name of the item.
     */
    name?: string;
    /**
     * 会員プログラムに対するオファー
     * このオファーに対して注文取引を成立させると、ユーザーに会員プログラムが所有権として付与されます。
     */
    offers?: IOffer[];
    /**
     * The program providing the membership.
     */
    programName?: string;
    project?: IProject;
    typeOf: ProgramMembershipType;
    /**
     * URL of the item.
     */
    url?: string;
}
