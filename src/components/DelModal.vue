<template>
  <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除 {{ tempProduct?.item?.title }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal" ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct?.item?.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="closeModal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tempProduct', 'delProduct','tempPvalue'],

  data() {
    return {
      delProductModal: null,
      curProduct: {},
    }
  },

  methods: {
    openModal() {
      this.delProductModal.show()
    },
    closeModal() {
      this.delProductModal.hide()
    }
  },

  mounted() {
    console.log(this.tempProduct, 133);
    this.delProductModal = new this.$bs.Modal(
      document.getElementById("delProductModal"),
      {
        keyboard: false,
        backdrop: 'static'
      }
    )
  },
}
</script>