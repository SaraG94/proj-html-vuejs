<script>
    import Presentation from './Presentation.vue';
    import SectionServices from './SectionServices.vue';
    import SectionBrands from './SectionBrands.vue';
    import SectionTeam from './SectionTeam.vue';
    export default{
        components:{
            Presentation,
            SectionServices,
            SectionBrands,
            SectionTeam
        },
        data(){
            return{
                
            }
        }
    }
</script>

<template>
    <main>
      <Presentation/>
      <SectionServices/>
      <SectionBrands/>
      <!-- card!!! -->
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
      <SectionTeam/>
      <section class="us">
        <div class="container we-do">
            <div class="row">
                <div class="col-6">
                    <div class="why-us">
                        <h2 class="why-us__title">
                            We boost our clients' bottom line by optimizing their growth potential.
                        </h2>
                        <p class="why-us__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum omnis beatae, a atque at.
                        </p>
                        <button class="orange why-us__button">
                            Why work with us
                        </button>
                    </div>
                </div>
                <div class="col-6 figure">
                    <img src="/img/we-boost-our-clients-600x549.jpg" alt="">
                </div>
                <div class="col-6 info">
                    <div class="relations">
                        <h2>We build relationships</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus nostrum expedita suscipit quia accusamus quis?
                        </p>
                    </div>
                    <div class="focus">
                        <h2>Proprietary processes</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus nostrum expedita suscipit quia accusamus quis?
                        </p>
                    </div>
                </div>
                <div class="col-6 top-quality">
                    <div class="quality">
                        <img src="" alt="">
                        <div class="descrition">
                            <h3>Accountability</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div class="quality">
                        <img src="" alt="">
                        <div class="descrition">
                            <h3>Trasparency</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div class="quality">
                        <img src="" alt="">
                        <div class="descrition">
                            <h3>Investement</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container"></div>
      </section>
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

////newsection
section.us{
    background-color: #F5F5F7;
}
.we-do .row{
    display: flex;
    flex-wrap: wrap;

    .col-6{
        flex-basis: calc((100% /12)*6);
    }
}

.why-us{
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding: 63px 108px 0 54px;

    .why-us__title,
    .why-us__button{
        text-transform: capitalize;
    }

    .why-us__title{
        font-size: 54px;
    }

    .why-us__text{
        font-size: 24px;
    }

    .why-us__button{
        max-width: max-content;
        padding:17px 39px;
    }
}

.figure{
    display: flex;
    justify-content: end;
}

</style>