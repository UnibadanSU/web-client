// import axios from "axios";

// const baseURL = 
//   process.env.NODE_ENV === "development"
//     ? process.env.NEXT_PUBLIC_DEV_BASE_API_URL
//     : process.env.NEXT_PUBLIC_BASE_API_URL;

// const authToken =
//   process.env.NODE_ENV === "development"
//     ? process.env.NEXT_PUBLIC_DEV_AUTH_TOKEN
//     : process.env.NEXT_PUBLIC_AUTH_TOKEN;

// export const requestInstance = axios.create({
//   baseURL,
//   headers: {'Authorization': `Bearer ${authToken}`}
// });
import axios from "axios";

const baseURL = 'https://uisu-api.herokuapp.com/api'

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1NTQ2NDA4LCJleHAiOjE2NTgxMzg0MDh9.nCTdjY1LaGmwYusnyQmRxGV9q19owT6XTh8rUctFBCg'

export const requestInstance = axios.create({
  baseURL,
  headers: {'Authorization': `Bearer ${authToken}`}
});
