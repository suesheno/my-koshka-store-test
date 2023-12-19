import { STRAPI_TAG } from '../tags'
export interface petType {
    readonly data: {
        readonly id: string;
        readonly attributes: petInfoType;
    } | undefined 
}

export interface petInfoType {
    readonly name: string;
    readonly age: string;
    readonly description: string | undefined;
    readonly tags: Array<STRAPI_TAG>;
    readonly image: {
        readonly url: string;
        readonly alternativeText: string
    }
    readonly vaccinated: boolean;
    readonly sterilized: boolean;
    readonly contact: string; 
    readonly cityLicense: string | undefined; 
    readonly microchip: string | undefined; 
    readonly diseases: Array<string> 
 }
