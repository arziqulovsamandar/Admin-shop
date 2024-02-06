<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 class="text-center">Login</h1>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="send">
                <v-text-field
                  v-model="email"
                  label="email"
                  outlined
                  class="my-2"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  outlined
                  class="my-2"
                ></v-text-field>
                <v-btn type="submit" color="success" @click="send">Save</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../store/auth";

const store = useAuthStore();

const email = ref("");
const password = ref("");

const send = async () => {
  let payload = { email: email.value, password: password.value };
  await store.authLogin(payload);
};
</script>

<style lang="scss" scoped></style>
