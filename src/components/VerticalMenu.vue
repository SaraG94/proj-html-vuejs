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
            <li v-for="link in menuItem.links" class="active-links">
                <a href="#" class="link">{{ link }}</a>
            </li>
        </ul>
    </div>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.menu__title,
.link{
text-transform: capitalize;
}
.menu__title{
    margin-bottom: 18px;
}
.active-links{
    line-height:38px
}
.link{
    font-size: 19px;
}
/////hover
.active-links:hover{
    color:$primary-color;
    border-right: 1px solid $primary-color;
}
</style>