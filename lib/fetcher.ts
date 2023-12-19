export const fetcher = async (url: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}${url}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      }
    )
    return response.json();
  } catch (error) {
    console.log(error);
  }
}