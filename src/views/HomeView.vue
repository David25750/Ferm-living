<script>

  import MyTitle from "./../components/MyTitle.vue";
  export default {
    components: {
      MyTitle,
    },
  };
</script>

<template>
  <main>
    <MyTitle size="tiny" type="H2" label="Petit Titre H2"></MyTitle>
    <MyTitle size="big" label="Grand Titre H1"></MyTitle>
    
  </main>
</template>
