import { requestInstance } from "./config";

export const getRepresentatives = async () => {
  try {
    const response = await requestInstance.get("/representatives?populate=*");
    return response.data;
  } catch (error) {}
};
export const getRepresentative = async (id) => {
  try {
    const response = await requestInstance.get(
      `/representatives?filters[id][$eq]=${id}&populate=%2A`
    );
    return response.data;
  } catch {
    return null;
  }
};