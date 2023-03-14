<script>
    export default{
        data(){
            return{
                members : [
                    {
                        picture: '/img/case-studies-1-400x450.jpg',
                        text: 'How Spaces attracted five milion visitors by improving the content',
                        result:'200%',
                        descritionResult:'Higher revenue from digital',
                    },
                    {
                        picture: '/img/case-studies-4-400x450.jpg',
                        text: 'Creativity helped Hemisferio to increase their brand reach vertically',
                        result:'10x',
                        descritionResult:'Sales increase with the same ad spend',
                    },
                    {
                        picture: '/img/case-studies-6-400x450.jpg',
                        text: 'How DigitalBox used al- powered data insight to boost sales',
                        result:'3-year',
                        descritionResult:'Partnership with Avada Consultant',
                    },
                ]
            }    
        }
    }
</script>

<template>
    <section class="team">
        <div class="container">
            <div class="row title">
                <h1>Trusted bu Leading Organisations</h1>
            </div>
            <div class="row cards-team">
                <div class="col-4 " v-for="member in members" :key="member.id">
                    <div class="card-member">
                        <img :src="member.picture" alt="">
                        <p class="option">
                            {{ member.text }}
                        </p>
                        <div class="stat">
                            <h3 class="numb-stat">{{ member.result }}</h3>
                            <p class="descrition-stat">
                                {{ member.descritionResult }}
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
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
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