import CreativeWorkType from './creativeWorkType';
import { IThing } from './thing';

export interface ICopyrightHolder {
    name: string;
}
/**
 * 著作物インターフェース
 */
export interface ICreativeWork extends IThing {
    id?: string;
    identifier: string;
    name: string;
    description?: string;
    copyrightHolder?: ICopyrightHolder;
    copyrightYear?: number;
    datePublished?: Date;
    license?: string;
    thumbnailUrl?: string;
    typeOf: CreativeWorkType;
}
