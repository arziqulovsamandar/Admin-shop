<template>
  <div style="overflow-x: scroll; overflow-y: hidden">
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.product") }}</h1>
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
    <v-table class="my-2">
      <thead style="background-color: #f2eae1">
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Price</th>
          <th class="text-left">Total Count</th>
          <th class="text-left">Manufactured Date</th>
          <th class="text-left">Life</th>
          <th class="text-left">QR Code</th>
          <th class="text-left">Value</th>
          <th class="text-left">Brand</th>
          <th class="text-left">Is Active</th>
          <th class="text-left">Unit of Measure</th>
          <th class="text-left">Created At</th>
          <th class="text-left">Updated At</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in products" :key="i">
          <td class="text-left">{{ product.id }}</td>
          <td class="text-left">{{ product.name }}</td>
          <td class="text-left">{{ product.description }}</td>
          <td class="text-left">{{ product.price }}</td>
          <td class="text-left">{{ product.total_count }}</td>
          <td class="text-left">{{ product.mfg }}</td>
          <td class="text-left">{{ product.life }}</td>
          <td class="text-left">{{ product.qr_code }}</td>
          <td class="text-left">{{ product.value }}</td>
          <td class="text-left">{{ product.brand }}</td>
          <td class="text-left">{{ product.is_active }}</td>
          <td class="text-left">{{ product.unit_of_measure }}</td>
          <td class="text-left">{{ product.createdAt }}</td>
          <td class="text-left">{{ product.updatedAt }}</td>
          <td>
            <v-icon
              class="my-2"
              @click="openProductModal(product.id)"
              :icon="'mdi-pencil'"
            >
            </v-icon>
            <v-icon
              class="my-2"
              @click="deleteProduct(product.id)"
              :icon="'mdi-delete'"
            >
            </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import productModal from "../admin/modals/productModal.vue";
import { useToast } from "vue-toastification";
const toast = useToast();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref, onMounted } from "vue";
import axios from "axios";

// const dialog = ref(false);

// const updateDialog = (value) => {
//   console.log(value);
//   dialog.value = value;
// };

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  total_count: number;
  mfg: string;
  life: string;
  qr_code: string;
  value: string;
  brand: string;
  is_active: boolean;
  rating: number;
  unit_of_measure: string;
  createdAt: Date;
  updatedAt: Date;
}

const products = ref<Product[]>([]);

const productId = ref<number | null>(null);

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
      `http://34.136.49.137:4000/api/product/${productId}`,
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
    const response = await axios.get("http://34.136.49.137:4000/api/product/all");
    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
