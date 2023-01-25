<script>
import Banner from "../components/Banner.vue";

export default {
    components: {
      Banner,
      
    },
  };

</script>

<template>
    <!--Compartiment du header a mettre ici !-->

    <div class="responshero">

        <div class="responshero__overlay"></div>
        <div class="responshero__content">
            <h1 class="responshero__titre">Life is full of Contrast</h1>
            <p class="responshero__comment">OUR PLANET, OUR SOCIETY, OUR FAMILY</p>
        </div>
    </div>



    <div class="responsRange">
        <div class="responsRange__img">
            <img src="../assets/img/responsability/inside.jpg" width="400px" height="400px" alt="imgRange">
        </div>
        <div class="responsRange__content">
            <h3 class="responsRange__titre">Our responsible range</h3>

            <p class="responsRange__desc">Discover our range of eco-responsible products. We base ourselves on materials
                and on a production
                respecting strict values for the protection of the environment.</p>

            <button class="responsRange__button">Discover the products</button>
        </div>
    </div>
    <div class="engagements">
        <div class="engagements__illustration">
            <img src="../assets/img/responsability/banc.jpg" width="492px" height="640px" alt="#">
        </div>
        <div class="engagement__values">
            <h3 class="engagements__title">Our Engagements for 2030</h3>
            <ul class="engagements__list">
                <li class="engagements__item">
                    <strong class="engagements__itemtitle">Our Planet</strong>
                    <p class="engagements__itemdesc">Create full transparency on all products
                        - Obtain third-party certifications on all products where possible
                        - Work towards CO2-neutrality
                    </p>
                </li>
                <li class="engagements__item">
                    <strong class="engagements__itemtitle"> Our Society</strong>
                    <p class="engagements__itemdesc">- Build value on all bottom lines: people, planet, profit & purpose
                        - Inspire customers to make responsible choices
                        - Give back to local communities in support of better homes
                    </p>
                </li>
                <li class="engagements__item">
                    <strong class="engagements__itemtitle">Our Family</strong>
                    <p class="engagements__itemdesc">- Maintain a strong culture with clear values
                        - Nurture long-lasting relations built on trust and respect
                        - Empower all of us to learn and grow together
                    </p>
                </li>
            </ul>
        </div>
    </div>
    <div class="vision">

        <div class="vision__content">
            <h3 class="vision__title">Our Vision of Ecology</h3>
            <p class="vision__text">We want our designs to last – both in terms of function and aesthetics. In our quest
                to achieve this, we employ strict sustainability criteria and work within a set framework of practices.
                We
                take a 'cradle-to-grave' approach to consider the entire life cycle of our products, and work to ensure
                that
                as many of our products as possible are made from responsible materials.</p>
        </div>
    </div>
    <div class="ecovalues">
        <h3 class="ecovalues__title">Our Ecological values</h3>
        <div class="ecovalues__content">
            <img class="ecovalues__img" width="540px" height="760px" src="../assets/img/responsability/chaise.webp"
                alt="#">
            <ul class="ecovalues__list">
                <li class="ecovalues__item">
                    <div class="ecovalues__itemcontent">
                        <strong class="ecovalues__itemtitle">Design Philoshophy</strong>
                        <p class="ecovalues__itemtext">We want our products to be enjoyed for many years </p>
                    </div>
                    <img class="ecovalues__itemicon" src="../assets/icon/ampoule.png" href="#">

                </li>
                <li class="ecovalues__item">
                    <div class="ecovalues__itemcontent">
                        <strong class="ecovalues__itemtitle">End of life impact</strong>
                        <p class="ecovalues__itemtext">We want our products to be enjoyed for many years </p>
                    </div>
                    <img class="ecovalues__itemicon" src="../assets/icon/feuille.png" href="#">

                </li>
                <li class="ecovalues__item">
                    <div class="ecovalues__itemcontent">
                        <strong class="ecovalues__itemtitle">Qualify</strong>
                        <p class="ecovalues__itemtext">We want to make it easy for our customers to buy better products.
                        </p>
                    </div>
                    <img class="ecovalues__itemicon" src="../assets/icon/loupe.png" href="#">
                </li>
                <li class="ecovalues__item">
                    <div class="ecovalues__itemcontent">
                        <strong class="ecovalues__itemtitle">People</strong>
                        <p class="ecovalues__itemtext">We are a family of colleagues and partners who do what we do with
                            all
                            our hearts.</p>
                    </div>
                    <img class="ecovalues__itemicon" src="../assets/icon/doublecoeur.png" href="#">
                </li>
                <li class="ecovalues__item">
                    <div class="ecovalues__itemcontent">
                        <strong class="ecovalues__itemtitle">Usertainable goals</strong>
                        <p class="ecovalues__itemtext">The SDG’s are a blueprint to achieve a better and more
                            sustainable
                            future for all.</p>
                    </div>
                    <img class="ecovalues__itemicon" src="../assets/icon/goals.png" href="#">

                </li>
            </ul>
        </div>
    </div>
    
    <Banner></Banner>

    <!--Compartiment du footer a mettre ici !-->
</template>

<style lang="scss" scoped>
.responshero {
    background-image: url(../assets/img/responsability/responsibility.jpg);
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    &__overlay {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(black, 0.5);
        z-index: 1;
    }

    &__content {
        z-index: 2;
        position: relative;
        text-align: center;
    }


    &__titre {
        font-family: $Title;
        font-size: $sizeH1;
        color: white;
    }

    &__comment {
        font-family: $Content;
        font-size: $sizecontent;
        color: white;
    }







}

.responsRange {
    width: 100%;
    background-color: #E9E6DF;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-block: 100px;

    &__titre {
        font-family: $Title;
        font-size: $sizeH2;
        padding-block: 20px;



    }

    &__desc {
        font-family: $Content;
        font-size: $sizecontent;
        width: 450px;
        padding-block: 30px;
    }

    &__button {
        background-color: $green;
        border: none;
        color: $grey;
        padding: 16px;
        font-family: $Content;
        font-size: $sizecontent
    }
}

.engagements {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding-block: 75px;

    &__title {
        font-family: $Title;
        font-size: $sizeH2;
        padding-block: 20px;
    }

    &__list {
        list-style: none;
        margin-left: -30px;
    }

    &__item {
        width: 500px;
        padding-block: 20px;
    }

    &__itemtitle {

        font-family: $Contentbold;
        font-size: $sizecontent;
    }

    &__itemdesc {
        width: 500px;
        font-family: $Content;
        font-size: $sizecontent;
    }
}

.vision {

    background-image: url(../assets/img/responsability/vision.png);
    width: 100%;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    &__content {
        padding-block: 100px;
        margin: auto;

    }

    &__title {
        font-family: $Title;
        font-size: $sizeH2;
        padding-block: 20px;
        color: $grey;
        text-align: center;
    }

    &__text {
        font-family: $Content;
        font-size: $sizecontent;
        color: $grey;
        text-align: center;
        width: 1000px;
    }


}

.ecovalues {
    width: 100%;
    

    &__title {
        font-family: $Title;
        font-size: $sizeH2;
        padding-block: 40px;
        text-align: center;
    }

    &__content {
        display: flex;
        justify-content: space-evenly;
        padding-block:100px;
    }

    &__list {
        list-style: none;
    }

    &__item {
        display: flex;
        justify-content: space-evenly;
        padding-block:30px;
    }

    &__itemcontent{
        text-align: right;
    }

    &__itemtitle {

        font-family: $Contentsemibold;
        font-size: $sizecontent;
        padding-bottom:20px;
    }

    &__itemtext {
        width: 500px;
        font-family: $Content;
        font-size: $sizecontent;
    }

    &__itemicon{
        background-color: $grey;
        margin-left:20px;
        width:80px;
    }
}
</style>