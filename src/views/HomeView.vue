<script>
  import MyButton from "./../components/MyButton.vue";
  import MyTitle from "./../components/MyTitle.vue";
  export default {
    components: {
      MyButton,
      MyTitle,
    },
  };
</script>

<template>
  <main>
    <MyTitle size="tiny" type="H2" label="Petit Titre H2"></MyTitle>
    <MyTitle size="big" label="Grand Titre H1"></MyTitle>
    
    <MyButton label="Cliquez la svp" href="/lien"></MyButton>
    <MyButton label="Valider le formulaire" type="secondary"></MyButton>
  </main>
</template>
