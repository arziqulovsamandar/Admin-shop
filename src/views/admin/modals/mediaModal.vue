<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <template v-slot:activator="{ props }">
        <v-button v-bind="props">New {{ t("admin.media") }}</v-button>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  label="Media link*"
                  v-model="media_link"
                ></v-text-field>
                <v-text-field
                  label="Product id"
                  v-model="product_id"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="saveProduct">
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const dialog = ref(false);

import { useAdminStore } from "@/store/admin";
const { createMedia } = useAdminStore();

const media_link = ref("");
const product_id = ref("");

const saveProduct = async (productId: number) => {
  const produc = {
    media_link: media_link.value,
    product_id: parseInt(product_id.value),
  };
  await createMedia(produc);
  dialog.value = false;
};
</script>
