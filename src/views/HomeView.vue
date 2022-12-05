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
      Headerr,
      Footerr,
      Button1
    },
  };
</script>

<template>
  <Headerr />
  <Banner />
  <Card />
  <Button1 />
  <MenuCatalogue />
  <Footerr />
</template>
