<template>
  <div v-if="loading"><Loading /></div>
  <div v-else>
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.cupon_code") }}</h1>
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
          <th class="text-left">Name</th>
          <th class="text-left">Persen tage</th>
          <th class="text-left">End date</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(cupons, i) in cupon_code"
          :key="i"
          @click="singil(cupons.id)"
        >
          <td class="text-left">{{ cupons.id }}</td>
          <td class="text-left">{{ cupons.name }}</td>
          <td class="text-left">{{ cupons.persentage }}</td>
          <td class="text-left">{{ cupons.end_date }}</td>
          <td>
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent width="auto">
                <template v-slot:activator="{ props }">
                  <v-icon class="my-2" v-bind="props" :icon="'mdi-delete'">
                  </v-icon>
                </template>
                <v-card>
                  <v-card-title class="text-h5"> Delete Cupons? </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="green-darken-1"
                      variant="text"
                      @click="deleteProducts(cupons.id)"
                    >
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import productModal from "../admin/modals/cuponCodeModal.vue";
import Loading from "@/components/loading.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { ref } from "vue";

import router from "@/router";
import { useAdminStore } from "@/store/admin";
import { useAdmin } from "@/composables/admin";

const { deleteCuponCode } = useAdminStore();
const { cupon_code, loading } = useAdmin();

const dialog = ref(false);

const singil = (productId: number) => {
  router.push({
    path: "/singilcupon_code",
    query: { id: productId },
  });
};

const deleteProducts = (productId: number) => {
  deleteCuponCode(productId);
  dialog.value = false;
};
</script>
