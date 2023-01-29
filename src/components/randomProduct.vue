<script>
import axios from 'axios';
import Card from './Card.vue';
export default{
    components:{
        Card,
    },
        

    data(){
        return {
            isLoading: true,
            products:[],
        }
    },

    async mounted () {
            // Request products
            const productsResponse = await axios.get(import.meta.env.VITE_WP_API_URL + "/wc/v3/products", {
            auth: {
                username: 'admin',
                password: 'admin'
                }   
            })
            this.products[0] = productsResponse.data[0]
            this.products[1] = productsResponse.data[1]

            this.products[2] = productsResponse.data[2]

            this.isLoading=false
    },


};
</script>
<template>
  <div v-if="this.isLoading"></div>
  <div v-else class="cards">
      <Card  v-for="(item, idx) in this.products" :price="item.price" :title="item.name" :img="item.images[0].src" :id="item.id"></Card>
    </div>
</template>
<style lang="scss">

.cards{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
</style>