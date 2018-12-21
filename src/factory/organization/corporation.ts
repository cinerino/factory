import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';

export interface IAttributes extends OrganizationFactory.IAttributes<OrganizationType.Corporation> {
}
/**
 * 企業組織インターフェース
 */
export type IOrganization = OrganizationFactory.IOrganization<IAttributes>;

// tslint:disable-next-line:no-empty-interface
export interface ISearchConditions extends OrganizationFactory.ISearchConditions {
}
