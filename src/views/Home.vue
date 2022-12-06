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
  <div class="Home">
    <div class="Home__text">
      <h1>Ferm Living</h1>
      <p>At ferm LIVING, we celebrate the contrasts in life.
      We want people to feel confident in the choices they make as they create space to live more sustainably.</p>
    </div>
  </div>
  <!--
    <Banner />
  <Card />
  <Button1 />
  <MenuCatalogue />
  <Footerr />
  -->
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
