<script>
import Button1 from "../components/elements/Button.vue";

export default {
    components: {
      Button1
    },
  };
</script>
<template>

  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button1  
            :color="'grey'">
            
            Réservation en magasin
  </Button1>
  <button1  :color="'brown'" >
            Voir le panier
  </Button1>
  <button1  :color="'white'" >
            click
  </Button1>
</template>

<style lang="scss" scoped>

</style>
