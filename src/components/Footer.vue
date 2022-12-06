<script>
</script>
<template>
    <footer class="footer">
        <div class="footer__haut">
            <ul class="footer__list -un">
                <li class="footer__item">
                    <h2>Legal Notice</h2>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">RGPD</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Cookies</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Privacy</a>
                </li>
            </ul>

            <ul class="footer__list -deux">
                <li class="footer__item">
                    <h2>Navigation</h2>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Home</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Our Universe</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Our Responsabilities</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Catalog</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Heart Finding</a>
                </li>
            </ul>
            <ul class="footer__list -trois">
                <li class="footer__item -logo">
                    <img src="../assets/img/logo_ferm_living.svg" alt="">
                </li>
            </ul>
        </div>
        <div class="footer__bas">
            <p>Copyright FermLiving 2022</p>
            <ul class="footer__reseaux">
                <li class="footer__logo">
                    <img src="../assets/icon/facebook.svg" alt="logo facebook">
                </li>
                <li class="footer__logo">
                    <img src="../assets/icon/pinterest.svg" alt="logo pinterest">
                </li>
                <li class="footer__logo">
                    <img src="../assets/icon/insta.svg" alt="logo instagram">
                </li>
                <li class="footer__logo">
                    <img src="../assets/icon/youtube.svg" alt="logo youtube">
                </li>
            </ul>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
    .footer{
        background-color: $darkgrey;
        &__list{
            list-style: none;       
            margin: auto;
            padding: 0;
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
    }
</style>