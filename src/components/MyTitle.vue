<script>
export default{
    data(){
        return{
            className: `title -${this.size}`,
        };
    },
    props: {
        size: String,
        type: String,
        label: String,
    },
};
</script>

<template>
    <H2 v-if="type === 'H2'" :class="className">{{label}}</H2>
    <H1 v-else :class="className">{{label}}</H1>
</template>

<style lang="scss" scoped>
//@import "./../scss/foundations/variables.scss";

.title{
    font-family:Arial, Helvetica, sans-serif;

    &.-tiny{
        font-size:1rem;
    }

    &.-big{
        font-size:3rem;
    }
}
</style>