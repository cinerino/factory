import { IPerson } from './person';

import * as chevre from '../chevre';

export type IMember = IPerson;

export interface IProgramMembership extends chevre.programMembership.IProgramMembership {
    member?: IMember[];
}
