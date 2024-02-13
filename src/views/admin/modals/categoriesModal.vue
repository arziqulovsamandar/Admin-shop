<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <template v-slot:activator="{ props }">
        <v-button v-bind="props"> New {{ t("admin.categories") }}</v-button>
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
                <v-file-input
                  label="Images"
                  v-model="image"
                  @change="handleFileChange"
                ></v-file-input>
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
const { createCategory } = useAdminStore();

const { t } = useI18n();

const dialog = ref(false);

const name = ref("");
const description = ref("");
const image = ref("");

const handleFileChange = (event: any) => {
  const file = event.target.files[0];
  image.value = file;
};

const saveProduct = async () => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("description", description.value);
  formData.append("image", image.value);
  await createCategory(formData);
  dialog.value = false;
};
</script>
