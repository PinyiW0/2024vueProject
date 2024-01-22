<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default {
  mounted() {
    console.log(this.$bs)
  }
}
</script>

<template>
  <header>
   <div class="container">
        <nav class="my-4">
          <!-- <RouterLink class="me-3 my-3" to="/">Home</RouterLink>
          <RouterLink class="me-3 my-3" to="/about">About</RouterLink> -->
          <RouterLink class="me-3 my-3" to="/LoginView">AdminLogin</RouterLink>
          <RouterLink to="/productList">ProductList</RouterLink>
        </nav>
      </div>
  </header>

  <RouterView />
</template>

