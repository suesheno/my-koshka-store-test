import { STRAPI_TAG } from '../tags'
import { Image } from '@/types/image'

export interface petType {
    readonly data: {
        readonly id: string;
        readonly attributes: petInfoType;
    } | undefined 
}

export interface petResponse {
    readonly data: {
        readonly id: string;
        readonly attributes: petInfoType | disease;
    } | undefined
}

export interface disease {
    disease: {
        "id": number;
        "code": string;
        "name": string;
    }
    "vetConfirmed": boolean;
}

export interface Profile {
    id: number;
    user_id: string;
    crmID: string | null;
}

export interface IPetInfoPost {
    data: {
        id: number;
        name: string;
        age: number;
        description: string;
        image: Image | undefined | null;
        vaccinated: boolean;
        sterilized: boolean;
        contact: string;
        tags: Array<string | number>;
        reunites: Array<string | number>;
        cityLicense: string;
        microchip: string;
        diseases: Array<disease>;
        profile: Profile;
    }
}

export interface petInfoType {
    id: number;
    name: string;
    age: string;
    description: string | undefined;
    tags?: Array<STRAPI_TAG> | undefined;
    image: Image | undefined | null;
    vaccinated: boolean;
    sterilized: boolean;
    contact: string;
    cityLicense?: string | undefined;
    microchip?: string | undefined;
    diseases: Array<disease> | undefined | null;
    profile: Profile;
}
