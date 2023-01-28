<script>
import Banner from "../../components/Banner.vue";
import Card from "../../components/Card.vue";

export default{
    components:{
        Banner,
        Card,
    }
};

</script>
<template>
    <div class="header">
        <h1 class="header__title">The 3-seater turn sofa is made for you</h1>
        <img src="../../assets/img/tinder/sofaTurn3Seater.png"/>
        <p class="header__paragraph">This sofa  is propose to you because we have noticed that it is this type of color, material and furniture that you need</p>
        <p class="header__paragraph -bold">PRICE : 700 dollars</p>
        <button>Click</button>
    </div>
    <div class="section">
        <div class="section__width">
            <h2 class="section__width__title">You will also like ...</h2>
        </div>
        
        <div class="section__cards">
            <Card title="Sofa rico 2P" desc="suitable for apartments" img="src/assets/img/products/product.png"></Card>
            <Card title="Sofa rico 2P" desc="suitable for apartments" img="src/assets/img/products/product.png"></Card>
            <Card title="Sofa rico 2P" desc="suitable for apartments" img="src/assets/img/products/product.png"></Card>
        </div>
        
    </div>
    

</template>
<style lang="scss" scoped>

.header {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-evenly;

    &__title{
        font-family:$Title;
        font-size:$sizeH2;
    }

    &__paragraph{
        font-family:$Content;
        font-size:$sizecontent;
        width: 50%;
        text-align: center;

        &.-bold{
            font-family:$Contentbold;
        }

    }
}

.section{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-top:5%;
    margin-bottom:5%;

    &__cards{
        display:flex;
        justify-content:space-between;
        width:70%
    }

    &__width{
        width:70%;

        &__title{
            font-family:$Title;
            font-size:$sizeH2;
        }
    }
    
}
</style>