import { requestInstance } from "./config";

export const getArticles = async () => {
  try {
    const response = await requestInstance.get(
      "/articles?filters[status][$eq]=true&populate=%2A"
    );
    return response.data;
  } catch (error) {}
};

export const getArticle = async (slug) => {
  try {
    const response = await requestInstance.get(
      `articles?filters[slug][$eq]=${slug}&populate=%2A`
    );
    return response.data;
  } catch {
    return new Error(Error, "An error occurred");
  }
};
