

export interface ICollection {
    id: string;
    created_at: Date | string | null;
    updated_at: Date | string | null;
    deleted_at: Date | string | null;
    title: string;
    handle: string;
    metadata: Object
}

export interface ICollections {
    collections: Array<ICollection>;
    count: number;
    limit: number;
    offset: number;
}