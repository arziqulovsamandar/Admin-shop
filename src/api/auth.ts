import axiosClient from "./apiClient";

const authApi = {
  login(payload: any) {
    const url = "/admin/signin";
    return axiosClient.post(url, payload);
  },
};

export default authApi;
