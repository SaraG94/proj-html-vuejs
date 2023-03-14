<script>
    import Presentation from './Presentation.vue';
    import SectionServices from './SectionServices.vue';
    import SectionBrands from './SectionBrands.vue'
    export default{
        components:{
            Presentation,
            SectionServices,
            SectionBrands
        },
        data(){

        }
    }
</script>

<template>
    <main>
      <Presentation/>
      <SectionServices/>
      <SectionBrands/>
      
      <div class="consultant-reiff">
        <div class="container">
            <div class="card">
                <div class="profile">
                    <img class="profile-img" src="/img/marketing-expert-cta.png" alt="">
                    <div class="profile-info">
                        <h2>Sandy Reiff</h2>
                        <p class="occupation"> Marketing consultant expert</p>
                    </div>
                </div>
                <h2>Drive Leads and Sales with Avada</h2>
                <button class="phone">
                    <font-awesome-icon class="phone-icone" icon="fa-solid fa-phone"/>
                    (555)802-1234
                </button>
            </div>
        </div>
      </div>
    </main>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.consultant-reiff{
    padding: 28px 0;
}
.card{
    display: flex;
    align-items: center;
    gap: 72px;
    padding: 15px 59px;
    box-shadow: 0px 10px 8px #dedede;
    border-radius: 10px;

    h2{
        font-size: 26px;
    }
}

.profile{
    display: flex;
    align-items: center;
    gap: 27px;

    .occupation{
        font-size: 14px;
    }
}

.profile-img{
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border-radius: 999px;
    max-width: 65px;
}

button.phone{
    margin-left: auto;
    padding: 15px 39px;
    color: $orange-color;
    background-color: $light-orange;
}
</style>