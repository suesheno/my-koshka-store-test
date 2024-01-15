export const medusaDelete = async ({
  url,
  accept = 'application/json',
  header = null,
}: {
  url: string;
  accept?: string;
  header?: {} | null;
}) => {
  const headers = {
    accept: accept,
    ...header,
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}${url}`,
    { method: 'DELETE', headers }
  );
  if (response.status === 200) return response;
  return new Response(
    JSON.stringify({ status: response.status, statusText: response.statusText })
  );
};

export default medusaDelete;
