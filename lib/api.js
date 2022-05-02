export function getStrapiURL(path = "") {
  if (process.env.NODE_ENV !== "development") {
    return process.env.NEXT_PUBLIC_STRAPI_URL + path;
  } else {
    const url = process.env.NODE_ENV !== "development" ? "https://uisu-cms.herokuapp.com" : "http://localhost:1337"
    return url + path;
  }
}
