<script>
</script>
<template>
    <div class="menuCatalogue">
            <a class="menuCatalogue__link" href="/catalogue">All products</a>
            <a class="menuCatalogue__link" href="/catalogueSofa">Sofas</a>
            <a class="menuCatalogue__link" href="#">Furnitures</a>
            <a class="menuCatalogue__link" href="#">Kitchen</a>
            <a class="menuCatalogue__link" href="#">Lightning</a>
            <a class="menuCatalogue__link" href="#">Green Living</a>
            <a class="menuCatalogue__link" href="#">Decorations</a>
            <a class="menuCatalogue__link" href="#">Responsible products</a>
    </div>
</template>
<style lang="scss" scoped>
.menuCatalogue{
    height:100px;
    background-color: $brown;
    display:flex;
    justify-content: center;
    align-items:center;
    
    &__link{
        color:$grey;
        text-decoration: none;
        margin:20px;
        font-family: $Content;
        font-size:$sizecontent;
    }

    &__link:hover{
        text-decoration: underline 4px;
    }
}
</style>