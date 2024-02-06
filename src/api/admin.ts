import axios from "@/plugins/axios";

const url: string = import.meta.env.VITE_BASE_URL;

function apifetchStudents() {
  return axios.get("/user");
}

export { apifetchStudents };
