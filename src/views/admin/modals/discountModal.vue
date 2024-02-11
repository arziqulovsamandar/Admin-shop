<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <template v-slot:activator="{ props }">
        <v-button v-bind="props">New {{ t("admin.discount") }}</v-button>
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
                  label="Discount name*"
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  label="Persan tage"
                  v-model="persentage"
                ></v-text-field>
                <v-text-field
                  label="Start date"
                  v-model="start_date"
                ></v-text-field>
                <v-text-field
                  label="End date"
                  v-model="end_date"
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

import { useAdminStore } from "@/store/admin";
const { createDiscount } = useAdminStore();

const { t } = useI18n();

const dialog = ref(false);

const name = ref("");
const persentage = ref("");
const start_date = ref("");
const end_date = ref("");

const saveProduct = async () => {
  const produc = {
    name: name.value,
    persentage: parseInt(persentage.value),
    start_date: new Date(start_date.value).toISOString(),
    end_date: new Date(end_date.value).toISOString(),
  };
  await createDiscount(produc);
  dialog.value = false;
};
</script>
