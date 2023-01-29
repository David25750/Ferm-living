<script>
import CartProduct from "../../components/ProductCart.vue"
export default{
    components:{
        CartProduct,
    },

    computed: {
    cartTotal () {
      return this.$store.state.products.reduce((total, product) => {
        total+=product.quantity * product.price
        return total
      }, 0)
    }
  },

};
</script>
<template>
    <div class="section">
        <div class="section__title">
            <h1>YOUR SELECTION</h1>
            <p>You have 2 items for 1450€.</p>
        </div>
            
            <CartProduct v-for="(product, index) in $store.state.products" :key="index"
                    v-bind="{
                    id: product.id,
                    quantity: product.quantity,
                    attribut1:product.attributes[0].options[0],
                    attribut2:product.attributes[0].options[0],
                    attribut3:product.attributes[0].options[0],
                    image: product.images[0].src,
                    name: product.name,
                    price: product.price }">
                </CartProduct>
        
        
        <div class="section__total">
            <p>Total : {{cartTotal}}$</p>
        </div>
        <router-link to="/achatCoordonnees">
            <button class="section__button">Proceed to payment</button>
        </router-link>

    </div>

</template>
<style lang="scss" scoped>

.section{
    width:100%;
    height:90vh;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding-top:5vh;
    padding-bottom:10vh;
    justify-content:space-between;

    &__title{
        display:flex;
        flex-direction:column;
        align-items:center;
        height:15%;

        h1{
            font-family:$Title;
            font-size:$sizeH2;
            padding-bottom:3%;
        }

        p{
            font-family:$Content;
            font-size:$sizecontent;
            padding-bottom: 10%;
            border-bottom: 1px solid black; 
        }

    }

    &__total{
        font-family:$Content;
        font-size:$sizebigcontent;
        width:70%;
        display:flex;
        justify-content:end;
    }
}

.carre{
    width:15px;
    height:15px;
    border: 2px solid rgb(65, 65, 65);
    margin-right: 10px;
}
</style>