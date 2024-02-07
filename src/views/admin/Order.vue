<template>
  <div style="overflow-x: scroll; overflow-y: hidden">
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.order") }}</h1>
      </div>
      <div>
        <productModal
          style="
            background-color: burlywood;
            color: white;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 5px;
            width: auto;
            cursor: pointer;
          "
        />
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
          <th class="text-left">Action</th>
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
          <td class="flex">
            <v-icon
              @click="openProductModal(product.id)"
              class="my-2 mx-4"
              :icon="'mdi-pencil'"
            >
            </v-icon>
            <v-icon @click="deleteProduct(product.id)" :icon="'mdi-delete'">
            </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import productModal from "../admin/modals/orderModal.vue";
import { useToast } from "vue-toastification";
const toast = useToast();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref, onMounted } from "vue";
import axios from "axios";

interface Order {
  id: number;
  phone: string;
  order_date: string;
  status: string;
  total_count: number;
  payment_type: string;
  userAddress_id: number;
  basket_id: number;
  user_id: number;
  product_id: number;
  cupon_code_id: number;
  createdAt: Date;
}

const order = ref<Order[]>([]);

// const dialog = ref(false);
// const productId = ref<number | null>(null);

const openProductModal = (id: number) => {
  // productId.value = id;
  // dialog.value = true;
};

const deleteProduct = async (productId: number) => {
  try {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      window.location.href = "/login";
      return;
    }
    const response = await axios.delete(
      `http://34.136.49.137:4000/api/order/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    toast.success("Delete Product");
  } catch (error) {
    toast.warning("Error");
  }
};

onMounted(async () => {
  try {
    const response = await axios.get("http://34.136.49.137:4000/api/order/all");
    order.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
