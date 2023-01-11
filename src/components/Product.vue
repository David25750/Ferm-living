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
      <h1>{{ product.name }}</h1>
      <p>{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <img :src="product.image" :alt="product.name">
    </div>
  </template>
<style lang="scss" scoped>

 
</style>