<template>
  <aside>
    <nav>
      <ul>
        <router-link to="/products" class="nav-link">
          <li>Product</li></router-link
        >

        <router-link to="/categories" class="nav-link">
          <li>Categories</li></router-link
        >

        <router-link to="/order" class="nav-link"><li>Order</li></router-link>
        <router-link to="/blog" class="nav-link"><li>Blog</li></router-link>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped>
aside {
  background-color: #9ea1a1;
  color: #ffffff;
  padding: 10px;
  width: 250px;
  height: 100vh;
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
