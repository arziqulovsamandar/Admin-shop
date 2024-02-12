<template>
  <div style="overflow-x: scroll; overflow-y: hidden">
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.customer") }}</h1>
      </div>
    </div>
    <v-table class="my-2" style="overflow-x: auto">
      <thead style="background-color: #f2eae1">
        <tr>
          <th class="text-left">User Id</th>
          <th class="text-left">User name</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Is active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in users" :key="i">
          <td class="text-left">{{ product.id }}</td>
          <td class="text-left">{{ product.full_name }}</td>
          <td class="text-left">{{ product.phone }}</td>
          <td class="text-left">{{ product.is_active }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref } from "vue";

import { useAdmin } from "@/composables/admin";
const { users } = useAdmin();

const dialog = ref(false);
</script>
