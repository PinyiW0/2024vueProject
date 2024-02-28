<template>
  <h1>我是首頁</h1>
  <SwiperTest />
  <RouterView></RouterView>
</template>

<script>
import SwiperTest from '@/components/SwiperTest.vue';

export default {
  components: {
    SwiperTest,
  },
};
</script>