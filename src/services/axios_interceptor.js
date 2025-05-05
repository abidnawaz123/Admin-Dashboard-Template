import axios from "axios";
import { notification } from "antd";

const API_URL = "http://localhost:8001/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status == 401) {
      console.log('error ==>',error)
      notification.open({
        message: error?.message || "",
        description: error?.response?.data?.error || "",
        type: "error",
      });
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
