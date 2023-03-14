<script>
    import Presentation from './Presentation.vue';
    import SectionServices from './SectionServices.vue'
    export default{
        components:{
            Presentation,
            SectionServices
        },
        data(){
            return{
                brandsLogo:['/img/abstract.png','/img/cglobal.png','/img/next.png','/img/hemisferio.png','/img/spaces.png','/img/digitalbox.png']
            }
        }
    }
</script>

<template>
    <main>
      <Presentation/>
      <SectionServices/>
      <section class="brand">
        <div class="container">
            <div class="brand-area">
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
        </div>
      </section>
  
    </main>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.brand-area{
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