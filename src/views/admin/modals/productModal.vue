<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <template v-slot:activator="{ props }">
        <button v-bind="props">
          {{ t("admin.addCourse") }}
        </button>
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
                  label="Product name*"
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  label="Description"
                  v-model="description"
                ></v-text-field>
                <v-text-field label="Price" v-model="price"></v-text-field>
                <v-text-field
                  label="Total count"
                  v-model="total_count"
                ></v-text-field>
                <v-text-field label="mfg" v-model="mfg"></v-text-field>
                <v-text-field label="Life" v-model="life"></v-text-field>
                <v-text-field label="qr_code" v-model="qr_code"></v-text-field>
                <v-text-field label="Value" v-model="value"></v-text-field>
                <v-text-field label="Brand" v-model="brand"></v-text-field>
                <v-text-field label="Rating" v-model="rating"></v-text-field>
                <v-text-field
                  label="Unit_of_measure"
                  v-model="unit_of_measure"
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
import { useToast } from "vue-toastification";
import axios from "axios";
const toast = useToast();

const { t } = useI18n();
const dialog = ref(false);
// defineProps<{
//   dialog: boolean;
//   productId: number;
// }>();
// const emit = defineEmits(["update:dialog"]);

// const openenDialog = () => {
//   // emit("update:dialog", true);
// };

const name = ref("");
const description = ref("");
const price = ref("");
const total_count = ref("");
const mfg = ref("");
const life = ref("");
const qr_code = ref("");
const value = ref("");
const brand = ref("");
const rating = ref("");
const unit_of_measure = ref("");

const saveProduct = async () => {
  try {
    const produc = {
      name: name.value,
      description: description.value,
      price: price.value,
      total_count: parseInt(total_count.value),
      mfg: mfg.value,
      life: life.value,
      qr_code: qr_code.value,
      value: value.value,
      brand: brand.value,
      rating: parseInt(rating.value),
      unit_of_measure: unit_of_measure.value,
    };
    const response = await axios.post(
      "http://34.136.49.137:4000/api/product/create",
      produc
    );
    dialog.value = false;
    toast.success("Create Product");
  } catch (error) {
    toast.warning("Error");
    console.log(error);
  }
};

const updateProduct = async () => {
  try {
    const produc = {
      name: name.value,
      description: description.value,
      price: price.value,
      total_count: parseInt(total_count.value),
      mfg: mfg.value,
      life: life.value,
      qr_code: qr_code.value,
      value: value.value,
      brand: brand.value,
      rating: parseInt(rating.value),
      unit_of_measure: unit_of_measure.value,
    };
    const response = await axios.post(
      "http://34.136.49.137:4000/api/product/create",
      produc
    );
    dialog.value = false;
    toast.success("Create Product");
  } catch (error) {
    toast.warning("Error");
    console.log(error);
  }
};
</script>
