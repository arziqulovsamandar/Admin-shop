<template>
  <div v-if="loading"><Loading /></div>
  <div v-else>
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.order") }}</h1>
      </div>
    </div>
    <v-table class="my-2" style="overflow-x: auto">
      <thead style="background-color: #f2eae1">
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Order date</th>
          <th class="text-left">Created At</th>
          <th class="text-left">Status</th>
          <th class="text-left">Payment type</th>
          <th class="text-left">UserAddres id</th>
          <th class="text-left">Basket id</th>
          <th class="text-left">User id</th>
          <th class="text-left">cupon code</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in order" :key="i">
          <td class="text-left">{{ product.id }}</td>
          <td class="text-left">{{ product.phone }}</td>
          <td class="text-left">{{ product.order_date }}</td>
          <td class="text-left">{{ product.createdAt }}</td>
          <td class="text-left">{{ product.status }}</td>
          <td class="text-left">{{ product.payment_type }}</td>
          <td class="text-left">{{ product.userAddress_id }}</td>
          <td class="text-left">{{ product.basket_id }}</td>
          <td class="text-left">{{ product.user_id }}</td>
          <td class="text-left">{{ product.cupon_code_id }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import Loading from "@/components/loading.vue";
import { useAdmin } from "@/composables/admin";
const { order, loading } = useAdmin();
</script>
