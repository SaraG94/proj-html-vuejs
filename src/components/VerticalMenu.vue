<script>
    export default{
       props:{
            menuItem:{
                type:Object,
                required:true
            }
        },
        data(){
            return{}
        }
    }
</script>

<template>
    <div class="menu">
        <h1 class="menu__title">{{ menuItem.title }}</h1>
        <ul>
            <li v-for="link in menuItem.links">
                <a href="#" class="link">{{ link }}</a>
            </li>
        </ul>
    </div>
</template>
  
<style lang="scss" scoped>
.menu__title,
.link{
text-transform: capitalize;
}
.menu__title{
    margin-bottom: 18px;
}
li{
    line-height:38px
}
.link{
    font-size: 19px;
}
</style>