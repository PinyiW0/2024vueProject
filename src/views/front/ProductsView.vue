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
        </table>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td style="width: 200px">
              <div
              style="
                 height: 150px;
                 background-size: cover;
                 background-position: center;
                 "
                 :style="{
                  backgroundImage:`url(${product.imageUrl})`
                 }"
                 ></div>
            </td>
            <td>
              {{ }}
            </td>
            <td>
              <div class="h5">{{ }} 元</div>
              <del class="h6">原價 {{ }} 元</del>
              <div class="h5">現在只要 {{ }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-secondary">
                  <i class="fas fa-spinner fa-pulse"></i>
                  查看更多
                </button>
                <button type="button" class="btn btn-outline-danger">
                  <i class="fas fa-spinner fa-pulse"></i>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <!-- 購物車列表 -->
        <div class="text-end">
          <button class="btn btn-outline-danger" type="button">清空購物車</button>
        </div>
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template>
            <tr>
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  <i class="fas fa-spinner fa-pulse"></i>
                  x
                </button>
              </td>
              <td>
                {{ }}
                <div class="text-success">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input 
                          min="1" type="number" class="form-control">
                    <span class="input-group-text" id="basic-addon2">{{ }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small class="text-success">折扣價：</small>
                {{ }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ }}</td>
          </tr>
          <tr>
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ }}</td>
          </tr>
        </tfoot>
      </div>
    </div>
    <!-- 訂單資訊輸入表 -->
    <div class="container">
      <div class="my-5 row justify-content-center">
        <v-form @submit="onSubmit" ref="form" class="col-md-6" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field
              id="email"
              name="email"
              type="email"
              class="form-control"
              rules="email|required"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email">
            </v-field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required">
            </v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :rules="isPhone"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話">
            </v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址" rules="required">
            </v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea id="message" class="form-control" cols="30" rows="10" placeholder="有什麼想跟我們說的都歡迎留言(´▽`ʃ♡ƪ)"></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

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
      products: []
    }
  },
  methods: {
    //前台客戶取得產品列表
    getProducts() {
      this.axios.get(`${VITE_APP_URL}V2/api/${VITE_APP_PATH}/products/all`)
        .then( res => {
          this.products = res.data.products
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
  mounted() {
    this.getProducts()
  }
}
</script>
