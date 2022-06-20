import { requestInstance } from "./config";

export const getExecutives = async () => {
  try {
    const response = await requestInstance.get("/executives?populate=*");
    return response.data;
  } catch (error) {}
};
export const getExecutive = async (id) => {
  try {
    const response = await requestInstance.get(
      `/executives?filters[id][$eq]=${id}&populate=%2A`
    );
    return response.data;
  } catch {
    return null;
  }
};