<template>
  <div class="bg-primary container-fluid">
    <swiper
    class="swiper-wrapper"
    ref="swiper"
    :modules="modules"
    :allowTouchMove="false"
    :slides-per-view="auto"
    :centered-slides="true"
    :speed="8000"
    :loop="true"
    :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }">
      <swiper-slide class="fs-6 text-white py-1 mb-0 d-flex align-items-center">
        <span class="letSpc-8" style="margin-top: 1px;">即刻成為會員，立享&nbsp;$100 折價券！&nbsp;金額不限，全額折抵！&nbsp;</span>
        <span class="letSpc-8" style="margin-top: 1px;">即刻成為會員，立享&nbsp;$100 折價券！&nbsp;金額不限，全額折抵！&nbsp;</span>
      </swiper-slide>
      <swiper-slide class="fs-6 text-white py-1 mb-0 d-flex align-items-center">
        <span class="letSpc-8" style="margin-top: 1px;">即刻成為會員，立享&nbsp;$100 折價券！&nbsp;金額不限，全額折抵！&nbsp;</span>
        <span class="letSpc-8" style="margin-top: 1px;">即刻成為會員，立享&nbsp;$100 折價券！&nbsp;金額不限，全額折抵！&nbsp;</span>
      </swiper-slide>
      <swiper-slide class="fs-6 text-white py-1 mb-0 d-flex align-items-center">
        <span class="letSpc-8" style="margin-top: 1px;">即刻成為會員，立享&nbsp;$100 折價券！&nbsp;金額不限，全額折抵！&nbsp;</span>
        <span class="letSpc-8" style="margin-top: 1px;">即刻成為會員，立享&nbsp;$100 折價券！&nbsp;金額不限，全額折抵！&nbsp;</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.swiper-wrapper {
  transition-timing-function: linear;
}

</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  mounted() {
  },
  created() {
  },
  methods: {
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};

</script>
