import axiosInstance from "./axios_interceptor";

export const getProjects = async (employee_name) => {
  const response = await axiosInstance.get(`assignedproject?employee_name=${employee_name}`);
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to fetch projects");
};
