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

      <section class="team">
        <div class="container">
            <div class="row title">
                <h1>Trusted bu Leading Organisations</h1>
            </div>
            <div class="row cards-team">
                <div class="col-4">
                    <div class="card-member">
                        <img src="/img/case-studies-1-400x450.jpg" alt="">
                        <p>
                            How Spaces attracted five milion visitors by improving the content
                        </p>
                        <div class="stat">
                            <h3>200%</h3>
                            <p>
                                Higher revenue from digital
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-member">
                        <img src="/img/case-studies-1-400x450.jpg" alt="">
                        <p>
                            How Spaces attracted five milion visitors by improving the content
                        </p>
                        <div class="stat">
                            <h3>200%</h3>
                            <p>
                                Higher revenue from digital
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-member">
                        <img src="/img/case-studies-1-400x450.jpg" alt="">
                        <p>
                            How Spaces attracted five milion visitors by improving the content
                        </p>
                        <div class="stat">
                            <h3>200%</h3>
                            <p>
                                Higher revenue from digital
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row more">
                <button class="orange">Read more case studies</button>
            </div>
        </div>

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
//////section cardteam
section.team{
    padding: 100px 0;
}
section.team .container{
    display: flex;
    flex-direction: column;
    gap: 70px;
}

.title,
.more{
    text-align: center;
    
}

.title h1{
    font-size: 54px;
    padding: 18px 0;
}

.cards-team{
    display: flex;
    margin: 0 -20px;
    .col-4{
        flex-basis: calc((100% /12)*4);
        padding: 0 20px;
    }
}
.card-member{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.stat::before{
    content: '';
    display: block;
    margin-bottom: 30px;
    border-bottom: 1px dashed #F2F2F2;
}

.more .orange{
    padding: 18px 41px;
}
</style>