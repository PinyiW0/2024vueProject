<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }" @click.prevent="getProducts(1)">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
        :class="{
          active: page === pages.current_page
        }"
        v-for="page in pages.total_pages" :key="page + 'forPage'">
        <a class="page-link" href="#"
          @click.prevent="getProducts(page)">{{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }" >
        <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pages.total_pages)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    props: ['pages', 'getProducts'],
  }
</script>
