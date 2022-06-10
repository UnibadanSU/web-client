import { requestInstance } from "./config";

export const getTrending = async () => {
  try {
    const response = await requestInstance.get("/trending-news-and-events/?populate=*");
    return response.data;
  } catch (error) {}
};
