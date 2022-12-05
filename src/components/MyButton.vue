<script>
export default {
    data(){
        return{
            className : `button ${this.type === "secondary" ? "button -secondary" : ""}`,
        };
        
    },

    props: {
        label: String,
        href: String,
        type:String,
    },
};
</script>

<!--si Type == secondary => class="button" -secondary-->
<!--
    let className;
if(this.type === "secondary"){
    className= "button -secondary";
    else{className ="button";}
}
-->


<!--let className = this.type === "secondary" ? "button -secondary" : "button";-->
<template>

    <a v-if="href" :href="href" :class="className">{{ label }}</a>
    <button v-else class="button">{{ label }}></button>
</template>

<style lang="scss" scoped>
@import "./../scss/foundations/variables.scss";



.button{
    padding:0.5rem;
    display:inline-block;
    background-color: $primarycolor ;
    color: white;
    text-decoration:none;
    border: 1px solid;
    border-radius: 5px;

    &:hover{
        background : transparent;
        border:1px solid black;
        color:black;

    }

    &.-secondary{
        background-color: white;
        color: $primarycolor;
    }
}
</style>