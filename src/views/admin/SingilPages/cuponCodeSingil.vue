<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <h2 style="margin: 10px">Cupon code</h2>
      <a href="/cupon_code" class="button">Home</a>
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
          <button v-bind="props">Update Cupon code</button>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Update Cupon code</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Cupon code*"
                    v-model="name"
                  ></v-text-field>
                  <v-text-field
                    label="Persan tage"
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
            <v-btn color="blue-darken-1" variant="text" @click="updateProducts">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <div class="tables">
      <h1>{{ singilcupon_code.name }}</h1>
      <p>Persentage: {{ singilcupon_code.persentage }}</p>
      <p>End date:{{ singilcupon_code.end_date }}</p>
      <p>Created at: {{ singilcupon_code.createdAt }}</p>
      <p>Updated at: {{ singilcupon_code.updatedAt }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useAdmin } from "@/composables/admin";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const dialog = ref(false);
const id = route.query.id;
const { singilcupon_code } = useAdmin();

const name = ref("");
const persentage = ref("");
const end_date = ref("");

import { useAdminStore } from "@/store/admin";
const { getSingleCuponCode, updateCuponCode } = useAdminStore();

onMounted(async () => {
  await getSingleCuponCode(id);
});

const updateProducts = async () => {
  const produc = {
    name: name.value,
    persentage: parseInt(persentage.value),
    end_date: new Date(end_date.value).toISOString(),
  };
  await updateCuponCode(id, produc);
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
