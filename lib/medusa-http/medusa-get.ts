export const medusaGet = async (url: string, header?: any) => {
  const headers = {
    accept: 'application/json',
    ...header,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}${url}`,
    { headers }
  );

  if (response.status === 200) return response;
  return new Response(
    JSON.stringify({ status: response.status, statusText: response.statusText })
  );
};

export default medusaGet;
