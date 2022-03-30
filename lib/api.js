export function getStrapiURL(path = "") {
  if (process.env.NODE_ENV !== "development") {
    return process.env.NEXT_PUBLIC_STRAPI_URL + path;
  } else {
    const url = "https://uisu-admin.herokuapp.com/api/";  
    return url + path;
  }
}
