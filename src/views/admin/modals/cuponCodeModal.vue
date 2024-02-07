src/views/admin/modals/mediaModal.vu
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <template v-slot:activator="{ props }">
        <v-button v-bind="props">New {{ t("admin.cupon_code") }}</v-button>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field label="Cupon code*" v-model="name"></v-text-field>
                <v-text-field
                  label="Persantage"
                  v-model="persentage"
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
          <v-btn color="blue-darken-1" variant="text" @click="updateProduct">
            Update
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
import { useToast } from "vue-toastification";
import axios from "axios";
const toast = useToast();

const { t } = useI18n();

const dialog = ref(false);

const name = ref("");
const persentage = ref("");
const end_date = ref("");

const saveProduct = async (productId: number) => {
  try {
    const produc = {
      name: name.value,
      persentage: parseInt(persentage.value),
      end_date: new Date(end_date.value).toISOString(),
    };
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      window.location.href = "/login";
      return;
    }

    const response = await axios.post(
      "http://34.136.49.137:4000/api/cupon_code/create",
      produc,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    dialog.value = false;
    toast.success("Create Cupon code");
  } catch (error) {
    toast.warning("Error");
    console.log(error);
  }
};

const updateProduct = async () => {
  try {
    const formData = {
      name: name.value,
      persantage: parseInt(persentage.value),
      end_date: new Date(end_date.value).toISOString(),
    };
    const response = await axios.post(
      `http://34.136.49.137:4000/api/cupon_code/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dialog.value = false;
    toast.success("Create Product");
  } catch (error) {
    toast.warning("Error");
    console.log(error);
  }
};
</script>
