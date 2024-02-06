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
              <v-form @submit.prevent="save">
                <v-text-field
                  v-model="form.name"
                  label="Name"
                  outlined
                  class="my-2"
                ></v-text-field>
                <v-text-field
                  v-model="form.password"
                  label="Password"
                  type="password"
                  outlined
                  class="my-2"
                ></v-text-field>
                <v-btn type="submit" color="success" @click="save">Save</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { RT_ADMIN } from "@/constants/admin";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    async save() {
      if (this.form.name === "admin" && this.form.password === "123") {
        await this.$router.push({ name: RT_ADMIN });
      } else {
        toast.warning("Error");
      }
    },
  },
};
</script>
