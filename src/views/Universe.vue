<template>
  <div class="universIntro">
        <div class="universIntro__text">
            <h1>We work for a better tomorrow</h1>
            <p>OUR UNIVERSE</p>
        </div>
  </div>
    <div class="story">
        <div class="story__focus">
          <div class="story__un">
            <span class="story__title">BRAND HISTORY</span>
          </div>
          <div class="story__deux">
            <span class="story__title-2">BRAND HISTORY</span>

            <div class="story__content">
              <img class="story__img" src="/src/assets/img/universe/Histoire4FL.JPG" alt="#" />
              <button class="story__button">
              <a class="story__link" href="#"> Discover our story </a>
              </button>
              <p class="story__desc">At ferm LIVING, we celebrate the contrasts in life. We want people to feel confident in the choices </p>
            </div>
            <div  class="story__title-3">
              <span>BRAND HISTORY</span>
            </div>
          
          </div>
          <div class="story__trois">
            <span class="story__title">BRAND HISTORY</span>
          </div>
        </div>
    </div>
    <div class="aboutus">
        <div class="aboutus__image">
          <img class="aboutus__img" src="/src/assets/img/universe/about_us_content.jpg" alt="#" />
        </div>
        <div class="aboutus__content">
            <h2 class="aboutus__title">About Us</h2>
            <p class="aboutus__text">Life is full of contrasts. As we navigate expectations and dreams in search of
                meaning and comfort, we long for a balanced life with room to be ourselves. A place where we can realise
                the true value of things and feel at home. Based on a passion for authentic design and with
                responsibility at the heart of every choice we make, we create honest products and calm environments
                that inspire you to balance the contrasts in life.</p>
            <p><br>
                From our home in Copenhagen, we work with artisans around the world, fusing our Scandinavian mindset
                with global skills and traditions. Our collections are defined by soft forms, rich textures and curious
                details that let you create composed atmospheres with a touch of the unexpected. From materials and
                processes to production and delivery, we challenge ourselves to help shape a sustainable future, making
                it easier for you to make responsible choices. We create collections of furniture, accessories and
                lighting, so you can create space to feel comfortably you.</p>
        </div>
    </div>
    <div class="citation">
        <p class="citation__title">“Most important to me, however, is that ferm LIVING reflects a set of values that we
            can be proud of.”</p>
    </div>
    <div class="container">
    <div class="Wrapper">
        <h2 class="Wrapper__title">Materials</h2>
        <div class="Wrapper__slider">
            <div class="Wrapper__slider__slide">
                <img class="materials__img" src="../assets/img/universe/marble.png">
                <p class="materials__desc">Marble and Stone</p>
            </div>
            <div class="Wrapper__slider__slide">
                <img class="materials__img" src="../assets/img/universe/glass.png">
                <p class="materials__desc">Glass and Mirrors</p>
            </div>
            <div class="Wrapper__slider__slide">
                <img class="materials__img" src="../assets/img/universe/Ceramique.png">
                <p class="materials__desc">Ceramics</p>
            </div>
            <div class="Wrapper__slider__slide">
                <img class="materials__img" src="../assets/img/universe/wood.png">
                <p class="materials__desc">Wood</p>

            </div>
            <div class="Wrapper__slider__slide">
                <img class="materials__img" src="../assets/img/universe/textile.png">
                <p class="materials__desc">Textils</p>
            </div>
          </div>
    </div>
    
      <div class="ourstores">
          <div class="ourstores__content">
              <h3 class="ourstores__title">City/area</h3>
              <ul class="ourstores__categories">
                  <li class="ourstores__categorie">Accessories</li>
                  <li class="ourstores__categorie">Furnitures</li>
                  <li class="ourstores__categorie">Green Living</li>
                  <li class="ourstores__categorie">Kids</li>
              </ul>
              <ul class="ourstores__list">
                  <li class="ourstores__item">
                      <img class="ourstores__img" src="../assets/img/universe/Rectangle 90.png" alt="#">
                      <p class="ourstores__name">Design District</p>
                  </li>
                  <li class="ourstores__item">
                      <img class="ourstores__img" src="../assets/img/universe/Rectangle 91.png" alt="#">
                      <p class="ourstores__name">Design District</p>
                  </li>
                  <li class="ourstores__item">
                      <img class="ourstores__img" src="../assets/img/universe/Rectangle 92.png" alt="#">
                      <p class="ourstores__name">Design District</p>
                  </li>
                  <li class="ourstores__item">
                      <img class="ourstores__img" src="../assets/img/universe/Rectangle 93.png" alt="#">
                      <p class="ourstores__name">Design District</p>
                  </li>
              </ul>
        </div>
          <div class="ourstores__map">
              <img src="../assets/img/universe/Capture.PNG" alt="#">
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
  .universIntro{
    width: 100%;
    height: 90vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../assets/img/universe/Louisiana_Top_Image_1.webp);
    background-size: cover;
    background-position: center, center;
    display: flex;
    flex-direction: column;

    &__text{
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      h1{
        font-family: $Title;
        font-size: $firstTitle;
        text-align: center;
        color: $grey;
        width: 50%;
        font-weight: lighter;
      }
      p{
        font-family: $Contentlight;
        font-size: $sizecontent;
        color: $grey;
      }
    }
  }

  .story__focus{
    width: 100%;
    height: 100vh;
    background-image: url(../assets/img/universe/Histoire3FL.JPG);
    background-size: cover;
    background-position: center, center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span{
      font-family: $Title;
      font-size: $sizeH1;
      color: $grey;
    }
    .story__un, .story__trois{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);

      .story__title{
        grid-column: 2;
        grid-row: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }
    }
    .story__deux{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);
         

      .story__title-2{
        grid-column: 1;
        grid-row: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
      }
      .story__content{
        grid-column: 2;
        grid-row: 1;
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: column;

        button{
          background-color: rgba(255, 255, 255, 0);
          border: solid 1px white;
          padding: 8px;
          margin: 15px;
          a{
            text-decoration: none;
            color: $grey;
          }
        }

        img{
          width: 400px;
          height: 400px;
          object-fit: cover;
        }
        p{
          width: 80%;
          color: $grey;
          font-family: $Contentsemibold;
        }
      }
      .story__title-3{
        grid-column: 3;
      grid-row: 1;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      writing-mode: vertical-lr;
      }
    }
  }
  .story__trois{
    .story__title{
      transform: rotate(180deg);
    }
  }
.aboutus{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: $grey;
  gap: 40px;

&__image{
  width: 50%;
  display: flex;
  justify-content: flex-end;
  img{
    width: 495px;
  }
}
  &__content{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p, h2{
      width: 80%;
    }
    p{
      font-family: $Content;
      font-size: $sizecontent;
    }
    h2{
      font-family: $Title;
      font-size: $sizeH2;
      margin-bottom: 25px;
      font-weight: lighter;
    }
  }
}
.citation{
  min-height: 30vh;
  display: flex;
  margin: auto;
  background-color: $green;

  p{
    margin: auto;
    font-family: $Title;
    font-size: $sizeH2;
    text-align: center;
    width: 80%;
    color: $grey;
  }
}

.Wrapper{
  width: 100%;
  margin: 0 auto;
  padding: 0 0 50px;


&__title{
  font-family: $Title;
  font-size: $sizeH2;
  text-align: center;
  margin: 50px;
  font-weight: lighter;
}
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
      padding-right:100px;
      scroll-snap-align: center;
      
      p{
          text-align: center;
          font-family: $Content;
          font-size: $sizecontent;
        }
      &__content{
        width: 300px; /* exemple */
        height:400px;

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
.ourstores{
  display: flex;
  justify-content: space-around;
  align-items: center;
  .ourstores__title{
    font-family: $Contentlight;
    font-size: $sizebigcontent;
    color: $green;
    border-bottom: solid 2px $green;
    width: 50%;
  }
  .ourstores__content{
    width: 50%;

    .ourstores__categories{
      display: flex;
      justify-content: space-around;
      padding: 15px;
      .ourstores__categorie{
        list-style-type: none;
        font-family: $Content;
        font-size: $sizecontent;
      }
    }
  }
}
.ourstores__list{


  .ourstores__item{
    display: flex;
    gap: 20px;
    border-bottom: solid 1px black;

    img, p{
      padding-top: 25px;
      padding-bottom: 25px;
    }
    p{
      font-family: $Content;
    }
  }
}
.container{
  margin-left: 30px;
  margin-right: 30px;
}
</style>
