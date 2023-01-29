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
                    <img class="purchasefinal__itemimg" src="">
                    <p class="purchasefinal__itemdesc">Payment methods: MasterCard, Maestro, Paypal</p>

                </div>
                <div class="purchasefinal__item">
                    <img class="purchasefinal__itemimg" src="">
                    <p class="purchasefinal__itemdesc">Secure payment, your information is confidential ....</p>
                </div>
            </div>
            <div class="purchasefinal__methods">
                <h2 class="purchasefinal__methodstitle">Methods payments</h2>
                <div class="purchasefinal__methodscontent">
                    <input type="checkbox" name="Mastercard/Visa">
                    <input type="checkbox" name="Paypal">
                </div>
            </div>
            <div class="purchasefinal__pay">
                <h2 class="purchasefinal__paytitle">Payment</h2>
                <div class="purchasefinal__paycontent">
                    <div class="purchasefinal__champ">
                        <label for="">Code Pin</label>
                        <input type="text">
                    </div>
                    <div class="purchasefinal__champ">
                        <label for="">Expiration date</label>
                        <input type="text">
                    </div>
                    <div class="purchasefinal__champ">
                        <label for="">CVC</label>
                        <input type="text">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="summary">
        <div class="summary__title">
            <h1>YOUR SELECTION</h1>
            <p>You have 2 items for 1450€.</p>
        </div>
        <div class="summary__content">
            <img src="src/assets/img/products/catena.png"/>
            <div class="summary__content__infos">
                <div class="summary__content__infos__line">
                    <p>Catena</p>
                    <p>1400€</p>
                </div>
                <div class="summary__content__infos__line">
                    <div class="summary__content__infos__line__blocWidth">
                        <div class="summary__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : Grey</p>
                        </div>
                        <div class="summary__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : Grey</p>
                        </div>
                    </div>
                    
                    <img src="src/assets/icon/croix.svg"/>
                </div>
                <div class="summary__content__infos__line">
                    <div class="summary__content__infos__line__bloc">
                        <div class="carre"></div>
                        <p>Color : Grey</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="summary__content">
            <img src="src/assets/img/products/catena.png"/>
            <div class="summary__content__infos">
                <div class="summary__content__infos__line">
                    <p>Catena</p>
                    <p>1400€</p>
                </div>
                <div class="summary__content__infos__line">
                    <div class="summary__content__infos__line__blocWidth">
                        <div class="summary__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : Grey</p>
                        </div>
                        <div class="summary__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : Grey</p>
                        </div>
                    </div>
                    
                    <img src="src/assets/icon/croix.svg"/>
                </div>
                <div class="summary__content__infos__line">
                    <div class="summary__content__infos__line__bloc">
                        <div class="carre"></div>
                        <p>Color : Grey</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="summary__total">
            <p>Total : 1450€</p>
        </div>
        <button class="summary__button">Finalize payment</button>
    </div>

</template>
<style lang="scss" scoped>

</style>