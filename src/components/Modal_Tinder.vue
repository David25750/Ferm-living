<script>
import ButtonTest from "./elements/Button.vue"
    export default{
        components:{
            ButtonTest,
        },
        props:{
            paragraph:{
                type:String,
                default:null,
            },
            text_button:{
                type:String,
                default:null,
            },

        }
    };


</script>
<template>
    <div class="containerOverlay">
       <div class="card">
            <p class="card__paragraph">{{ paragraph }}</p>
            <button @click="$emit('onClick')">{{ text_button }}</button>
        </div> 
    </div>
    


</template>
<style lang="scss" scoped>
    .card{
        background-color: $grey;
        width:25%;
        margin-top:15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        padding-bottom: 50px;

        &__paragraph{
            font-family: $Content;
            font-size: $sizecontent;
            color: black;
            text-align: center;
            width: 80%;
            padding-bottom: 25px;
        }
    }

    .containerOverlay{
        z-index:4;
        position:relative;
        width:100%;
        display: flex;
        justify-content: center;
    }

</style>