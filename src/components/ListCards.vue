<script>
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>
<template>
  <div class="list">
    <Card v-for="item in this.items" :price="item.price" :title="item.name" :img="item.images[0].src" :id="item.id" :isCustomable="item.acf.iscustomable"></Card>
  </div>
</template>

<style lang="scss">
.list{
    display:flex;
    justify-content:center;
    align-items:center;
    height:auto;
    gap:10%;
    flex-wrap: wrap;
}
</style>
