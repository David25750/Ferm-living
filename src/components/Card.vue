<script>
</script>
<template>
    <div class="line-card">
        <div class="card">
            <div class="card__item">
                <img src="../assets/img/products/product.png" alt="produit" />
                <!--<button>Customize</button>-->
            </div>
            <div class="card__info">
                <div class="card__info__desc">
                    <h1>Product</h1>
                    <p>produit de qualité</p>
                </div>
                <div class="card__info__button">
                    <button type="submit">
                        <img src="../assets/icon/caddieblanc.svg" alt="bouton_achat"/>
                    </button>
                </div>    
            </div>    
        </div>

        <div class="card">
            <div class="card__item">
                <img src="../assets/img/products/product.png" alt="produit" />
                <!--<button>Customize</button>-->
            </div>
            <div class="card__info">
                <div class="card__info__desc">
                    <h1>Product</h1>
                    <p>produit de qualité</p>
                </div>
                <div class="card__info__button">
                    <button type="submit">
                        <img src="../assets/icon/caddieblanc.svg" alt="bouton_achat"/>
                    </button>
                </div>    
            </div>    
        </div>

        <div class="card">
            <div class="card__item">
                <img src="../assets/img/products/product.png" alt="produit" />
                <!--<button>Customize</button>-->
            </div>
            <div class="card__info">
                <div class="card__info__desc">
                    <h1>Product</h1>
                    <p>produit de qualité</p>
                </div>
                <div class="card__info__button">
                    <button type="submit">
                        <img src="../assets/icon/caddieblanc.svg" alt="bouton_achat"/>
                    </button>
                </div>    
            </div>    
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card{
    display:flex;
    flex-direction: column;
    height:500px;
    width:300px;
    margin:100px;

    &__item{
        
        img{
            height:400px;
            width:300px;
        }
    }
    &__info{
        display:flex;
        flex-direction: row;


        
            h1{
                color:$green;
                font-family: $Contentbold;
                font-size:$sizecontent;
                margin:0;
            }

            p{
                color:black;
                font-family: $Content;
                font-size:$sizesmallcontent;
                margin:0;
            }
        

        button{
            border-radius: 0;
            background-color: $darkgrey;
            border:none;
            height: 50px;
            width:50px;

            img{
                height:24px;
                width:24px;
            }

            
        }
        &__desc{
            width:100%;
            display:flex;
            flex-direction:column;

            
        }

        &__button{
                width:100%;
                display:flex;
                justify-content:flex-end;
                align-items:flex-end;
        }
    }
 
}

.line-card{
    display:flex;
    flex-direction:row;
    justify-content:center;
    
}
</style>