<script>
export default {
  mounted() {
    console.log(this.$bs)
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink to="/home">
          <a class="navbar-brand" href="#">Navbar</a>
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/home" class="nav-link">首頁</RouterLink>
            </li>
            <li class="nav-item">
               <RouterLink to="/products" class="nav-link">前台產品列表頁</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/cart" class="nav-link">購物車頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/login" class="nav-link">後台登入頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/productlist" class="nav-link">後台產品列表頁</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

