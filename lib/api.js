export function getStrapiURL(path = "") {
  if (process.env.NODE_ENV !== "development") {
    return process.env.NEXT_PUBLIC_STRAPI_URL + path;
  } else {
    const url = process.env.NODE_ENV !== "development" ? "https://uisu-admin.herokuapp.com/api" : "http://localhost:8000/api"
    return url + path;
  }
}
