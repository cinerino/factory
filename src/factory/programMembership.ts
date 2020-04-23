import { IOffer } from './offer';
import * as OrganizationFactory from './organization';
import { IProject } from './organization/project';
import OrganizationType from './organizationType';
import { IPerson } from './person';
import { IQuantitativeValue } from './quantitativeValue';
import { IThing } from './thing';

export enum ProgramMembershipType {
    ProgramMembership = 'ProgramMembership'
}

export type IMember = IPerson;

/**
 * 会員プログラム特典インターフェース
 */
// export type Award = any;

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * @see https://schema.org/ProgramMembership
 */
export interface IProgramMembership extends IThing {
    /**
     * 特典リスト
     */
    // award?: Award[];
    /**
     * The organization (airline, travelers' club, etc.) the membership is made with.
     */
    hostingOrganization?: OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;
    // id?: string;
    /**
     * A member of an Organization or a ProgramMembership.
     */
    member?: IMember[];
    membershipFor: {
        typeOf: string;
        id: string;
    };
    /**
     * A unique identifier for the membership.
     */
    membershipNumber?: string;
    /**
     * The number of membership points earned by the member.
     * If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)
     */
    // membershipPointsEarned?: IQuantitativeValue<any>;
    /**
     * 会員プログラムに対するオファー
     */
    // offers?: IOffer[];
    /**
     * The program providing the membership.
     */
    programName?: string;
    project: IProject;
    typeOf: ProgramMembershipType;
}

export interface IMembershipService extends IThing {
    /**
     * The organization (airline, travelers' club, etc.) the membership is made with.
     */
    // hostingOrganization?: OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;
    id?: string;
    /**
     * A member of an Organization or a ProgramMembership.
     */
    // member?: IMember[];
    /**
     * The number of membership points earned by the member.
     * If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)
     */
    membershipPointsEarned?: IQuantitativeValue<any>;
    /**
     * 会員プログラムに対するオファー
     */
    offers?: IOffer[];
    /**
     * The program providing the membership.
     */
    programName?: string;
    project: IProject;
    typeOf: string;
}

/**
 * 会員プログラム検索条件インターフェース
 */
export interface ISearchConditions {
    limit?: number;
    page?: number;
    // sort?: ISortOrder;
    project?: {
        id?: {
            $eq?: string;
        };
    };
    id?: {
        $eq?: string;
    };
}
