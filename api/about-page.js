import { requestInstance } from "./config";

export const getAboutPageContent = async () => {
  try {
    const response = await requestInstance.get("/about-page ");
    return response.data;
  } catch (error) {}
};
