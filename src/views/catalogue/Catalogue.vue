<script>
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



