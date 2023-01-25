<script>

//Components

import Banner from "../components/Banner.vue";
import Card from "../components/Card.vue";
import MenuCatalogue from "../components/MenuCatalogue.vue";

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

    <div class="Content -modifier">
      <h2>Explore products by categories</h2>
      <div class="Wrapper"><!--CREER LE COMPONENT-->
        <div class="Wrapper__slider">
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
              <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
              <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
              <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
              <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
              <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
              <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Content">
      <div class="Content__module">
        <img src="../assets/img/homepage/custom.jpg"/>
        <div class="Content__module__desc">
            <h2>Rico - Sofa</h2>
            <p>This product is offered to you on sale for a limited time. Enjoy it!</p>
            <p>BOUTON</p>
        </div>
        <div class="Content__module__separateur"></div>
      </div>
      <div class="Content__module -reverse">
        <div class="Content__module__separateur"></div>
        <img src="../assets/img/homepage/custom.jpg"/>
        <div class="Content__module__desc -reverse">
            <h2>Rico - Sofa</h2>
            <p>This product is offered to you on sale for a limited time. Enjoy it!</p>
            <p>BOUTON</p>
        </div>
      </div>
    </div>
    <div class="ContentGlobal">
      <div class="ContentGlobal__desc">
        <h2>Our Responsabilities</h2>
        <p>It's an ongoing journey and we know there will be dilemmas and bumps along the way.
          By contributing to the important and ongoing dialogue on sustainability,
          and by helping each other leverage insights to learn and grow,
          we are all working towards a better tomorrow.
        </p>
        <button>click</button>
      </div>
      
      

    </div>

    <Banner></Banner>

     

  <!--
    
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

  h2{
    font-size: $sizeH2;
    font-family: $Title;
    padding-bottom:70px;
  }

  &.-modifier{
    flex-direction:column;
    padding-left:100px;
  }


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

  &__module{
    width:50%;
    text-align:end;
    margin-right:10%;

    &.-reverse{
      text-align:start;
      margin-right:0%;
      margin-top:200px;
    }
    &__separateur{
      height:10%;
    }
    &__desc{

      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content:between;
      height: 20%;

      &.-reverse{
        align-items:start;
      }

      p{
        font-size: $sizecontent;
        font-family: $Content;
        width:50%;
        padding-bottom:30px;
      }
      
      h2{
        font-size: $sizeH2;
        font-family: $Title;
        padding-bottom:30px;
        padding-top:30px;
      }
    }
    img{
      width:100%;
      height:60%;
      object-fit:cover;
      
    }

  }

}

.Wrapper{
  width: 100%;
  margin: 0 auto;

  &__slider{
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: auto;
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
    align-items: stretch;
    scroll-snap-type: x mandatory;

    &__slide{
      flex-shrink: 0;
      padding-right:100px;
      scroll-snap-align: center;

      &__content{
        width: 300px; /* exemple */
        height:400px;

        img{
          width:100%;
          height:100%;
        }
      }
    }
  }

  &__slider::-webkit-scrollbar{
    display: none;
  }

}

.ContentGlobal{
  background-image: url(../assets/img/homepage/our_responsability.jpg);
  width:100%;
  height:450px;
  margin-top:70px;
  margin-bottom:70px;
  color:white;
  text-align:center;
  filter: brightness(50%);
 

  &__desc{
    width:37%;
    height:100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    margin: auto;
    filter: brightness(1); //Marche pas 

    p{
      font-size:$sizecontent;
      font-family: $Content;
    }

    h2{
      font-size: $sizeH2;
      font-family: $Title;
    }
  }
}





</style>
