import { cookies } from 'next/headers';

const medusaPost = async (
  url: string,
  payload: object,
  header?: {} | null,
  contentType: string = 'application/json',
  accept: string = 'application/json'
) => {
  //   const cookieStore = cookies();
  //   const token = cookieStore.get('access_token');

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}${url}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        Accept: accept,
        ...header,
      },
      body: JSON.stringify(payload),
    }
  );
  return response;
};

export default medusaPost;
