<template>
  <div id="app">
    <!-- 產品列表 -->
    <div class="container">
      <div class="mt-4">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td style="width: 200px">
                <div style="
                  height: 150px;
                  background-size: cover;
                  background-position: center;
                  " :style="{
                    backgroundImage: `url(${product.imageUrl})`
                  }"></div>
              </td>
              <td>
                {{ product.title }}
              </td>
              <td>
                <div class="h5" v-if="product.origin_price === product.price">{{ product.price }} 元</div>
                <div v-else>
                  <del class="h6">原價 {{ product.origin_price }} 元</del>
                  <div class="h5">現在只要 {{ product.price }} 元</div>
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="openModal(product)">
                    <i class="fas fa-spinner fa-pulse"></i>
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="product.id === status.addCartLoading"
                    @click="addToCart(product.id)">
                    <span
                      class="spinner-border spinner-border-sm"
                      aria-hidden="true"
                      v-if="product.id === status.addCartLoading"></span>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 購物車列表 -->
          <div class="text-end">
            <button
              class="btn btn-outline-danger"
              type="button"
              @click="removeAllCart"
              >
              清空購物車
            </button>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 200px">數量/單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cart in carts?.carts" :key="cart.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(cart.id)"
                    :disabled="status.cartQtyLoading === cart.id"
                    >
                    <i class="fas fa-spinner fa-pulse"></i>
                    x
                  </button>
                </td>
                <td>
                  {{ cart?.product?.title }}
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        :disabled="cart.qty === 1"
                        v-if="cart.qty > 1"
                        @click="cart.qty--;changeCartQty(cart, cart.qty)"
                        > - 
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        v-else
                        @click="removeCartItem(cart.id)"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                      </button>
                      <input min="1" type="number"
                        class="form-control"
                        v-model="cart.qty"
                        :disabled="cart.id === status.cartQtyLoading"
                        readonly
                        />
                        <span class="input-group-text" id="basic-addon2">
                          {{ cart.product.unit }}
                        </span>
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        @click="cart.qty++;changeCartQty(cart, cart.qty)"
                        > + 
                      </button>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  {{ cart?.total }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ carts?.final_total }} 元</td>
              </tr>
            </tfoot>
          </table>
      </div>
    </div>
  
    <!-- 訂單資訊輸入表 -->
    <div class="container">
      <div class="my-5 row justify-content-center">
        <v-form @submit="onSubmit" ref="form" class="col-md-6" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field id="email" name="email" type="email" class="form-control" rules="email|required"
              :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email">
            </v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名" rules="required">
            </v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field id="tel" name="電話" type="text" class="form-control" :rules="isPhone"
              :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話">
            </v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址" rules="required">
            </v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea id="message" class="form-control" cols="30" rows="10"
              placeholder="有什麼想跟我們說的都歡迎留言(´▽`ʃ♡ƪ)"></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </v-form>
      </div>
    </div>
    <!-- 查看更多 modal  -->
    <user-product-more-modal
      :temp-data="tempData"
      :add-to-cart="addToCart"
      ref="userProductMoreModal"
     />
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
import UserProductMoreModal from '@/components/UserProductMoreModal.vue';
import { defineRule, configure } from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import * as AllRules from '@vee-validate/rules';

// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';

// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate 
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

export default {
  data() {
    return {
      products: null,
      tempData: {},
      userPrductMoreModal: null,
      carts: {},
      status: {
        addCartLoading:'',
        cartQtyLoading:'',
      }
    };
  },
  methods: {
    //前台客戶取得產品列表
    getProducts() {
      this.axios.get(`${VITE_APP_URL}V2/api/${VITE_APP_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products
        })
        .catch(err => {
          console.log(err);
        })
    },
    //打開 UserProductMoreModal
    openModal(product){
      this.$refs.userProductMoreModal.openModal();
      this.tempData = product;
    },
    //加入購物車
    addToCart( productId, qty = 1 ) {
      const order = {
        product_id: productId,
        qty,
      };
      this.status.addCartLoading = productId;
      this.axios
        .post(`${VITE_APP_URL}V2/api/${VITE_APP_PATH}/cart`, { data: order } )
        .then(res => {
          console.log(res.data.message);
          this.status.addCartLoading = '';//加入購物車後清掉loading狀態
          this.getCart();
          this.$refs.userProductMoreModal.closeModal();
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    },
    //取得購物車列表
    getCart(){
      this.axios
        .get(`${VITE_APP_URL}V2/api/${VITE_APP_PATH}/cart`)
        .then(res => {
          console.log(res);
          this.carts = res.data.data;
          console.log(this.carts);
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    },
    //調整購物車數量
    changeCartQty( item, qty = 1 ){
      const order = {
        product_id: item.product_id,
        qty,
      };
      this.status.cartQtyLoading = item.id;
      this.axios
        .put(`${VITE_APP_URL}V2/api/${VITE_APP_PATH}/cart/${item.id}`, { data: order })
        .then(res => {
          console.log(res.data.message);
          this.status.cartQtyLoading = '';//清掉loading狀態
          this.getCart();
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    },
    //刪除單一品項
    removeCartItem(id) {
      this.status.cartQtyLoading = id;
      this.axios
        .delete(`${VITE_APP_URL}V2/api/${VITE_APP_PATH}/cart/${id}`)
        .then(res => {
          console.log(res);
          this.status.cartQtyLoading = '';//清掉loading狀態
          this.getCart();
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    },
    //刪除全品項
    removeAllCart() {
      this.axios
        .delete(`${VITE_APP_URL}V2/api/${VITE_APP_PATH}/carts`)
        .then(res => {
          console.log(res.data.message);
          this.getCart();
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
    },

    //以下為驗證
    onSubmit() {
      //刪除輸入的input資訊
      this.$refs.form.resetForm();
      //刪除輸入的留言資訊
      document.getElementById('message').value = '';
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  components: {
    UserProductMoreModal,
  },
  mounted() {
    this.getProducts();
    this.getCart()
  }
}
</script>
