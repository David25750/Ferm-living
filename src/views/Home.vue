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

</template>

<style lang="scss" scoped>


.Home{
  background-image: url(../assets/img/homepage/home.jpg);
  width: 100%;
  background-size: cover;
  background-position: center center;
  padding-top: clamp(100px,63%,850px);
  position:relative;

  &__text{
    position:absolute;
    color: $grey;
    width:36%;
    margin-left:50%;
    right: 13%;
    bottom: 34%;
    
    h1{
      font-family: $Title;
      font-size: $firstTitle;
    }

    p{
      font-family: $Content;
      font-size: $sizebigcontent;
    }
  }
}
</style>
