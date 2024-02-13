import { defineStore } from "pinia";
import router from "@/router/index";
import authApi from "../api/auth";
import { useToast } from "vue-toastification";
const toast = useToast();
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    loading: false,
  }),
  actions: {
    async authLogin(payload: any) {
      try {
        this.loading = true;
        let res = await authApi.login(payload);
        this.loading = false;
        if (res?.tokens?.access_token) {
          localStorage.setItem("token", res?.tokens?.access_token);
          toast.success("Login");
          await router.push({ name: "Admin" });
        }
      } catch (err) {
        toast.warning("Error");
      }
    },
  },
});
