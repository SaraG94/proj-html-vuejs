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
                ],

                awards:[
                    {
                        img:'/img/award-a.png',
                        text:'winner seo master MAGT smart start award 2017',
                    },
                    {
                        img:'/img/award-b.png',
                        text:'Top social media agencies next partner 2018',
                    },
                    {
                        img:'/img/award-c.png',
                        text:'10 fastest growing abstract solution providers 2019',
                    },
                    {
                        img:'/img/award-d.png',
                        text:'national excellence agencie award winner 2020',
                    },
                ],
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
        <div class="container awards">
            <div class="row awards__title">
                <h1>Awards</h1>
            </div>
            <div class="row awards">
                <div class="col-3" v-for="(award, index) in awards" :key="award.id">
                    <figure class="award-info">
                        <img :src=" award.img " alt="" >
                        <figcaption>
                            <p>{{ award.text }}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>   
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
section.us{
    background-color: $backgruond-secondary;
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
    
    .why-us__title{
        font-size: 54px;
        text-transform: capitalize;
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
///////// fine first row
/////////second row
.container.awards{
    padding-top: 120px;
}
.awards__title{
    text-align: center;
}
.awards__title h1{
    font-size: 32px;
}
.row.awards{
    display: flex;
    align-items: center;
    margin: 0 -15px;
    padding-top: 66px;

    .col-3{
        flex-basis: calc((100%/12)*3);
        padding: 0 39px;

        figure img{
            max-width: 175px;
            margin: 0 auto;
            filter: hue-rotate(174deg);
        }
    }
}
</style>