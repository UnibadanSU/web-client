import { requestInstance } from "./config";

export const getExecutives = async () => {
  try {
    const response = await requestInstance.get("/executives?populate=%2A");
    return response.data;
  } catch (error) {}
};
