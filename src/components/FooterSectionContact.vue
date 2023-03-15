<script>
    import CardConsultant from './CardConsultant.vue';
    export default{
        components:{
            CardConsultant
        },
        data(){
            return{
                
            }
        }
    }
</script>

<template>
    
    <section class="contact-us">
        <div class="container">
            <div class="why-call">
                <h1 class="title">
                    let's make things happen
                </h1>
                <p class="text-descrition">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias cumque sapiente vero nulla eum.
                </p>
                <div class="reviw">
                    <p class="reviw-text">
                        "The team at Avada Marketing consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach."
                    </p>
                    <div class="author">
                        <h4 class="name-author">George Anderson</h4>
                        <p class="occupation">Digitalbox CEO</p>
                    </div>
                </div>
                
            </div>
            <!-- card -->
            <div class="card">
                <CardConsultant/>
            </div>
        </div>
    </section>
    
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

section.contact-us{
    background-color: $footer-bg;
    padding: 110px 0;
}
.container{
    display: flex;
}
.why-call{
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
        font-size: 30px;
    }
}

.reviw{
    display: contents;
    .reviw-text{
        font-size: 22px;
        font-style: italic;
    }
}

.reviw::before{
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #212121;
}

.author .occupation{
    font-size: 15px;
    margin-top: 9px;
}

.card{
    padding-left: 105px;
}
</style>