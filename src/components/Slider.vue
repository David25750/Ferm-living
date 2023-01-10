<!--EN COURS DE PRODUCTION-->
<script>
export default {
  props: {

    urlImg:{
        type: String,
    },

    heightImg:{
        tupe: String,
    },

    widthImg: {
      type: String,
      default: 'transparent',
    },

    Spacing: {
      type: String,
      default: '100px',
    },
  },


};
</script>
<template>
     <div class="Wrapper">
        <div class="Wrapper__slider">
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
                <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
                <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
                <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
                <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
                <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
          <div class="Wrapper__slider__slide">
            <div class="Wrapper__slider__slide__content">
                <img src="../assets/img/homepage/light fl.jpg"/>
            </div>
          </div>
        </div>
    </div>


</template>
<style lang="scss" scoped>
.Wrapper{
  width: 100%;
  margin: 0 auto;

  &__slider{
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: auto;
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
    align-items: stretch;
    scroll-snap-type: x mandatory;

    &__slide{
      flex-shrink: 0;
      padding-left:100px; //MODIFIABLE
      scroll-snap-align: center;

      &__content{
        width: 300px; //MODIFIABLE
        height: 300px; //MODIFIABLE

        img{
          width:100%;
          height:100%;
        }
      }
    }
  }

  &__slider::-webkit-scrollbar{
    display: none;
  }

}

</style>