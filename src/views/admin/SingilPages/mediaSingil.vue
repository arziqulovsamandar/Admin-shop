<template>
  <div v-if="loading"><Loading /></div>
  <div v-else>
    <div style="display: flex; justify-content: space-between">
      <h2 style="margin: 10px">Singil Media</h2>
    </div>
    <v-row
      justify="center"
      style="
        background-color: burlywood;
        color: white;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 5px;
        width: 200px;
        cursor: pointer;
      "
    >
      <v-dialog v-model="dialog" persistent width="500">
        <template v-slot:activator="{ props }">
          <button v-bind="props">Update media</button>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Update media</span>
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
            <v-btn color="blue-darken-1" variant="text" @click="updateProducts">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <div class="tables">
      <!-- <h1>{{ singilMedia.media_link }}</h1> -->
      <td class="text-left">
        <img
          style="width: 200px; height: 200px"
          :src="singilMedia.media_link"
          alt="Rasm"
        />
      </td>
      <p>Persentage: {{ singilMedia.product_id }}</p>
      <p>Created at: {{ singilMedia.createdAt }}</p>
      <p>Updated at: {{ singilMedia.updatedAt }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import Loading from "@/components/loading.vue";
import { ref } from "vue";
import { useAdmin } from "@/composables/admin";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const dialog = ref(false);
const id = route.query.id;
const { singilMedia, loading } = useAdmin();

const media_link = ref("");
const product_id = ref("");

import { useAdminStore } from "@/store/admin";
const { getSingleMedia, updateMedia } = useAdminStore();

onMounted(async () => {
  await getSingleMedia(id);
});

const updateProducts = async () => {
  const produc = {
    media_link: media_link.value,
    product_id: parseInt(product_id.value),
  };

  await updateMedia(id, produc);
  dialog.value = false;
};
</script>
<style scoped>
.tables h1 {
  margin: 10px;
  color: rgb(63, 63, 60);
}
.tables p {
  color: rgb(149, 43, 43);
  font-weight: 400;
  margin: 5px;
}
.button {
  width: 60px;
  height: 30px;
  background-color: rgb(76, 209, 46);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
  padding: 5px;
}
</style>
