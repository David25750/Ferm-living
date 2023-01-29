<script>
</script>
<template>
    <nav class="menu">
        <ul class="menu__list -un">
            <li class="menu__item">
                <router-link class="menu__link" to="/universe">Our Universe</router-link>
                <!--<a class="menu__link" href="">Our Universe</a>-->
            </li>
        </ul>
        <ul class="menu__list -deux">    
            <li class="menu__item">
                <router-link class="menu__link" to="/responsibility">Our Responsability</router-link>
                <!--<a class="menu__link" href="">Our Responsability</a>-->
            </li>
        </ul>
        <ul class="menu__list -trois">
            <li class="menu__item -logo">
                <router-link to="/">
                    <img src="../assets/img/logo_ferm_living.svg" alt="">
                </router-link>
            </li>
        </ul>
        <ul class="menu__list -quatre">
            <li class="menu__item">
                <router-link class="menu__link" to="/catalogue">Catalog</router-link>
                <!--<a class="menu__link" href="">Catalog</a>-->
            </li>
        </ul>
        <ul class="menu__list -cinq">
            <li class="menu__item">
                <router-link class="menu__link" to="/tinderTutoriel">Heart Finding</router-link>
                <!--<a class="menu__link" href="">Heart Finding</a>-->
            </li>
        </ul>
        <ul class="menu__list -six">
            <li class="menu__item">
                <router-link to="/compte">
                    <img src="../assets/icon/compte.svg" alt="">
                </router-link>
            </li>
            <li class="menu__item">
                <router-link to="/achatSelection">
                    <img src="../assets/icon/caddie.svg" alt="">
                </router-link>
            </li>
        </ul> 
    </nav>
</template>
<style lang="scss" scoped>
.menu {

background-color: $grey;
width: 100%;
margin: 0;
display: grid;
grid-template-columns: repeat(8, 1fr);
grid-gap: 10px;
grid-auto-rows: minmax(100px, auto);

&__list{
    list-style: none;       
    margin: auto;
    padding: 0;
    &.-un{
        grid-column: 2/3;
        grid-row: 1;
    }
    &.-deux{
        grid-column: 3/4;
        grid-row: 1;
    }
    &.-trois{
        grid-column: 4/6;
        grid-row: 1;
    }
    &.-quatre{
        grid-column: 6/7;
        grid-row: 1;
    }
    &.-cinq{
        grid-column: 7/8;
        grid-row: 1;
    }
    &.-six{
        grid-column: 8;
        grid-row: 1;
    }

}
&__item{
    padding: 5px;
    margin: auto;
    display: inline-block;

    &.-logo img{
        height: 70px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    img{
        height: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }
}
&__link{
    text-decoration: none;
    font-family: $Content;
    color: black;
    
}


}




</style>