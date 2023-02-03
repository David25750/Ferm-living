<script>
import Banner from "../components/Banner.vue";
export default{
 components: {
    Banner,
 },
};
</script>
<template>
    <div class="Content">
        <div class="flex">
            <router-link to="/universe">
                <button>Click</button>
            </router-link>
            
        </div>
        <div class="Wrapper">
            <div class="Wrapper__slider">
                <div class="Wrapper__slider__slide">
                    <div class="Wrapper__slider__slide__content">
                        <h3>Life is full of contrasts</h3>
                        <p class="-margin">As we navigate expectations and dreams in search of meaning and comfort,
                            we long for a balanced life with room to be ourselves.
                            A place where we can realise the true value of things and feel at home.
                        </p>
                        <p>
                            Based on a passion for authentic design and with responsibility at the heart of every choice we make,
                            we create honest products and calm environments that inspire you to balance the contrasts in life.
                        </p>
                    </div>
                </div>

                <div class="Wrapper__slider__slide">
                    <div class="Wrapper__slider__slide__content">
                        <p class="-big">About ferm </p>
                        <p class="-big -cotta">LIVING </p>
                    </div>
                </div>

                <div class="Wrapper__slider__slide">
                    <div class="Wrapper__slider__slide__content">
                        <img src="../assets/img/universe/FLCréa.JPG"/>
                        <p class="-little">TRINE ANDERSEN</p>
                    </div>
                </div>

                <div class="Wrapper__slider__slide">
                    <div class="Wrapper__slider__slide__content -width">
                        <img class="-other" src="../assets/img/universe/HistoireFL.JPG"/>
                        <p class="-little">PROTOTYPE</p>
                    </div>
                </div>

                <div class="Wrapper__slider__slide">
                    <div class="Wrapper__slider__slide__content">
                        <h3>A Note from our founder</h3>
                        <p class="-margin">It all started with wallpaper, or rather, a lack of it…
                            In 2005, I had just moved into a house with my husband,
                            and just couldn’t seem to find a wallpaper that fit our taste.
                            I therefore decided to make my own, which resulted in ten different wallpaper designs. 
                        </p>
                        <p>
                            I applied to exhibit them at a trade fair in Denmark but couldn’t afford to manufacture all ten designs,
                            so with just one wallpaper and a handful of printouts, ferm LIVING was born.
                        </p>
                    </div>
                </div>

                <div class="Wrapper__slider__slide">
                    <div class="Wrapper__slider__slide__content -row -width">
                        <p class="-big -end">A Note from Our </p>
                        <p class="-big -cotta -vertical">FOUNDER</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p>Project 2022</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.Content{
    padding-left: 7%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    background-color: #F6F4ED;

    img{
        object-fit: cover;
        border: 3px solid #000;

        &.-other{
            height: 50vh;
        }
    }

    h3{
        font-size:$sizebigcontent;
        font-family:$Contentsemibold;
        margin-bottom:50px;
    }

    p{
        font-size:$sizecontent;
        font-family:$Contentlight;

        &.-vertical{
            writing-mode: vertical-rl;
            font-size:90px !important
            //writing-mode:vertical-lr-bt;
        }
        
        &.-margin{
            margin-bottom:30px;
        }

        &.-big{
            font-size:150px;
            font-family:$Contentsemibold;
            line-height:1;

            &.-end{
                text-align:end;
            }
        }

        &.-little{
            font-size:$sizesmallcontent;
            font-family:$Content;
        }

        &.-gras{
            font-family:$Content;
        }

        &.-cotta{
            font-family:$Title;
        }
    }
}

.Wrapper{
  width: 100%;
  height: 80%;
  margin: 0 auto;

  &__slider{
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: auto;
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    scroll-snap-type: x mandatory;

    &__slide{
      flex-shrink: 0;
      padding-right:100px;
      scroll-snap-align: center;

      &__content{
        width: 55vh;
        height: 70vh;
        display:flex;
        flex-direction:column;
        justify-content:center;

        &.-row{
            flex-direction:row;
            align-items:center;
        }

        &.-width{
            width:70vh;
        }

      }
    }
  }

  &__slider::-webkit-scrollbar{
    display: none;
  }

}


</style>

