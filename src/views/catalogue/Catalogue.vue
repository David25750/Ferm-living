<!-- <script>
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    // Récupérer les produits depuis la base de données
    axios.get('/api/products').then(response => {
      this.products = response.data
    })
  }
}
</script>
<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
    <img :src="product.image" :alt="product.name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}
    }
  },
  created() {
    // Récupérer les informations du produit en fonction de l'ID
    axios.get('/api/products/' + this.$route.params.id).then(response => {
      this.product = response.data
    })
  }
}
</script>

<template>
    <div>
      <div v-for="product in products" :key="product.id">
        <h1>{{ product.name }}</h1>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>
        <img :src="product.image" :alt="product.name">
      </div>
    </div>
  </template>

  <style lang="scss" scoped>
</style>


 -->
<script>
import axios from 'axios';
import Card from '../../components/Card.vue';
import ListCards from '../../components/ListCards.vue';
import MenuCatalogue from '../../components/MenuCatalogue.vue';

export default {
  components: { 
    Card,
    ListCards,
    MenuCatalogue,
  },

  data () {
    return {
      products: [],
      // page: 0,
      // byPage: 2,
      // categories: []
    }
  },
  // watch: {
  //   categories: 'resetPage',
  // },
  computed: {
  
    // paginatedProducts () {
    //   // page 0 // page 1 // page 2
    //   // (0, 3) -> (3, 6) -> (6, 9)
    //   return this.products.slice(this.page * this.byPage, (this.page + 1) * this.byPage)
    // },
    // pagesCount () {
    //   return Math.ceil(this.products.length / this.byPage)
    // }
  },
  async mounted () {
    // Request products
    const productsResponse = await axios.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products')
    this.products = productsResponse.data
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
    <p class="text-h2 text-white mb-5">Liste des produits</p>
    <ListCards></ListCards>
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
    background-image: url(../../assets/img/sofa/threesofas.jpg);
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

}

// .products-view {
//   &__pagination {
//     margin-top: 50px;
//   }
//   &__pagination-control {
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: space-between;
//   }
//   &__page-index {
//     font-size: 18px;
//     font-weight: 700;
//     line-height: 24px;
//     cursor: pointer;
//   }
// }
</style>
