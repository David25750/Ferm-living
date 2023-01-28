<script>
import Banner from "../../components/Banner.vue";
import Modal from "../../components/Modal_Tinder.vue";

export default{
    components:{
        Banner,
        Modal,
    },

    data(){
        return{
            isModalOpen1: false,
            isModalOpen2: false,
            isModalOpen3: false,
            isModalOpen4: false,
            isModalOpen5: false,
        }
        
    },

    methods: {
        changeStateModal1() {
        this.isModalOpen1 = !this.isModalOpen1;
        },

        changeStateModal2() {
        this.isModalOpen2 = !this.isModalOpen2;
        },

        changeStateModal3() {
        this.isModalOpen3 = !this.isModalOpen3;
        },

        changeStateModal4() {
        this.isModalOpen4 = !this.isModalOpen4;
        },

        changeStateModal5() {
        this.isModalOpen5 = !this.isModalOpen5;
        },

        handleClick1() {
            this.changeStateModal1();
            this.changeStateModal2();
        },

        handleClick2() {
            this.changeStateModal2();
            this.changeStateModal3();
        },

        handleClick3() {
            this.changeStateModal3();
            this.changeStateModal4();
        },

        handleClick4() {
            this.changeStateModal4();
            this.changeStateModal5();
        },

        redirect() {
        this.$router.push('/tinder');
        }
    },
};
</script>
<template>

    <div class="header">

        <div class="header__overlay"></div>
        <div class="header__content">
            <div>
                <p class="header__title">Find</p>
                <p class="header__title -bold">The furniture</p>
                <p class="header__title">of your heart</p>
            </div>
            
            <div class="header__buttons">
                <button @click="changeStateModal1" v-bind:class="{ 'focusElement': isModalOpen3 }">N</button>
                <button @click="changeStateModal1" v-bind:class="{ 'focusElement': isModalOpen4 }" :disabled="isModalOpen4">...</button>
                <button @click="changeStateModal1" v-bind:class="{ 'focusElement': isModalOpen2 }">O</button>
            </div>
        </div>
        <div v-show="isModalOpen1 || isModalOpen2 || isModalOpen3 || isModalOpen4 || isModalOpen5" class="header__overlay -second"></div>
        
        <!--SYSTEME MODAL-->
        <Modal 
            v-show="isModalOpen1"
            @onClick="handleClick1"
            paragraph="Heart Finding allow you to find the furniture of our catalog wich suit the best"
            text_button="Agree"></Modal>
            
        <Modal 
            v-show="isModalOpen2"
            @onClick="handleClick2"
            paragraph="Click here if you like the furniture"
            text_button="Agree"></Modal>

        <Modal 
            v-show="isModalOpen3"
            @onClick="handleClick3"
            paragraph="Click here if you don't like"
            text_button="Agree"></Modal>

        <Modal 
            v-show="isModalOpen4"
            @onClick="handleClick4"
            paragraph="And click here if you want to see more informations"
            text_button="Agree"></Modal>

        <Modal 
            v-show="isModalOpen5"
            @onClick="redirect"
            paragraph="Let's start !!"
            text_button="Agree"></Modal>

        <!--FIN SYSTEME MODAL-->
    </div>


    

    <Banner></Banner>
    <Footerr></Footerr>

</template>
<style lang="scss" scoped>

.header {
    background-image: url(../../assets/img/tinder/tinder_img.jpg);
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    &__overlay {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(black, 0.5);

        &.-second{
            z-index:3;
        }
    }
    

    &__content {
        position: absolute;
        text-align: center;
        height: 60%;
        width:33%;
        margin-top: 20%;
        margin-bottom: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &__buttons {
        display:flex;
        flex-direction:row;
        justify-content: space-evenly;
    }

    &__title {
        font-family: $Contentlight;
        font-size: $sizeH1;
        color: white;

        &.-bold{
            font-family: $Title;
            font-size: 90px;
        }
    }

}

.focusElement{
    z-index:4;
}
</style>