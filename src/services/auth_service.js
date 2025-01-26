import axiosInstance from "./axios_interceptor";

export const login = async (data) => {
  const { email, password } = data;
  const response = await axiosInstance.post("login/", {
    email: email,
    password: password,
  });
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to login user");
};
