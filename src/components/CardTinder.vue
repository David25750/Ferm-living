<script>
    export default{
        props:{
            title:{
                type: String,
                default: null,
            },

            backgroundImage: {
                type: String,
                default: null,
            },
        },

        computed: {
            cssVars() {
                return {
                    '--background-image': `url('${this.backgroundImage}')`
                };
            },
        },

    };
</script>
<template>
    <div class="header" :style="cssVars">
        <div class="header__content">
            <div>
                <h1 class="header__title">{{ title }}</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    background-image: var(--background-image);
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;

    

    &__content {
        position: absolute;
        text-align: center;
        height: 80%;
        width:33%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }


    &__title{
        font-family: $Title;
        font-size: $sizeH1;
        color: white;
    }

}
</style>