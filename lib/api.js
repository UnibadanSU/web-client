export function getStrapiURL(path = "") {
  if (process.env.NODE_ENV !== "development") {
    return process.env.NEXT_PUBLIC_STRAPI_URL + path;
  } else {
    return "https://uisu-web-cms.herokuapp.com" + path;
  }
}
