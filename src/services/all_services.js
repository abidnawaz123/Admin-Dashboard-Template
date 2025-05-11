import axiosInstance from "./axios_interceptor";

export const getProjects = async (data) => {
  const response = await axiosInstance.get(
    `assignedproject?employee_id=${data.id}&is_admin=${data.role}`
  );
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to fetch projects");
};

export const postProject = async (data) => {
  const response = await axiosInstance.post('assignedproject/', data);

  if (response.status === 201) {
    return response;
  }

  throw new Error("Failed to post project");
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

export const getAllLeads = async () => {
  const response = await axiosInstance.get(
    `leads/`
  );
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to fetch all leads");
};

export const getAllEmployees = async () => {
  const response = await axiosInstance.get(
    `employees/`
  );
  if (response.status === 200) {
    return response;
  }
  throw new Error("Failed to fetch all employees");
};
