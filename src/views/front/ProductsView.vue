<template>
  <div id="app">
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
//import axios from 'axios';
//const { VITE_URL, VITE_PATH } = import.meta.env

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

  },
  methods: {
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
    console.log();
  }
}
</script>