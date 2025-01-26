import axiosInstance from "./axios_interceptor";

export const profileService = async () => {
  const response = await axiosInstance.get("profile/");
  if (response.status === 200) {
    return response;
  }
  throw new Error("Error fetching profile details");
};
export const updateProfileService = async (payload) => {
  const response = await axiosInstance.patch("profile/", payload);
  if (response.status == 200) {
    return response;
  }
  throw new Error("Error updating profile details");
};
