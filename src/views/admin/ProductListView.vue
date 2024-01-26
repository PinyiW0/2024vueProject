<template>
  <main>
    <div id="app">
        <div class="container">
          <div class="text-end mt-4">
            <button class="btn btn-primary" @click.prevent="openModal('new')">
              建立新的產品
            </button>
          </div>
          <table class="table table-hover mt-4">
            <thead>
              <tr>
                <th width="120">
                  分類
                </th>
                <th>產品名稱</th>
                <th width="120">
                  原價
                </th>
                <th width="120">
                  售價
                </th>
                <th width="100">
                  是否啟用
                </th>
                <th width="120">
                  編輯
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in productList" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-end">{{ item.origin_price }}</td>
                <td class="text-end">{{ item.price }}</td>
                <td>
                  <span class="text-success" v-if="item.is_enabled">啟用</span>
                  <span class="text-danger" v-else>未啟用</span>
                </td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary btn-sm" @click.prevent="openModal('edit', item)">
                      編輯
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="openModal('delete', item)">
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Modal -->
        <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
             aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content border-0">
              <div class="modal-header bg-dark text-white">
                <h5 id="productModalLabel" class="modal-title">
                  <span>新增產品</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="mb-2">
                      <div class="mb-3">
                        <label for="imageUrl" class="form-label">輸入圖片網址</label>
                        <input type="text" class="form-control"
                               placeholder="請輸入圖片連結" id="imageUrl" v-model="tempProduct.imageUrl">
                      </div>
                      <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
                    </div>
                    <div>
                      <button class="btn btn-outline-primary btn-sm d-block w-100" @click.prevent="createImages">
                        新增圖片
                      </button>
                    </div>
                    <div v-if="tempProduct.imagesUrl">
                      <button class="btn btn-outline-danger btn-sm d-block w-100" @click="createImages">
                        刪除圖片
                      </button>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="mb-3">
                      <label for="title" class="form-label">標題</label>
                      <input id="title" type="text" class="form-control" placeholder="請輸入標題">
                    </div>

                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label for="category" class="form-label">分類</label>
                        <input id="category" type="text" class="form-control"
                               placeholder="請輸入分類">
                      </div>
                      <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">單位</label>
                        <input id="unit" type="text" class="form-control" placeholder="請輸入單位">
                      </div>
                    </div>

                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label for="origin_price" class="form-label">原價</label>
                        <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價">
                      </div>
                      <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">售價</label>
                        <input id="price" type="number" min="0" class="form-control"
                               placeholder="請輸入售價">
                      </div>
                    </div>
                    <hr>

                    <div class="mb-3">
                      <label for="description" class="form-label">產品描述</label>
                      <textarea id="description" type="text" class="form-control"
                                placeholder="請輸入產品描述">
                    </textarea>
                    </div>
                    <div class="mb-3">
                      <label for="content" class="form-label">說明內容</label>
                      <textarea id="description" type="text" class="form-control"
                                placeholder="請輸入說明內容">
                    </textarea>
                    </div>
                    <div class="mb-3">
                      <div class="form-check">
                        <input id="is_enabled" class="form-check-input" type="checkbox"
                               :true-value="1" :false-value="0">
                        <label class="form-check-label" for="is_enabled">是否啟用</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                  取消
                </button>
                <button type="button" class="btn btn-primary" @click="updateProduct">
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
             aria-labelledby="delProductModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content border-0">
              <div class="modal-header bg-danger text-white">
                <h5 id="delProductModalLabel" class="modal-title">
                  <span>刪除產品</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                是否刪除
                <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                  取消
                </button>
                <button type="button" class="btn btn-danger" @click="delProduct">
                  確認刪除
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
    </div>

  </main>
</template>

<script>
import { RouterView } from 'vue-router';
import axios from 'axios';
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      products: [],
      isNew: false, //表示當前 Modal 是新增或編輯的判斷依據 
      tempProduct: {},
      productModal: null,
      delProductModal: null
    };
  },

  methods: {
    checkAdmin() { //確認是否為管理員帳號
      //取得token
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)leleToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      //預設帶入token
      axios.defaults.headers.common['Authorization'] = token;

      this.axios.post(`${VITE_URL}V2/api/user/check`)
        .then((res) => {
          this.getProducts();
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push({ name: 'LoginView' });
        })
    },
    getProducts() { //取得產品
      this.axios.get(`${VITE_URL}V2/api/${VITE_PATH}/admin/products`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    openProduct(item) {
      this.tempProduct = item;
    },
    openModal(status, item){ //打開編輯視窗，status 判斷目前點擊的是 新增/編輯/刪除 按鈕；item 代表當前點擊的產品資料
      if (status === 'new'){
        //點擊新增btn，清空當前產品內容，開啟productModal
        this.tempProduct = {};
        this.isNew = true;
        this.productModal.show();
      } else if (status === 'edit'){
        //點擊新增btn，將當前產品內容傳入，目的為串接刪除 API 需要取得產品的 id，開啟productModal
        this.tempProduct = {...item};
        this.isNew = false;
        this.productModal.show();
      } else if (status === 'delete') {
        this.tempProduct = { ...item };
        this.delProductModal.show();
      }
    },
    updateProduct(){
      console.log(this.tempProduct.id);
      if (this.isNew){ //新增產品
        this.axios.post(`${VITE_URL}V2/api/${VITE_PATH}/admin/product`, this.tempProduct)
          .then((res) => {
            alert("產品新增成功");
            this.productModal.hide();
            this.getProducts();

          })
          .catch((err) => {
            alert(err.response.data.message);
          })
      } else { //修改產品
        this.axios.put(`${VITE_URL}V2/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`, this.tempProduct)
          .then((res) => {
            alert("產品更新成功");
            this.productModal.hide();
            this.getData();
          })
          .catch((err) => {
            alert(err.response.data.message);
          })
      }
    },
    delProduct(){
      this.axios.delete(`${VITE_URL}V2/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`)
        .then((res) => {
          alert(res.data.meassage);
          this.delProductModal.hide();
          this.getData();
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    createImages(){ //這邊不會
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    }
  },

  mounted() {
    this.checkAdmin()
    //產品 modal
    this.productModal = new this.$bs.Modal( //建立 modal 實體
      document.getElementById("productModal"),
      {
        keyboard: false, //禁止 user 透過 Esc 按鍵關閉
        backdrop: 'static' //禁止 user 點擊 modal 以外的地方關閉視窗
      }
    );
    this.delProductModal = new this.$bs.Modal(
      document.getElementById("delProductModal"),
      {
        keyboard: false,
        backdrop: 'static'
      }
    )
  }
}

</script>
