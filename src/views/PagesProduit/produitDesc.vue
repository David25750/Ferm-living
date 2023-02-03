<script>
import Card from "../../components/Card.vue";
import ListCards from "../../components/ListCards.vue";
import RandomProducts from "../../components/randomProduct.vue";
import Button1 from "../../components/elements/Button.vue";
import axios from 'axios'
    export default{
        components:{
            Card,
            ListCards,
            RandomProducts,
            Button1,
        },

        data () {
            return {
                data: {

                },
                id: null,
                isLoading:true,
            }
        },

        methods:{
            addToCart () {
                this.$store.commit('add', this.data)
            },
        },

        async mounted () {
            // Request products
            const id = window.location.href.match(/\/produitDescription\/(\d+)/)[1];
            console.log(id);
            const productsResponse = await axios.get(import.meta.env.VITE_WP_API_URL + "/wc/v3/products/" + id, {
            auth: {
                username: 'admin',
                password: 'admin'
                }   
            })
            this.data = productsResponse.data
            console.log(productsResponse.data)
            this.isLoading=false
        },
    };

    
</script>

<template>
    <div v-if="this.isLoading" class="loader">
        <div class="custom-loader"></div>
    </div>
    <div v-else class="sectionPrincipale">
        <button class="sectionPrincipale__button">fleche</button>
        <div class="sectionProduct">
            <div class="sectionProduct__left">
                <div class="sectionProduct__left__info">
                    <h1 class="sectionProduct__left__info__title">{{ this.data.name }}</h1>
                    <p class="sectionProduct__left__info__title -bold">{{ this.data.price }}$</p>
                </div>
                <div class="sectionProduct__left__img">
                    <img :src="this.data.images[0].src"/>
                </div>
            </div>

            <div class="sectionProduct__right">
                <div>
                    <div class="sectionProduct__right__menu">
                        <p class="sectionProduct__right__menu__content -bold">Description</p>
                        <p class="sectionProduct__right__menu__content">Details</p>
                    </div>
                    <p class="sectionProduct__right__paragraph">{{ this.data.description }}</p>
                </div>
                
                <div class="sectionProduct__right__buttons">
                    <div v-if="this.data.acf.iscustomable == true " class="sectionProduct__right__buttons">
                    <button1 :color="'brown'">Customize</button1>
                    <router-link to="/achatSelection">
                        <button1 @click="addToCart" :color="'grey'">Add</Button1>
                    </router-link>
                </div>
                <div v-else class="sectionProduct__right__buttons -modif">
                    <router-link to="/achatSelection">
                        <button1 @click="addToCart" :color="'grey'">Add</Button1>
                    </router-link>
                    
                </div>
                    
                </div>
            </div>

        </div>

    </div>

    <h2 class="sectionProduct__left__info__title -opinion">Opinions</h2>
    <div class="sectionOpinion">

        <div class="sectionOpinion__img">
            <img src="../../assets/img/autre/example.png"/>
        </div>
        <div class="sectionOpinion__slider">
                <div class="Wrapper"><!--CREER LE COMPONENT-->
                    <div class="Wrapper__slider">
                        <div class="Wrapper__slider__slide">
                            <div class="Wrapper__slider__slide__content">
                                <div>
                                    <p class="Wrapper__slider__slide__content__text -bold">F_Duboxe</p>
                                    <p class="Wrapper__slider__slide__content__text">The delivery was delayed by a day, but other than that I'm happy it's exactly what I expected.</p>
                                </div>
                                <div class="Wrapper__slider__slide__content__icons">
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                </div>
                            </div>
                        </div>
                        <div class="Wrapper__slider__slide">
                            <div class="Wrapper__slider__slide__content">
                                <div>
                                    <p class="Wrapper__slider__slide__content__text -bold">F_Duboxe</p>
                                    <p class="Wrapper__slider__slide__content__text">The delivery was delayed by a day, but other than that I'm happy it's exactly what I expected.</p>
                                </div>
                                <div class="Wrapper__slider__slide__content__icons">
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                </div>
                            </div>
                        </div>
                        <div class="Wrapper__slider__slide">
                            <div class="Wrapper__slider__slide__content">
                                <div>
                                    <p class="Wrapper__slider__slide__content__text -bold">F_Duboxe</p>
                                    <p class="Wrapper__slider__slide__content__text">The delivery was delayed by a day, but other than that I'm happy it's exactly what I expected.</p>
                                </div>
                                <div class="Wrapper__slider__slide__content__icons">
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                </div>
                            </div>
                        </div>
                        <div class="Wrapper__slider__slide">
                            <div class="Wrapper__slider__slide__content">
                                <div>
                                    <p class="Wrapper__slider__slide__content__text -bold">F_Duboxe</p>
                                    <p class="Wrapper__slider__slide__content__text">The delivery was delayed by a day, but other than that I'm happy it's exactly what I expected.</p>
                                </div>
                                <div class="Wrapper__slider__slide__content__icons">
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                    <img src="../../assets/icon/croix.svg"/>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>

        </div>
    </div>

    <div class="section">
        <div class="section__width">
            <h2 class="section__width__title">You will also like ...</h2>
        </div>
        <div class="card">
            <RandomProducts></RandomProducts>
        </div>
        
        
    </div>

</template>

<style lang="scss" scoped>

.sectionPrincipale{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
    height:90vh;

    &__button{
        margin-top:3%;
        margin-left: 5%;
        width:5%;
    }

}

.sectionProduct{
    display:flex;
    flex-direction:row;
    margin-left: 5%;
    margin-right: 5%;
    height: 85%;

    &__left{
        width:50%;

        &__info{
            display:flex;
            flex-direction:row;
            justify-content:space-between;

            &__title{
                font-family:$Title;
                font-size:$sizeH2;

                &.-bold{
                    font-family:$Content; 
                }

                &.-opinion{
                    margin-left:47%;
                    text-decoration: underline;
                }
            }
        }

        &__img{
            img{
                width:100%
            }
        }
    }

    &__right{
        width:50%;
        padding-left: 10%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;

        &__menu{
            display:flex;
            flex-direction:row;
            gap:5%;
            height:15%;
            margin-bottom:5%;

            &__content{
                width:50%;
                font-family:$Content;
                font-size:$sizebigcontent;
                gap:5px;
                cursor:pointer;

                &.-bold{
                    font-family:$Contentbold;
                    border-bottom: solid 2px #000;

                }
            }
        }

        &__paragraph{
            font-family:$Content;
            font-size: 17px;
        }

        &__buttons{
            padding-bottom:25%;
            display: flex;
            justify-content: space-between;
            width:100%;
            margin-top:10%;

            &.-modif{
                display:flex;
                flex-direction: row-reverse;
            }
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

    &__width{
        width:70%;

        &__title{
            font-family:$Title;
            font-size:$sizeH2;
        }
    }
    
}

.sectionOpinion{
    width:100%;
    height: 80vh;
    display:flex;
    flex-direction:row;

    &__img{
        width:50%;
        height: 70%;
        display: flex;
        align-self: center;
        margin-left: 5%;

        img{
            height:100%;
        }
    }

    &__slider{
        height: 70%;
        display: flex;
        align-self: center;
        margin-right:5%;
    }
}

.Wrapper{
  width: 100%;
  height:100%;

  &__slider{
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction:column;
    align-items: stretch;
    scroll-snap-type: y mandatory;
    height:100%;

    &__slide{
      flex-shrink: 0;
      padding-right:30%;
      scroll-snap-align: center;
      height:45%;
      margin-bottom: 10%;

      &__content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;


        &__text{
            font-family:$Content;
            font-size:$sizecontent;

            &.-bold{
                font-family:$Contentbold;
                margin-bottom:20px;
            }

        }

        &__icons{
            img{
                height:40px;
                width:40px;
            }
        }
      }
    }
  }

  &__slider::-webkit-scrollbar{
    display: none;
  }

}

.card{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    gap: 10%;
    width: 70%;
    margin-top:15vh;

}

</style>