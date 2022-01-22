export function getStrapiURL(path = "") {
  if (process.env.NODE_ENV !== "development") {
    return process.env.NEXT_PUBLIC_STRAPI_API_URL + path;
  } else {
    return "http://localhost:1337" + path;
  }
}
