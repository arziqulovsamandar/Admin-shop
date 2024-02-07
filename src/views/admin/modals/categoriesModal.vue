<template>
  <v-row justify="center">
    <v-dialog :v-model="dialog" persistent width="500">
      <template v-slot:activator="{ props }">
        <v-button v-bind="props"> {{ t("admin.addCourse") }}</v-button>
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
                  label="Categories name*"
                  v-model="name"
                ></v-text-field>
                <v-text-field
                  label="Description"
                  v-model="description"
                ></v-text-field>
                <v-text-field label="Images" v-model="image"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeModal">
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

interface Props {
  dialog: boolean;
}

const props: Props = defineProps();

const dialog = ref(props.dialog);

console.log(dialog);
const closeModal = () => {
  dialog.value = false;
};

const name = ref("");
const description = ref("");
const image = ref("");

const saveProduct = async () => {
  try {
    const produc = {
      name: name.value,
      description: description.value,
      image: image.value,
    };
    const response = await axios.post(
      "http://localhost:4000/api/category/create",
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
      image: image.value,
    };
    const response = await axios.post(
      `http://localhost:4000/api/category/${productId}`,
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
