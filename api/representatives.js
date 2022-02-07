import { requestInstance } from "./config";

export const getRepresentatives = async () => {
  try {
    const response = await requestInstance.get("/representatives?populate=%2A");
    return response.data;
  } catch (error) {}
};
