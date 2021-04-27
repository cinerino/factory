import { IProject } from '../../project';

import * as chevre from '../../../chevre';

export interface IAttributes {
    project: IProject;
    typeOf: chevre.creativeWorkType.WebApplication;
}

/**
 * ウェブアプリケーションインターフェース
 */
export type ICreativeWork = IAttributes & chevre.creativeWork.ICreativeWork;
