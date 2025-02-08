import axiosInstance from "./axios_interceptor";

export const getProjects = async (employee_id) => {
  const response = await axiosInstance.get(
    `assignedproject?employee_id=${employee_id}`
  );
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to fetch projects");
};

export const getAssignedTickets = async (employee_id) => {
  const response = await axiosInstance.get(
    `assigned_tickets/?employee_id=${employee_id}`
  );
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to fetch tickets");
};

export const updateTicketApi = async (payload) => {
  const response = await axiosInstance.patch(`assigned_tickets/${payload.id}`, {
    ...payload.data,
  });
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to update ticket");
};
