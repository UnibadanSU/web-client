import { requestInstance } from "./config";

export const getExecutives = async () => {
  try {
    const response = await requestInstance.get("/executives?populate=*");
    return response.data;
  } catch (error) {}
};
