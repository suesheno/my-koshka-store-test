export const fetcher = async (
  url: string,
  accept: string = 'application/json'
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HUBSPOT}${url}`, {
    headers: {
      accept: accept,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_TOKEN}`,
    },
  });

  if (response.status === 200) return response;
  return new Response(
    JSON.stringify({ status: response.status, statusText: response.statusText })
  );
};

export const poster = async (
  url: string,
  contentType: string = 'application/json',
  data: object,
  accept: string = 'application/json'
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HUBSPOT}${url}${url}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        Accept: accept,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_TOKEN}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (response.status == 200) return response;
  return new Response(
    JSON.stringify({
      status: response.status,
      statusText: response.statusText,
    }),
    { status: 500 }
  );
};

export const put = async (
  url: string,
  contentType: string = 'application/json',
  data: object,
  accept: string = 'application/json'
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HUBSPOT}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': contentType,
      Accept: accept,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_TOKEN}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status == 200) return response;
  return new Response(
    JSON.stringify({
      status: response.status,
      statusText: response.statusText,
    }),
    { status: 500 }
  );
};
