import axios from "axios";

const baseURL = process.env.BASE_API_URL;
const authToken = process.env.AUTH_TOKEN;
export const requestInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});
