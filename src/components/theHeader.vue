<template>
  <v-app-bar
    :elevation="1"
    color="#fdfdfd"
    class="py-2 flex items-center justify-between"
  >
    <v-app-bar-nav-icon
      @click="onSidebarToggle"
      class="me-auto"
    ></v-app-bar-nav-icon>
    <!-- <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn> -->
    <div class="d-flex justify-space-around mx-4">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Acount </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="logout"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <langSwitcher />
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import langSwitcher from "./langSwitcher.vue";
import router from "@/router";
const permanent = ref<boolean>(false);
import { useToast } from "vue-toastification";

const toast = useToast();
const emit = defineEmits<{
  (e: "toggleSidebar", permanent: boolean): void;
}>();

function onSidebarToggle(): void {
  permanent.value = !permanent.value;
  emit("toggleSidebar", permanent.value);
}
const items = [{ title: "Sign in" }, { title: "Log out" }];
function logout() {
  localStorage.removeItem("token");
  toast.success("Admin Log out");
  router.push("/login");
}
</script>

<style scoped>
.home12 {
  padding: 10px;
  justify-content: space-between;
}
</style>
