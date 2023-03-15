<script>
    export default{
        props:{
            element:{
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
    <div class="card-member">
        <img :src="element.picture" alt="">
        <h2 class="option">
            {{element.text }}
        </h2>
        <div class="stat">
            <h3 class="numb-stat">{{ element.result }}</h3>
            <p class="descrition-stat">
                {{ element.descritionResult }}
            </p>
        </div>
    </div>               
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.card-member{
    display: flex;
    flex-direction: column;
    gap: 30px;
    .option{
        font-size: 32px;
    }
    .numb-stat{
        font-size: 54px;
    }
}

.stat::before{
    content: '';
    display: block;
    margin-bottom: 30px;
    border-bottom: 1px dashed #F2F2F2;
}

.option:hover{
    color:$primary-color;
}
</style>