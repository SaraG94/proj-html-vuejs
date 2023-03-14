<script>
    export default{
        data(){
            return{
                brandsLogo:['/img/abstract.png','/img/cglobal.png','/img/next.png','/img/hemisferio.png','/img/spaces.png','/img/digitalbox.png']
            }
        }
    }
</script>

<template>
    <section class="brand">
        <div class="container">
            <div class="row brand__text">
                <h1 class="brand__title">Some brands we work with</h1>
                <p class="text-descrition">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="row brand-logo">
                <div class="col" v-for="bradImg in brandsLogo" :key="bradImg.id">
                    <img :src="bradImg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
.brand{
    padding: 118px 0;
}
.container{
    display: flex;
    flex-direction: column;
    gap: 70px;
}
.row.brand__text{
    text-align: center;
    .brand__title{
        font-size: 54px;
    }
    .text-descrition{
        font-size: 24px;
    }
}

.row.brand-logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>