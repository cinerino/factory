import IMultilingualString from './multilingualString';
import { IOffer } from './offer';
import * as OrganizationFactory from './organization';
import { IProject } from './organization/project';
import OrganizationType from './organizationType';
import { IPerson } from './person';
import { IQuantitativeValue } from './quantitativeValue';
import { IThing } from './thing';

export type MembershipServiceType = 'MembershipService';

export enum ProgramMembershipType {
    ProgramMembership = 'ProgramMembership'
}

export type IMember = IPerson;

export interface IProgramMembership extends IThing {
    hostingOrganization?: OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<OrganizationType>>;
    member?: IMember[];
    membershipFor?: {
        typeOf: MembershipServiceType;
        id: string;
    };
    membershipNumber?: string;
    programName?: IMultilingualString;
    project: IProject;
    typeOf: ProgramMembershipType;
}

export interface IMembershipService extends IThing {
    id?: string;
    membershipPointsEarned?: IQuantitativeValue<any>;
    offers?: IOffer[];
    project: IProject;
    typeOf: MembershipServiceType;
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
