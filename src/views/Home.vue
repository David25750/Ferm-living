<script>

//Components

import Banner from "../components/Banner.vue";
import Card from "../components/Card.vue";
import MenuCatalogue from "../components/MenuCatalogue.vue";
import Headerr from "../components/Header.vue";
import Footerr from "../components/Footer.vue";

// Elements
import Button1 from "../components/elements/Button.vue";

  export default {
    components: {
      Banner,
      Card,
      MenuCatalogue,
      Button1
    },
  };
</script>

<template>
  <Banner />
  <Card />
  <Button1 />
  <MenuCatalogue />
</template>

<style>
*{
    margin: 0;
    box-sizing: border-box;
}
</style>
