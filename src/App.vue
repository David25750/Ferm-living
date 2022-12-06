<script>
import { RouterView } from 'vue-router';
import Headerr from "./components/Header.vue";
import Footerr from "./components/Footer.vue";



  export default {
    components: {
      Headerr,
      Footerr,
    },
  };
</script>

<template>
  <Headerr />

  <RouterView />

  <Footerr />
</template>

<style>
*{
  margin:0;
  box-sizing: border-box;
}
</style>

