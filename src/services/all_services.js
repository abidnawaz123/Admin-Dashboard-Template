import axiosInstance from "./axios_interceptor";

export const getProjects = async (employee_id) => {
  const response = await axiosInstance.get(`assignedproject?employee_id=${employee_id}`);
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to fetch projects");
};
