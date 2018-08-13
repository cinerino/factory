import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';

/**
 * 企業組織インターフェース
 */
export interface IOrganization extends OrganizationFactory.IOrganization {
    typeOf: OrganizationType.Corporation;
    /**
     * 組織識別子
     */
    identifier: string;
}
