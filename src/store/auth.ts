import { defineStore } from "pinia";
import router from "@/router/index";
import authApi from "../api/auth";
import { useToast } from "vue-toastification";
const toast = useToast();
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
  }),
  actions: {
    async authLogin(payload) {
      try {
        let res = await authApi.login(payload);
        if (res?.tokens?.access_token) {
          localStorage.setItem("token", res?.tokens?.access_token);
          toast.success("Data successful");
          await router.push({ name: "Admin" });
        }
      } catch (err) {
        toast.warning("Error")
      }
    },
  },
});
