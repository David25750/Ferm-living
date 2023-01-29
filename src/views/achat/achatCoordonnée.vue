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

</style>