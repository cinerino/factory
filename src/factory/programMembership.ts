import * as chevre from '../chevre';

export type IMember = chevre.person.IPerson;

export interface IProgramMembership extends chevre.programMembership.IProgramMembership {
    member?: IMember[];
}
