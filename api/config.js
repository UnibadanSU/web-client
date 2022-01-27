import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;
export const requestInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});
