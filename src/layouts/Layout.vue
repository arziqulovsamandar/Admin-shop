<!-- <template>
  <div>
    <TheHeader class="header" />
    <div class="home1">
      <TheSidebar />
      <router-view></router-view>
    </div>
  </div>
</template> -->
<template>
  <v-layout class="!h-screen">
    <sidebar :permanent="permanent" />

    <appbar @toggle-sidebar="toggleSidebar" />

    <v-main class="overflow-y-scroll">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
import Appbar from "@/components/theHeader.vue";
import Sidebar from "@/components/theSidebar.vue";
import { ref } from "vue";
const toggleSidebar = () => {
  permanent.value = !permanent.value;
};
const permanent = ref(true);
</script>

<style scoped>
.home1 {
  display: flex;
}
</style>
