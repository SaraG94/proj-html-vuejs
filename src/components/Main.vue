<script>
    import Presentation from './Presentation.vue';
    export default{
        components:{
            Presentation
        }
    }
</script>

<template>
    <main>
      <Presentation/>
      <section class="services">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <img src="/img/sales-development.png" alt="">
                </div>
                <div class="col-4 service">
                    <div class="title">
                        <h4 class="subtitle">
                            <font-awesome-icon class="icone-subtitle blue" icon="fa-solid fa-chart-simple"/>
                            business growth
                        </h4>
                        <h1 class="service__title">
                            Increase brand awareness
                        </h1>
                    </div>
                  
                    <p class="service-descrition">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dicta aspernatur animi fugiat error eligendi unde, officiis eaque? Provident nostrum officiis aperiam iusto!
                    </p>
                    <button class="orange">
                        Get a Consultation
                    </button>
                </div>
            </div>
        </div>
      </section>
    </main>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

section.services{
    margin-top: -30px;
    background-color: white;
}
.row{
    display: flex;
    justify-content: space-around;
    padding: 150px 0;

    .col-5{
        flex-basis: calc((100% /12)*5);
    }

    .col-4{
        flex-basis: calc((100% /12)*4);
    }
}

.service{
    display: flex;
    flex-direction: column;
    gap: 36px;

    button{
        max-width: max-content;
        padding: 15px 38px;
    }
}
.service .title{
    text-transform: capitalize;
    .subtitle{
        display: flex;
        align-items: center;
        gap: 13px;
    }
    .service__title{
        font-size: 56px;
        margin-top: 15px;
    }
}

.service-descrition{
    line-height: 32px;
}

.icone-subtitle{
    color: white;
    border-radius: 999px;
    font-size: 15px;
    padding: 10px;
    aspect-ratio: 1;
}
.icone-subtitle.blue{
    background-color: #0064FE;
}
</style>