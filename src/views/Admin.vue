<template>
  <h1>Admin </h1>
  <!-- <v-col v-if="loading" aligin="center">
    <v-progress-circular indeterminate color="priamry"></v-progress-circular>
  </v-col>
  <v-col v-if="!loading">
    <div style="display: flex; justify-content: center; font-size: 25px">
      <h2 style="color: rgb(40, 40, 33)">AdminPage</h2>
    </div>
    <v-app>
      <v-main>
        <v-container>
          <h2>Users</h2>
          <v-table class="my-2">
            <thead style="background-color: #f2eae1">
              <tr>
                <th class="text-left">First name</th>
                <th class="text-left">Phone number</th>
                <th class="text-left">Cours</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in users" :key="i">
                <td>{{ item.first_name }}</td>
                <td>{{ item.phone_number }}</td>
                <td>{{ item.cours }}</td>
              </tr>
            </tbody>
          </v-table>

          <v-btn
            icon="mdi-message"
            class="mb-4"
            style="position: fixed; bottom: 16px; right: 16px"
            @click="snackbar = !snackbar"
          ></v-btn>
          <v-sheet class="position-relative flex justify-end">
            <div
              class="position-absolute d-flex align-center justify-center w-100 h-100"
            ></div>
            <v-snackbar v-model="snackbar" location="end">
              <tbody>
                <tr class="max-width-200px" v-for="(item, i) in texte" :key="i">
                  <div>
                    <h3 style="color: rgb(238, 13, 39)">{{ item.role }}</h3>
                    <td class="mx-2 my-5">{{ item.soz }}</td>
                  </div>
                </tr>
              </tbody>
              <v-text-field
                label="Text input"
                class="mt-15"
                v-model="form.soz"
              ></v-text-field>
              <v-btn
                @click="send"
                size="large"
                color="orange-darken-2"
                icon="mdi-arrow-up-bold-box-outline"
              ></v-btn>
              <v-btn @click="onClick" class="mx-10">Close</v-btn>
            </v-snackbar>
          </v-sheet>
        </v-container>
      </v-main>
    </v-app>
  </v-col> -->
</template>

<script setup lang="ts">
// import axios from "axios";
// import { useToast } from "vue-toastification";
// const toast = useToast();
// export default {
//   name: "AdminPage",
//   data() {
//     return {
//       texte: [],
//       users: [],
//       loading: false,
//       form: {
//         soz: "",
//         role: "Admin",
//       },
//       text: [{ soz: " " }],
//       showSmallDialog: false,
//       snackbar: false,
//     };
//   },
//   mounted: async function () {
//     this.loading = true;
//     const response = await fetch("http://localhost:4000/api/user");
//     if (response.ok) {
//       this.users = await response.json();
//     } else {
//       console.error(`Serverdan xato: ${response.status}`);
//     }
//     this.loading = false;
//     const response1 = await fetch("http://localhost:4000/api/send");
//     if (response.ok) {
//       this.texte = await response1.json();
//     } else {
//       console.error(`Serverdan xato: ${response1.status}`);
//     }
//   },
//   methods: {
//     send() {
//       if (!this.form.soz) {
//         toast.warning("Data error");
//       } else {
//         fetch("http://localhost:4000/api/send", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ soz: this.form.soz, role: this.form.role }),
//         })
//           .then((response) => {
//             if (!response.ok) {
//               console.error(`Server error: ${response.status}`);
//             }
//             this.form.soz = "";
//           })
//           .catch((error) => {
//             console.error("Error sending data to the server:", error);
//           });
//         window.location.reload();
//       }
//     },
//     async onClick() {
//       fetch("http://localhost:4000/api/send", {
//         method: "DELETE",
//       });
//       window.location.reload();
//       this.snackbar = false;
//     },
//     toggleSmallDialog() {
//       this.showSmallDialog = !this.showSmallDialog;
//     },
//     closeSmallDialog() {
//       this.showSmallDialog = false;
//     },
//   },
// };
</script>
