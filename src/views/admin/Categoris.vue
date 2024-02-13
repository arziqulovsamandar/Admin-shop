<template>
  <div v-if="loading"><Loading /></div>
  <div v-else style="overflow-x: scroll; overflow-y: hidden">
    <div style="display: flex; justify-content: space-between">
      <div>
        <h1 style="margin: 5px">{{ t("admin.categories") }}</h1>
      </div>
      <div style="display: flex; justify-content: space-between">
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
    </div>
    <v-table class="my-2" style="overflow-x: auto">
      <thead style="background-color: #f2eae1">
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Image</th>
          <th class="text-left">Created At</th>
          <th class="text-left">Updated At</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(categorie, i) in category"
          :key="i"
          @click="singil(categorie.id)"
        >
          <td class="text-left">{{ categorie.id }}</td>
          <td class="text-left">{{ categorie.name }}</td>
          <td class="text-left">{{ categorie.description }}</td>
          <td class="text-left">
            {{ categorie.image }}
          </td>
          <td class="text-left">{{ categorie.createdAt }}</td>
          <td class="text-left">{{ categorie.updatedAt }}</td>
          <td>
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent width="auto">
                <template v-slot:activator="{ props }">
                  <v-icon class="my-2" v-bind="props" :icon="'mdi-delete'">
                  </v-icon>
                </template>
                <v-card>
                  <v-card-title class="text-h5">
                    Delete Products?
                  </v-card-title>
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
                      @click="deleteProduct(categorie.id)"
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
import productModal from "@/views/admin/modals/categoriesModal.vue";
import Loading from "@/components/loading.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import router from "@/router";
import { useAdminStore } from "@/store/admin";
const dialog = ref(false);

const { deleteCategory } = useAdminStore();
import { useAdmin } from "@/composables/admin";

const { category, loading } = useAdmin();

const singil = (categoryId: number) => {
  router.push({
    path: "/singilcategory",
    query: { id: categoryId },
  });
};

const deleteProduct = async (id: number) => {
  deleteCategory(id);
  dialog.value = false;
};
</script>
