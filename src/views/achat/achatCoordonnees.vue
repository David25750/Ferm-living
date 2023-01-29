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
                    <label for="">Name</label>
                    <input type="text">
                </div>
                <div class="purchaseContact__champ">
                    <label for="">Firstname</label>
                    <input type="text">
                </div>
                <div class="purchaseContact__champ">
                    <label for="">Phone number</label>
                    <input type="text">
                </div>


            </div>
        </div>
        <div class="purchaseContact__adress">
            <h2 class="purchaseContact__adresstitle">Delivery adress</h2>
        </div>
        <div class="purchaseContact__adresscontent">
            <div class="purchaseContact__champ">
                <label for="">Postal adress</label>
                <input type="text">
            </div>
            <div class="purchaseContact__champ">
                <label for="">City</label>
                <input type="text">
            </div>
            <div class="purchaseContact__champ">
                <label for="">Postal code</label>
                <input type="text">
            </div>
            <div class="purchaseContact__champ">
                <label for="">Country</label>
                <input type="text">
            </div>


        </div>


        <button class="section__button">Proceed to payment</button>

    </div>

</template>
<style lang="scss" scoped>

.purchaseContact{
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

    &__general{
        display:flex;
        flex-direction:column;
        width:100%;
    }

    
}

</style>