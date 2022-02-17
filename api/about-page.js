import { requestInstance } from "./config";

export const getAboutPageContent = async () => {
  try {
    const response = await requestInstance.get("/about-page");
    let aboutPage = null;
    if (response.data) {
      const { data } = response.data;
      if (data) {
        aboutPage = data;
      }
    }
    return aboutPage;
  } catch (error) {}
};
