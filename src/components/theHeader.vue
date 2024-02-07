<template>
  <div class="d-flex home12" style="background-color: rgb(234, 236, 173)">
    <h3 style="font-weight: 700; color: blue; font-size: 26px">Admin</h3>
    <langSwitcher />
  </div>
</template>

<script setup lang="ts">
import langSwitcher from "./langSwitcher.vue";
</script>

<style scoped>
.home12 {
  padding: 10px;
  justify-content: space-between;
}
</style>
