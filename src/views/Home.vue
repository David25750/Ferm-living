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
    <div class="Content">
      <div class="Content__img">
        <p>Your wish is here</p>
        <img class="" src="../assets/img/homepage/home.jpg"/>
      </div>
      
      <div class="Content__text">
        <div class="Content__text__center">
          <h2>Hearth Finding</h2>
          <p>With this feature, you will have the opportunity to find the piece of furniture that suits you the most.</p>
          <button>click</button>
        </div>
      </div>
    </div>
    <div class="Content">
      <div class="Content__text -space">
        <h2>Sofa Rico</h2>
        <p>1000 $</p>
        <img src="../assets/img/products/fermLIVING_TurnSofa_3-seater_Pasadena_1104263179_3.jpg"/>
        <button>click</button>
      </div>
      <div class="Content__img">
        <img class="" src="../assets/img/homepage/home.jpg"/>
      </div>
    </div>

    <div class="ContentSlider">
      <h2>Explore products by categories</h2>
      <div class="ContentSlider__slide">
        <div class="ContentSlider__slide__img"></div>
        <div class="ContentSlider__slide__img"></div>
        <div class="ContentSlider__slide__img"></div>
        <div class="ContentSlider__slide__img"></div>
        <div class="ContentSlider__slide__img"></div>
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
    width:670px;
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

.Content{
  display:flex;
  flex-direction:row;
  padding-top:70px;
  padding-bottom:70px;

  &__img{

    width:50%;

    img{
      width:100%;
    }
    
    p{
      font-family:$Title;
      font-size:50px;
      color:$darkgrey;
      text-align:center;
    }
  }

  

  &__text{
    display:flex;
    flex-direction:column;
    justify-content:end;
    align-items:center;
    width:50%;

    h2{
      font-family: $Title;
      font-size: $sizeH1;
      margin-bottom:30px;
    }
     p{
      font-family: $Content;
      font-size: $sizecontent;
      margin-bottom:30px;
     }

    img{
      width:60%;
    }

    &.-space{
      justify-content:space-between;
    }

     
  &__center{
    width: 65%;
    display: flex;
    flex-direction: column;
  }
  }
}

.ContentSlider{
  display:flex;
  flex-direction:column;

  h2{
    font-family: $Title;
    font-size: $sizeH2;
  }

  &__slide{
    display:flex;
    flex-direction:row;
    width:100%;
    margin-left:20px;
    overflow-x: scroll;

  &__img{
    width:500px;
    height:200px;
    background-color:black;
    border: 4px solid red;
  }
  
    
  }
  // flex-none first:pl-6 last:pr-6
}
</style>
