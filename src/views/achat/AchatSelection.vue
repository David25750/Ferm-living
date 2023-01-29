<script>
export default{

};
</script>
<template>
    <div class="section">
        <div class="section__title">
            <h1>YOUR SELECTION</h1>
            <p>You have 2 items for 1450€.</p>
        </div>
        <div class="section__content">
            <img src="src/assets/img/products/catena.png"/>
            <div class="section__content__infos">
                <div class="section__content__infos__line">
                    <p>Catena</p>
                    <p>1400€</p>
                </div>
                <div class="section__content__infos__line">
                    <div class="section__content__infos__line__blocWidth">
                        <div class="section__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : Grey</p>
                        </div>
                        <div class="section__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : Grey</p>
                        </div>
                    </div>
                    
                    <img src="src/assets/icon/croix.svg"/>
                </div>
                <div class="section__content__infos__line">
                    <div class="section__content__infos__line__bloc">
                        <div class="carre"></div>
                        <p>Color : Grey</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section__content">
            <img src="src/assets/img/products/catena.png"/>
            <div class="section__content__infos">
                <div class="section__content__infos__line">
                    <p>Catena</p>
                    <p>1400€</p>
                </div>
                <div class="section__content__infos__line">
                    <div class="section__content__infos__line__blocWidth">
                        <div class="section__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : Grey</p>
                        </div>
                        <div class="section__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : Grey</p>
                        </div>
                    </div>
                    
                    <img src="src/assets/icon/croix.svg"/>
                </div>
                <div class="section__content__infos__line">
                    <div class="section__content__infos__line__bloc">
                        <div class="carre"></div>
                        <p>Color : Grey</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section__total">
            <p>Total : 1450€</p>
        </div>
        
        <button class="section__button">Proceed to payment</button>

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

    &__content{
        display:flex;
        width:70%;
        justify-content:space-between;

        &__infos{
            display:flex;
            flex-direction:column;
            justify-content: space-around;
            width:75%;

            &__line{
                display:flex;
                flex-direction:row;
                justify-content: space-between;
                font-family:$Content;
                font-size:$sizecontent;

                &__bloc{
                    display:flex;
                    flex-direction:row;
                    align-items: center;
                    font-size:$sizesmallcontent;


                }

                &__blocWidth{
                    width: 40%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

                img{
                    height:20px;
                    width:20px;
                }
            }
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