import axios from "axios";

export const api = axios.create({
  timeout: 10000,
});

// Opcional: añadir interceptores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);