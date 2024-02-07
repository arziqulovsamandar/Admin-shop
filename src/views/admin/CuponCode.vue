<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.cupon_code") }}</h1>
      </div>
      <!-- <div>
        <productModal
          :dialog="dialog"
          :productId="productId"
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
      </div> -->
    </div>
    <v-table class="my-2" style="overflow-x: auto">
      <thead style="background-color: #f2eae1">
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Persen tage</th>
          <th class="text-left">End date</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cupons, i) in cupon" :key="i">
          <td class="text-left">{{ cupons.name }}</td>
          <td class="text-left">{{ cupons.persentage }}</td>
          <td class="text-left">{{ cupons.end_date }}</td>
          <td class="flex">
            <v-icon
              @click="openProductModal(cupons.id)"
              class="my-2 mx-4"
              :icon="'mdi-pencil'"
            >
            </v-icon>
            <v-icon @click="deleteProduct(cupons.id)" :icon="'mdi-delete'">
            </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
// import productModal from "../admin/modals/productModal.vue";
import { useToast } from "vue-toastification";
const toast = useToast();
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref, onMounted } from "vue";
import axios from "axios";

interface Cupon {
  id: number;
  name: string;
  persentage: string;
  end_date: Date;
}

const cupon = ref<Cupon[]>([]);

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
      `http://localhost:4000/api/cupon_code/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    toast.success("Delete Cupon");
  } catch (error) {
    toast.warning("Error");
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/cupon_code/all"
    );
    cupon.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>
