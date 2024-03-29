import './assets/scss/all.scss'
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { Field, Form, ErrorMessage } from 'vee-validate';

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(VueSweetalert2)
app.use(LoadingPlugin)
app.use(register);
app.use(Swiper, SwiperSlide);
app.config.globalProperties.$bs = bootstrap

app.mount('#app')
