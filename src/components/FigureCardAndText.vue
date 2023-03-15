<script>
    export default{
        props:{
            element:{
                type:Object,
                required:true
            }
        },
        data(){
            return{
            }
        }
    }
</script>

<template>
    <div class="card-suggest">
        <img :src="element.img" alt="">
        <a href="#" class="suggest-blog">
            <h2>{{ element.title }}</h2>
        </a>
        
    </div>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.suggest-blog h2{
    font-size: 32px;
    text-transform: capitalize;
    margin-top: 30px;
}

.suggest-blog:hover{
    color:$primary-color;
}
</style>