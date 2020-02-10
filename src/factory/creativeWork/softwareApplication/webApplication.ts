import * as CreativeWorkFactory from '../../creativeWork';
import CreativeWorkType from '../../creativeWorkType';
import { IProject } from '../../organization/project';

export interface IAttributes {
    project: IProject;
    typeOf: CreativeWorkType.WebApplication;
}

/**
 * ウェブアプリケーションインターフェース
 */
export type ICreativeWork = IAttributes & CreativeWorkFactory.ICreativeWork;