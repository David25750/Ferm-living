<script>
export default {

};
</script>
<template>
    <div class="purchasefinal">
        <div class="purchasefinal__title">
            <h1>YOUR SELECTION</h1>
            <p>You have 2 items for 1450€.</p>
        </div>
        <div class="purchasefinal__general">
            <div class="purchasefinal__logos">
                <div class="purchasefinal__item">
                    <img class="purchasefinal__itemimg" src="../../assets/icon/cadenas.png">
                    <p class="purchasefinal__itemdesc">Payment methods: MasterCard, Maestro, Paypal</p>

                </div>
                <div class="purchasefinal__item">
                    <img class="purchasefinal__itemimg" src="../../assets/icon/nfc.png">
                    <p class="purchasefinal__itemdesc">Secure payment, your information is confidential ....</p>
                </div>
            </div>
            <div class="purchasefinal__methods">
                <h2 class="purchasefinal__methodstitle">Methods payments</h2>
                <div class="purchasefinal__methodscontent">
                    <input class="purchasefinal__checkbox" type="checkbox" name="Mastercard/Visa">
                    <label class="purchasefinal__label" for="">Mastercard/Visa</label>
                    <input class="purchasefinal__checkbox" type="checkbox" name="Paypal">
                    <label class="purchasefinal__label" for="">Paypal</label>
                </div>
            </div>
            <div class="purchasefinal__pay">
                <h2 class="purchasefinal__paytitle">Payment</h2>
                <div class="purchasefinal__paycontent">
                    <div class="purchasefinal__champ">
                        <label class="purchasefinal__label" for="">Code Pin</label>
                        <input class="purchasefinal__input" type="text">
                    </div>
                    <div class="purchasefinal__champ">
                        <label class="purchasefinal__label" for="">Date d'expiration</label>
                        <input class="purchasefinal__input" type="text">
                    </div>
                    <div class="purchasefinal__champ">
                        <label class="purchasefinal__label" for="">CVC</label>
                        <input class="purchasefinal__input" type="text">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="summary">
        <div class="summary__title">
            <h1>SUMMARY</h1>
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
        
        <button class="summary__button">
            <a class="summary__link">Proceed to payment</a>
        </button>
    </div>

</template>
<style lang="scss" scoped>
.purchasefinal {
    width: 100%;
    padding-block: 60px;





    &__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 15%;

        h1 {
            font-family: $Title;
            font-size: $sizeH2;
            padding-bottom: 3%;
        }

        p {
            font-family: $Content;
            font-size: $sizecontent;
            padding-bottom: 5%;

        }
    }

    &__logos {
        display: flex;
        justify-content: space-evenly;
        padding-block: 40px;

    }

    &__item {
        text-align: center;
    }

    &__itemdesc {
        font-family: $Content;
        font-size: $sizesmallcontent;
        padding-top: 3%;
    }

    &__methodstitle {
        color: $grey;
        background-color: $green;
        font-family: $Contentsemibold;
        width: 636px;
        padding-left: 300px;
    }

    &__methodscontent {
        display: flex;
        justify-content: space-evenly;
        padding-block: 60px;
    }

    &__label {
        font-family: $Content;
        font-size: $sizecontent;


    }


    &__checkbox {
        border-radius: 15px;
        width: 100px;

    }

    &__checkbox:checked {
        background-color: black;

    }



    &__paytitle {
        color: $grey;
        background-color: $green;
        font-family: $Contentsemibold;
        width: 636px;
        padding-left: 300px;
    }

    &__paycontent{
        display: flex;
        justify-content: space-evenly;
        padding-block: 40px;
    }

    &__champ{
        margin:auto;
    }
    
    &__input{
        width:350px;
        height:50px;
        border:none;
        border-bottom:solid 2px black;
        
    }

    &__label{
        font-family: $Content;
        font-size: $sizesmallcontent;
    }


}

.summary{
    width:100%;
    background-color: $grey;
    padding-block:60px;

    &__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 15%;

        h1 {
            font-family: $Title;
            font-size: $sizeH2;
            padding-block: 3%;
        }

        p {
            font-family: $Content;
            font-size: $sizecontent;
            padding-bottom: 5%;

        }
    }

    &__button{
        display: block;
        margin:auto;
        background-color: $darkgrey;
        padding-block:20px;
        padding-inline:80px;
        margin-top:60px;
        border:none;
    }

    &__link{
        color:$grey;
        font-family: $Content;
        font-size: $sizecontent;
    }
}
</style>