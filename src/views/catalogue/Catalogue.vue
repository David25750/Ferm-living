
<script>
import Card from '../../components/Card.vue';
import ListCards from '../../components/ListCards.vue';
import MenuCatalogue from '../../components/MenuCatalogue.vue';
import axios from 'axios'
export default {
  components: { 
    Card,
    ListCards,
    MenuCatalogue,
  },

  data () {
    return {
      products: [],
      isLoading: true,
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

    
    this.products = productsResponse.data
    console.log(this.products[0].name)
    this.isLoading=false
  },
  methods: {

  }
}
</script>
 <template>
      <div v-if="this.isLoading" class="loader">
        <div class="custom-loader"></div>
    </div>
    <div v-else>
  <MenuCatalogue></MenuCatalogue>
  <div class="herosofa"></div>
  <div class="catalogue">
    <h2>All products</h2>
    <ListCards :items="this.products"></ListCards>
  </div>
</div>
  
</template>


<style lang="scss">

.herosofa {
    background-image: url(../../assets/img/autre/coverCatalogue.png);
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 80vh;
    padding-block: 80px;

}

.catalogue{
  width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  h2{
    font-family:$Title;
    font-size:$sizeH1;
    padding-top:10vh;
    padding-bottom:10vh;
  }


}


</style>
