export const runtime = 'edge';

export async function POST(req: Request): Promise<Response>{
    const data = await req.formData()
    return await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}upload`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
            body: data
        }
    )
}