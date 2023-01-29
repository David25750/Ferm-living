<script>
import { slotFlagsText } from '@vue/shared';

  export default {
    props: {
      id: {
        type: Number,
        default: null
      },
      image: {
        type: String,
      },

      quantity: {
        type: Number,
        default: 1
      },

      name: {
        type: String,
        default: null
      },

      attribut1: {
        type: String,
        default: null
      },

      attribut2: {
        type: String,
        default: null
      },

      attribut3: {
        type: String,
        default: null
      },

      price: {
        type: String,
        default: null
      }
    },
    computed: {
      total () {
        return this.price * this.quantity
      }
    },
    methods: {
      removeFromCart () {
        this.$store.commit('remove', this.id)
      },
      updateProductQuantity (quantity) {
      this.$store.commit('updateQuantity', { quantity: quantity, id: this.id })
    }
    }
  }
  </script>
  
  <template>
    <div class="section__content">
            <img :src="image"/>
            <div class="section__content__infos">
                <div class="section__content__infos__line">
                    <p>{{ name }}</p>
                    <p>{{ price}}$</p>
                </div>
                <div class="section__content__infos__line">
                    <div class="section__content__infos__line__blocWidth">
                        <div class="section__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Color : {{attribut1}}</p>
                        </div>
                        <div class="section__content__infos__line__bloc">
                            <div class="carre"></div>
                            <p>Size : {{attribut2}}</p>
                        </div>
                    </div>
                    <div class="section__content__infos__line__quantity">
                        <button @click="updateProductQuantity(quantity - 1)">-</button>
                        <p>{{ quantity }}</p>
                        <button @click="updateProductQuantity(quantity + 1)">+</button>
                    </div>
                    
                    <img @click="removeFromCart" src="src/assets/icon/croix.svg"/>
                </div>
                <div class="section__content__infos__line">
                    <div class="section__content__infos__line__bloc">
                        <div class="carre"></div>
                        <p>Material : {{attribut3}}</p>
                    </div>
                </div>
            </div>
        </div>

  </template>
  
  
  
  <style lang="scss">
  
  .section__content{
    display: flex;
width: 70%;
justify-content: space-between;
height: 20vh;

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

                &__quantity{
                    display:flex;
                    flex-direction:row;
                    gap:10px;
                }

                img{
                    height:20px;
                    width:20px;
                }
            }
        }

    }
  </style>