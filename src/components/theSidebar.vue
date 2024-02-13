<template>
  <v-navigation-drawer
    color="grey-lighten-2"
    :permanent="permanent"
    class="text-left"
  >
    <aside>
      <nav>
        <ul>
          <router-link to="/products" class="nav-link">
            <li>{{ t("admin.product") }}</li></router-link
          >

          <router-link to="/categories" class="nav-link">
            <li>{{ t("admin.categories") }}</li></router-link
          >

          <router-link to="/order" class="nav-link"
            ><li>{{ t("admin.order") }}</li></router-link
          >
          <router-link to="/discount" class="nav-link"
            ><li>{{ t("admin.discount") }}</li></router-link
          >
          <router-link to="/media" class="nav-link"
            ><li>{{ t("admin.media") }}</li></router-link
          >
          <router-link to="/store" class="nav-link"
            ><li>{{ t("admin.store") }}</li></router-link
          >
          <router-link to="/cupon_code" class="nav-link"
            ><li>{{ t("admin.cupon_code") }}</li></router-link
          >
          <router-link to="/customer" class="nav-link"
            ><li>{{ t("admin.customer") }}</li></router-link
          >
        </ul>
      </nav>
    </aside>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
defineProps<{
  permanent: boolean;
}>();
</script>

<style scoped>
aside {
  margin: 35px;
}
.nav-link {
  text-decoration: none;
  padding-bottom: 5px;
  border-bottom: 1px solid transparent;
  font-weight: 600;
}
nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  margin-bottom: 5px;
  width: 150px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 7px;
}
</style>
