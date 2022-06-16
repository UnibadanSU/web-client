import { requestInstance } from "./config";

export const getStudentsUnionPress = async () => {
  try {
    const response = await requestInstance.get("/student-union-press-club-members/populate=*");
    return response.data;
  } catch (error) {}
};
