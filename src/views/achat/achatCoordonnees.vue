<script>
export default {

};
</script>
<template>
    <div class="purchaseContact">
        <div class="purchaseContact__title">
            <h1>YOUR SELECTION</h1>
            <p>You have 2 items for 1450€.</p>
        </div>
        <div class="purchaseContact__general">
            <h2 class="purchaseContact__generaltitle">General information</h2>
            <div class="purchaseContact__generalcontent">
                <div class="purchaseContact__champ">
                    <label class="purchaseContact__label" for="">Name</label>
                    <input class="purchaseContact__input" type="text">
                </div>
                <div class="purchaseContact__champ">
                    <label class="purchaseContact__label" for="">Firstname</label>
                    <input class="purchaseContact__input" type="text">
                </div>
                <div class="purchaseContact__champ">
                    <label class="purchaseContact__label" for="">Phone number</label>
                    <input class="purchaseContact__input" type="text">
                </div>


            </div>
        </div>
        <div class="purchaseContact__adress">
            <h2 class="purchaseContact__adresstitle">Delivery adress</h2>
        </div>
        <div class="purchaseContact__adresscontent">
            <div class="purchaseContact__champ">
                <label class="purchaseContact__label" for="">Postal adress</label>
                <input class="purchaseContact__input" type="text">
            </div>
            <div class="purchaseContact__champ">
                <label class="purchaseContact__label" for="">City</label>
                <input class="purchaseContact__input" type="text">
            </div>
            <div class="purchaseContact__champ">
                <label class="purchaseContact__label" for="">Postal code</label>
                <input class="purchaseContact__input" type="text">
            </div>
            <div class="purchaseContact__champ">
                <label class="purchaseContact__label" for="">Country</label>
                <input class="purchaseContact__input" type="text">
            </div>


        </div>


        <button class="purchaseContact__button">
            <a class="purchaseContact__link">Proceed to payment</a>
        </button>

    </div>

</template>
<style lang="scss" scoped>

.purchaseContact{
    width:100%;
    padding-block:60px;
    
    
    
    

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
            padding-bottom:5%;
            
        }
    }

    &__generaltitle{
        color:$grey;
        background-color: $green;
        font-family: $Contentsemibold;
        width:636px;
        padding-left:300px;
    }


    &__generalcontent{
        
        padding-block:20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap:20px;
        
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

    &__adresstitle{
        color:$grey;
        background-color: $green;
        font-family: $Contentsemibold;
        width:636px;
        padding-left:300px;
    }


    &__adresscontent{
        
        padding-block:20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap:20px;
        
    }

    &__label{
        font-family: $Content;
        font-size: $sizesmallcontent;
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