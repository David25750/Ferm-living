<script>

export default{
    props:{
        img:{
            type:String,
            default:null,
        },

        title:{
            type:String,
            default:null,
        },

        price:{
            type: Number,
            default:null,
        },

        id:{
            type:String,
            default:null,
        },

    }
}
</script>
<template>
        <div class="card">
            <button class="card__button" type="button">salut</button>

            <div class="card__item">
                <a :href="`/produitDescription/${id}`">
                    <img :src="img" alt="produit" />
                </a>
                
                <!--<button>Customize</button>-->
            </div>
            <div class="card__info">
                <div class="card__info__desc">
                    <h1>{{ title }}</h1>
                    <p>{{ price }}$</p>
                </div>
                <div class="card__info__button">
                    <button type="submit">
                        <img src="../assets/icon/caddieblanc.svg" alt="bouton_achat"/>
                    </button>
                </div>    
            </div>    
        </div>

</template>
<style lang="scss" scoped>

.card{
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    height:400px;
    width:300px;
    margin-bottom:20vh;

    &__button{
        width:50%;
    }

    &__item{
        
        img{
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
            height: 60px;
            width:60px;

            img{
                height:24px;
                width:24px;
            }

            
        }
        &__desc{
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:space-between;

            
        }

        &__button{
                width:100%;
                display:flex;
                justify-content:flex-end;
                align-items:flex-end;
        }
    }
 
}

</style>