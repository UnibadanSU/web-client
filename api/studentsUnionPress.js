import { requestInstance } from "./config";

export const getStudentsUnionPress = async () => {
  try {
    const response = await requestInstance.get("/student-union-press-club-members?populate=*&sort[0]=publishedAt%3Adesc");
    return response.data;
  } catch (error) {}
};

export const getStudentsUnionPressArticle = async (slug) => {
  try {
    const response = await requestInstance.get(
      `/student-union-press-club-members?filters[slug][$eq]=${slug}&populate=%2A`
    );
    return response.data;
  } catch {
    return null;
  }
};
