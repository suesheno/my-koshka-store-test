export interface IDisease
{
    id: number;
    attributes: {
        code: string;
        name: string;
        description: string;
        localizations: {
            data: [
                string
            ]
        };
        locale: string;
    }
}

export interface IDiseasesUpdate {
    set: number;
    disease: {
        id: number;
    }
}
export interface IDiseases extends IDisease {
    data: [
        ...IDisease
    ],
    "meta": {
        "pagination": {
            "page": 0,
            "pageSize": 25,
            "pageCount": 1,
            "total": 0
        }
    }
}
