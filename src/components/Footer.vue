<script>
export default{
    data() {
            return{

                reseaux: [
                    {
                        id: 1,
                        desc: "logo facebook",
                        label: "/src/assets/icon/facebook.svg",
                    },
                    {
                        id: 2,
                        desc: "logo pinterest",
                        label: "/src/assets/icon/pinterest.svg",
                    },
                    {
                        id: 3,
                        desc: "logo instagram",
                        label: "/src/assets/icon/insta.svg",
                    },
                    {
                        id: 4,
                        desc: "logo youtube",
                        label: "/src/assets/icon/youtube.svg",
                    },

                ],

                menu: [
                    [
                        {
                            id: 1,
                            lien: "/legal-notice",
                            label: "Legal Notice",
                            isTitle: true,
                        },
                        {
                            id: 2,
                            lien: "",
                            label: "CVG",
                            isTitle: false,
                        },
                        {
                            id: 3,
                            lien: "",
                            label: "RGPD",
                            isTitle: false,
                        },
                        {
                            id: 4,
                            lien: "",
                            label: "Cookies",
                            isTitle: false,
                        },
                        {
                            id: 4,
                            lien: "",
                            label: "Privacy",
                            isTitle: false,
                        },
                    ],
                    [
                        {
                            id: 1,
                            lien: "/legal-notice",
                            label: "Navigation",
                            isTitle: true,
                        },
                        {
                            id: 2,
                            lien: "",
                            label: "Home",
                            isTitle: false,
                        },
                        {
                            id: 3,
                            lien: "",
                            label: "Our Universe",
                            isTitle: false,
                        },
                        {
                            id: 4,
                            lien: "",
                            label: "Our Responsability",
                            isTitle: false,
                        },
                        {
                            id: 5,
                            lien: "",
                            label: "Catalog",
                            isTitle: false,
                        },
                        {
                            id: 6,
                            lien: "",
                            label: "Heart Finding",
                            isTitle: false,
                        },
                    ]
                ]
            }
        }
}


</script>
<template>
    <footer class="footer">
        <div class="footer__haut">
            <ul v-for="(elements, index) in menu" :key="index" :class="`footer__list -index${index + 1}`">
                <li v-for="element in elements" :key="element.id"  class="footer__item">
                    <h2 v-if="element.isTitle === true">{{ element.label }}</h2>
                    <a v-else :href="element.lien"  class="footer__link"> {{ element.label }} </a>

                </li>
            </ul>
            <ul class="footer__list -index3">
                <li class="footer__item -logo">
                    <img src="../assets/img/logo_ferm_living.svg" alt="">
                </li>
            </ul>
        </div>
        <div class="footer__bas">
            <p class="footer__reseaux -index1">Copyright FermLiving 2022</p>
            <ul class="footer__reseaux -index3">
                <li v-for="reseau in reseaux" :key="reseau.id" class="footer__logo">
                    <img :src="reseau.label" :alt="reseau.desc">
                </li>
            </ul>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
    .footer{
        background-color: $darkgrey;
        &__haut, &__bas{
            margin: 0;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 10px;
            grid-auto-rows: minmax(100px, auto);
            & p{
                color: white;
                padding-inline-start: 40px;
                font-family: $Content;
                color: white;
            }
        }
        &__logo{
            display: inline-block;
            padding: 8px;
            vertical-align: middle;
            & img{
                height: 40px;
            }
        }

        &__list, &__reseaux{
            padding-top: 70px;
            padding-bottom: 30px;
            list-style: none;       
            

            &.-index1{
                grid-column: 1;
                grid-row: 1;
            }
            &.-index2{
                grid-column: 2;
                grid-row: 1;
            }
            &.-index3{
                grid-column: 4;
                grid-row: 1;
                margin: auto;
            }
        }
        &__item{
            padding: 5px;
            margin: auto;
            h2{
                font-size: $sizeH2;
                font-family: $Title;
                color: white;
            }
            &.-logo{
                width: 200px;
            }
        }
        &__link{
            text-decoration: none;
            font-family: $Content;
            color: white;
        }

        &__reseaux.-index1{
            align-self: end;
        }
    }
</style>