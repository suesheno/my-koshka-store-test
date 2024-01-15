export interface IProducts {
    products: Array<IProduct>;
    count: number;
    offset: number;
    limit: number;
}

export interface IProduct {
    id: string;
    title: string;
    subtitle: string | null;
    status: string;
    external_id: string | null;
    description: string | null;
    handle: string;
    "is_giftcard": boolean;
    discountable: boolean;
    thumbnail: string;
    collection_id: string;
    type_id: string | null;
    weight: number | null;
    length: number | null;
    height: null;
    width: null;
    hs_code: null;
    origin_country: null;
    mid_code: null;
    material: null;
    readonly created_at: string;
    readonly updated_at: string | null;
    readonly deleted_at: string | null;
    metadata: {} | null;
    profile_id: string;
    collection: {
        id: string;
        readonly created_at: string;
        readonly updated_at: string | null;
        readonly deleted_at: string | null;
        title: string;
        handle: string;
        metadata: {} | null;
    };
    images: [
        {
            id: string;
            readonly created_at: string;
            readonly updated_at: string | null;
            readonly deleted_at: string | null;
            url: string;
            metadata: {} | null;
        }
    ];
    "options": [
        {
            id: string;
            readonly created_at: string;
            readonly updated_at: string | null;
            readonly deleted_at: string | null;
            title: string;
            product_id: string;
            metadata: {} | null;
            values: [
                {
                    id: string;
                    readonly created_at: string;
                    readonly updated_at: string | null;
                    readonly deleted_at: string | null;
                    value: string;
                    option_id: string;
                    variant_id: string;
                    metadata: {} | null;
                }
            ]
        }
    ];
    profiles: [
        {
            id: string;
            readonly created_at: string;
            readonly updated_at: string | null;
            readonly deleted_at: string | null;
            name: string;
            type: string;
            metadata: {} | null;
        }
    ];
    tags: [];
    type: string | null;
    variants: [
        {
            id: string;
            readonly created_at: string;
            readonly updated_at: string | null;
            readonly deleted_at: string | null;
            title: string;
            product_id: string;
            sku: string | null;
            barcode: string | null;
            ean: string | null;
            upc: string | null;
            variant_rank: number;
            inventory_quantity: number;
            allow_backorder: boolean;
            manage_inventory: boolean;
            hs_code: string | null;
            origin_country: string | null;
            mid_code: string | null;
            material: string | null;
            weight: number | null;
            length: number | null;
            height: number | null;
            width: number | null;
            metadata: {} | null;
            options: [
                {
                    id: string;
                    created_at: string;
                    updated_at: string | null;
                    deleted_at: string | null;
                    value: string;
                    option_id: string;
                    variant_id: string;
                    metadata: {} | null;
                }
            ];
            prices: [
                {
                    id: string;
                    readonly created_at: string;
                    readonly updated_at: string | null;
                    readonly deleted_at: string | null;
                    currency_code: string;
                    amount: number;
                    min_quantity: number | null;
                    max_quantity: number | null;
                    price_list_id: string | null;
                    region_id: string | null;
                    price_list: string | null;
                    variant_id: stirng;
                }
            ];
            original_price: number;
            calculated_price: number;
            calculated_price_type: string;
            original_price_incl_tax: number | null;
            calculated_price_incl_tax: number | null;
            original_tax: number | null;
            calculated_tax: number | null;
            tax_rates: number | null
        }
    ]
}
