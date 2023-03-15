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
        <h1>{{ menuItem.title }}</h1>
        <ul>
            <li v-for="link in menuItem.links">
                <a href="">{{ link }}</a>
            </li>
        </ul>
    </div>
</template>
  
<style lang="scss" scoped>

</style>