<template>
  <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? '新增產品' : '編輯產品' }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="clearInput"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">請輸入主要產品圖網址</label>
                  <input type="text" class="form-control" placeholder="請輸入圖片連結" id="imageUrl"
                    v-model="curProduct.imageUrl">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
              </div>
              <div>
                <h6>新增其他產品圖</h6>
                <!-- 判斷tempProduct.imageUrl是一個陣列，如果沒有就不要顯示 -->
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <div v-for="(img, key) in tempProduct.imagesUrl" :key="key + 123">
                    <img :src="img" alt="" class="img-fluid">
                    <label for="imageUrl" class="form-label mt-3">請輸入圖片網址</label>
                    <input type="text" class="form-control mb-3" v-model="curProduct.imagesUrl[key]">
                    <!-- 綁索引位置才能在替換圖片網址時換成相對應位置的圖 -->
                  </div>
                  <button class="btn btn-outline-primary w-100 mb-3" v-if="tempProduct.imagesUrl.length === 0 ||
                    tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                    " @click.prevent="curProduct.imagesUrl.push('')">
                    新增圖片
                  </button>
                  <button class="btn btn-outline-danger mb-3 d-block w-100" v-else
                    @click.prevent="curProduct.imagesUrl.pop()">
                    刪除圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model.trim="curProduct.title">
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input id="category" type="text" class="form-control" placeholder="請輸入分類" v-model="curProduct.category">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="curProduct.unit">
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價"
                    v-model.number="curProduct.origin_price">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input id="price" type="number" min="0" class="form-control" placeholder="請輸入售價"
                    v-model.number="curProduct.price">
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述"
                  v-model="curProduct.description">
                    </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容"
                  v-model="curProduct.content">
                    </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0"
                    v-model="curProduct.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="clearInput">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="sendData">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tempProduct', 'updateProduct',],

  data() {
    return {
      productModal: null,//這個是為了處理bs的問題  
      curProduct: {},
      isNew: false,
    }
  },

  watch: {
    tempProduct() {
      this.curProduct = { ...this.tempProduct };
    }
  },

  methods: {
    openModal() {
      this.productModal.show()
    },
    closeModal() {
      this.productModal.hide()
    },
    clearInput() {
      this.$emit('clear-input')
    },
    sendData() {
      this.$emit('send-data', this.curProduct)
    }
  },

  mounted() {
    this.productModal = new this.$bs.Modal( //建立 modal 實體
      document.getElementById("productModal"),
      {
        keyboard: false, //禁止 user 透過 Esc 按鍵關閉
        backdrop: 'static' //禁止 user 點擊 modal 以外的地方關閉視窗
      }
    )
  },

}
</script>