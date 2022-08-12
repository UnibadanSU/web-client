import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_BASE_API_URL
    : process.env.NEXT_PUBLIC_BASE_API_URL;

const authToken =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_AUTH_TOKEN
    : process.env.NEXT_PUBLIC_AUTH_TOKEN;

export const requestInstance = axios.create({
  baseURL
});
