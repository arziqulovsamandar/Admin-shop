import axiosClient from "./apiClient";

const authApi = {
  login(payload) {
    const url = "/admin/signin";
    return axiosClient.post(url, payload);
  }
};

export default authApi;
