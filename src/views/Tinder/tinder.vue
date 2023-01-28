<script>
import CardTinder from '../../components/CardTinder.vue';
import Banner from "../../components/Banner.vue";
    export default{
        components:{
            CardTinder,
            Banner,
        },

        data(){
            return{
                arrCards: [
                    {
                        id: 1,
                        title: "Sofa Turn",
                        backgroundImage: "src/assets/img/tinder/sofaTurn.png",
                        status: null,
                    },
                    {
                        id: 2,
                        title: "Sofa Rico Blanc",
                        backgroundImage: "src/assets/img/tinder/sofaRicoblanc.png" ,
                        status: null,

                    },
                    {
                        id: 3,
                        title: "Sofa Rico",
                        backgroundImage: "src/assets/img/tinder/sofaRico.png" ,
                        status: null,

                    },
                ]
            }
            
        },
        computed() {

        },
        methods:{
            deleteCard(type){
                console.log(type)
                this.arrCards[this.arrCards.length - 1].status = type;
                setTimeout(() => this.arrCards.pop(), 350);
            },

        }
    };
</script>
<template>
    <div class="containerCards">
        
        <div v-for="(card, index) in this.arrCards">
            <CardTinder :class="card.status === 'left' ? 'card-default-left' : card.status === 'right' ? 'card-default-right' : '' " :title="card.title" :backgroundImage="card.backgroundImage" :key="card.id"></CardTinder>
        </div>
       
        <div v-if="this.arrCards.length > 1" class="header__buttons">
            <button @click="deleteCard('left')">N</button>
            <button >...</button>
            <button @click="deleteCard('right')">O</button>
        </div>

        <div v-else class="header__buttons">
            <router-link to="/tinderResult"><button>N</button></router-link>
            <button >...</button>
            <router-link to="/tinderResult"><button>O</button></router-link>
        </div>
    </div>
    
    <Banner></Banner>
</template>
<style lang="scss" scoped>

.containerCards{
    position: relative;
    width:100%;
    height:100vh;
}
.header__buttons {
        display:flex;
        flex-direction:row;
        justify-content: space-evenly;
        gap:100px;
        position:absolute;
        bottom: 20%;
        right: 50%;
        left: 50%;
    }

    .card-default-left {
        position: absolute;
        opacity: 1;
    left: 0px;
    -webkit-animation: slide-left 0.5s forwards;
    animation: slide-left 0.5s forwards;
    }

    @-webkit-keyframes slide-left {
    20% { 
        left: -25%; opacity: 0.8;}
    100% { left: -100%; opacity: 0; }
}

@keyframes slide-left {
    20% { 
        left: -25%; opacity: 0.8;}
    100% { left: -100%; opacity: 0; }
}

.card-default-right {
        position: absolute;
        opacity: 1;
    left: 0px;
    -webkit-animation: slide-right 0.5s forwards;
    animation: slide-right 0.5s forwards;
    }

    @-webkit-keyframes slide-right {
    20% { 
        left: 25%; opacity: 0.8;}
    100% { left: 100%; opacity: 0; }
}

@keyframes slide-right {
    20% { 
        left: 25%; opacity: 0.8;}
    100% { left: 100%; opacity: 0; }
}
</style>