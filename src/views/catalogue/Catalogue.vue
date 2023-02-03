
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
  },
  methods: {
    // changePage (index) {
    //   // If not first and not last page
    //   if (index >= 0 && index <= this.pagesCount - 1) {
    //     this.page = index
    //   }
    // },
    // resetPage () {
    //   this.changePage(0)
    // }
  }
}
</script>
 <template>
  <MenuCatalogue></MenuCatalogue>
  <div class="herosofa"></div>
  <div class="catalogue">
    <h2>All products</h2>
    <ListCards :items="this.products"></ListCards>
  </div>

  <!-- <div class="products-view">
    <div class="container">
      <div class="products-wrapper">
        <h2 class="home__subtitle">Liste des produits</h2>
          <div class="column -size-9">
            <div v-if="paginatedProducts.length" class="products-list || row">
              <div v-for="(product, index) in paginatedProducts" class="products-item || column -size-3">
                
              </div>
            </div>
            <div class="products-view__pagination">
              Page courante : {{ page }}
              <br>
              <div class="products-view__pagination-control">
                <button @click="changePage(page - 1)">Page précédente</button>
                <span class="products-view__page-index" v-for="index in pagesCount" @click="changePage(index - 1)">[ {{ index }} ]</span>
                <button @click="changePage(page + 1)">Page suivante</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div> -->
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
