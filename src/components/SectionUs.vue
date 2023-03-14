<script>
    export default{
        components:{

    },
        data(){
            return{
                info : [
                    {
                        title:'We build relationships',
                        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam quibusdam rerum.',
                    },
                    {
                        title:'Proprietary processes',
                        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam quibusdam rerum.',
                    },
                ],

                topQualities : [
                    {
                        icone:'fa-solid fa-magnifying-glass',
                        title:'Accountability',
                        text:'Lorem ipsum dolor sit amet.',
                    },
                    {
                        icone:'fa-solid fa-square-plus',
                        title:'Trasparency',
                        text:'Lorem ipsum dolor sit amet.',
                    },
                    {
                        icone:'fa-solid fa-magnifying-glass',
                        title:'Investement',
                        text:'Lorem ipsum dolor sit amet.',
                    },
                ]
            }
        }
    }
</script>

<template>
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
                    <div class="base-info" v-for="el in info" :key="el.id">
                        <h2>{{el.title}}</h2>
                        <p>
                            {{el.text}}
                        </p>
                    </div>
                </div>
                <div class="col-6 top-quality" >
                    <div class="quality" v-for="quality in topQualities" :key="quality.id">
                        <div class="quality__icone">
                            <font-awesome-icon class="icone" :icon="quality.icone"/>
                        </div>
                        
                        <div class="descrition">
                            <h3>{{quality.title}}</h3>
                            <p>{{quality.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container"></div>
    </section>
    
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
section.us{
    background-color: #F5F5F7;
    padding: 120px 0;
}
.we-do .row{
    display: flex;
    flex-wrap: wrap;
    row-gap: 110px;

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
        font-weight: bold;
    }
}

.figure{
    display: flex;
    justify-content: end;
}

.info{
    display: flex;
    flex-direction: column;
    gap:75px;

    .base-info{
        display: flex;
        flex-direction: column;
        gap:28px;
        padding: 0 136px 0 61px;
    }

    .base-info h2{
        text-transform: capitalize;
        font-size: 32px;
    }
}

.top-quality{
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding-left: 55px;

    .quality{
        display: flex;
        align-items: center;
        gap: 20px;

        .quality__icone{
            border: 1px solid currentColor;
            border-radius: 20px;
            color: $primary-color;
            min-width: 70px;
            max-width: 72px;
            display: flex;
            aspect-ratio: 1;
            align-items: center;
            justify-content: center;
        }
    }

    .descrition h3{
        font-size: 24px;
        margin-bottom: 19px;
    }
}
</style>