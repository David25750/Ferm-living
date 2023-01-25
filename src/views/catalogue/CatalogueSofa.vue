<script>
import MenuCatalogue from "../../components/MenuCatalogue.vue";
import Card from "../../components/Card.vue";
import Banner from "../../components/Banner.vue";

export default {
    components: {
      
      MenuCatalogue,
      Card,
      Banner,
      
    },
  };
</script>

<template>
    <!--Compartiment du header a mettre ici !-->

    <MenuCatalogue></MenuCatalogue>

    <div class="herosofa">



    </div>
    <div class="sofadesc">
        <h3 class="sofadesc__title">Sofa</h3>
        <p class="sofadesc__text">What makes a home? We believe it’s the feeling of belonging. The living room can be
            characterised as the heart of the home – a place to unwind and focus on the important things in life. The
            items you choose to surround yourself with should be a reflection of this, allowing you to always feel
            comfortably you.</p>
    </div>
    <div class="sofasave">
        <p class="sofasave__date">1 au 31 octobre 2022</p>
        <h3 class="sofasave__info">Save 20% on all sofas</h3>
    </div>
    <div class="threesofas">
        <div class="threesofas__catena">
            <img class="threesofas__catenaimg" width="860px" height="555px" src="../../assets/img/sofa/catena.jpg"
                alt="#">
            <div class="threesofas__catenacontent">
                <h3 class="threesofas__catenatitle">Catena</h3>
                <p class="threesofas__catenadesc">Discover our Catena sofas, customizable sofas for all interiors,
                    available in many colors at variable prices depending on the modules chosen</p>
                <button class="threesofas__button">
                    <a class="threesofas__link" href="#">See the Product</a>
                </button>


            </div>
            

        </div>
        <div class="threesofas__turn">

            <div class="threesofas__turncontent">
                <h3 class="threesofas__turntitle">Turn</h3>
                <p class="threesofas__turndesc">Discover our Turn sofas, customizable sofas for all interiors, available
                    in many colors at variable prices depending on the modules chosen

                </p>
                <button class="threesofas__button">
                    <a class="threesofas__link" href="#">See the Product</a>
                </button>
                <p class="threesofas__citation">“The living room can be characterised as the heart of the home – a place to unwind and focus on the important things in life.”</p>


            </div>
            <img class="threesofas__turnimg" width="800px" height="880px" src="../../assets/img/sofa/turn.jpg" alt="#">

        </div>
        <div class="threesofas__rico">
            <img class="threesofas__ricoimg" width="810px" height="840px" src="../../assets/img/sofa/sofa.JPG" alt="#">
            <div class="threesofas__ricocontent">
                <h3 class="threesofas__ricotitle">Rico</h3>
                <p class="threesofas__ricodesc">Discover our Catena sofas, customizable sofas for all interiors,
                    available in many colors at variable prices depending on the modules chosen
                </p>
                <button class="threesofas__button">
                    <a class="threesofas__link" href="#">See the Product</a>
                </button>
                
            </div>

        </div>
    </div>

    <Card></Card>

    <Banner></Banner>




    <!--Compartiment du footer a mettre ici !-->
</template>

<style lang="scss" scoped>
.herosofa {
    background-image: url(../../assets/img/sofa/threesofas.jpg);
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 80vh;
    padding-block: 80px;

}

.sofadesc {
    width: 100%;

    &__title {

        font-family: $Title;
        font-size: $sizeH2;
        padding-block: 20px;
        text-align: center;
        padding-block: 75px;

    }

    &__text {
        font-family: $Content;
        font-size: $sizecontent;
        width: 1100px;
        margin: auto;
        padding-bottom: 120px;


    }
}

.sofasave {
    background-image: url(../../assets/img/sofa/safe.jpg);
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 60vh;


    &__date {
        font-family: $Content;
        font-size: $sizecontent;
        text-align: center;
        color: $grey;
    }

    &__info {

        font-family: $Title;
        font-size: $sizeH2;
        padding-top: 140px;
        text-align: center;

        color: $grey;

    }



}

.threesofas {
    width: auto;
    padding-block: 150px;



    &__catena {
        display: flex;
        justify-content: space-around;
    }

    &__catenatitle{

        font-family: $Title;
        font-size: $sizeH2;
        padding-block: 20px;
        

    }

    &__catenadesc{
        font-family: $Content;
        font-size: $sizecontent;
        width:360px;
        
        
        
    }

    &__button{
        border-style:none;
        margin-top:40px;
    }

    &__link{
        font-family: $Contentsemibold;
        font-size: $sizecontent;
        color:$green;
        text-decoration: none;
    }

    &__turn{
        display: flex;
        justify-content: space-around;
        padding-block:100px;
    }

    &__turntitle{
        font-family: $Title;
        font-size: $sizeH2;
        padding-block: 20px;

    }

    &__turndesc{
        font-family: $Content;
        font-size: $sizecontent;
        width:360px;
    }

    &__citation{
        font-family: $Title;
        font-size: $sizeH2;
        padding-top: 200px;
        width:660px;
        position:absolute

    }

    &__rico{
        display: flex;
        justify-content: space-around;
    }

    &__ricodesc{
        width:360px;
        font-family: $Content;
        font-size: $sizecontent;

    }

    &__ricotitle{
        font-family: $Title;
        font-size: $sizeH2;
        padding-block: 20px;
    }

}


</style>