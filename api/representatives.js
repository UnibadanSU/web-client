import { requestInstance } from "./config";

export const getRepresentatives = async () => {
  try {
    const response = await requestInstance.get("/representatives?populate=*");
    return response.data;
  } catch (error) {}
};
