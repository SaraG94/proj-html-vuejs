<script>
    import CardConsultant from './CardConsultant.vue';
    export default{
        components:{
            CardConsultant
        }
    }
</script>

<template>
    <main>
        <section class="presentation">
            <div class="container">
                <div class="our-focus">
                    <h1 class="title">
                        Unlock your online growth potential
                    </h1>
                    <p class="text-descrition">
                        Online marketing to secure costumer retention, leads, and sales. We focus on the bigger picture.
                    </p>
                    <button>
                        Our Services
                        <font-awesome-icon class="" icon="fa-solid fa-arrow-right"/>
                    </button>
                </div>
                <!-- card -->
                <div class="card">
                    <CardConsultant/>
                </div>
            </div>
        </section>
    </main>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

section.presentation{
    background-image: url('/marketing-intro.jpg');
    background-size: cover;
    background-position: center;
    padding-top: 100px;
}
.container{
    display: flex;
}
.our-focus{
    flex-basis: calc(100% /2);
    color: white;
    display: flex;
    flex-direction: column;
    gap: 45px;

    .title{
        margin-top: 20px;
        font-size: 72px;
        text-transform: capitalize;
    }

    .text-descrition{
        font-size: 29px;
    }

    button{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 20px 42px;
        max-width: max-content;
    }
}

.card{
    flex-basis: calc(100% /2);
    padding-left: 110px;
}
</style>