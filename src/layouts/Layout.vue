<template>
  <div>
    <TheHeader class="header"/>
    <div class="home1">
      <TheSidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/theHeader.vue";
import TheSidebar from "@/components/theSidebar.vue";
</script>

<style scoped>
.home1 {
  display: flex;
}
</style>
