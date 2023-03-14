<script>
    export default{
        data(){
            return{
               reviews:[
                    {
                        img:'/img/large-testimonial-600x583.jpg',
                        text:'"The team at Avada Marketing consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach."',
                        author:'Kate schadler',
                        occupation:'Marketing consultant - abstract'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section class="review">
        <div class="container">
            <div class="row" v-for="review in reviews" :key="review.id"> 
                <div class="col-6">
                    <img :src="review.img" alt="" class="author-img">
                </div>
                <div class="col-5">
                    <div class="review-content">
                        <h1>{{ review.text }}</h1>
                        <div class="author">
                            <p class="name">{{ review.author }}</p>
                            <p class="occupation">{{ review.occupation }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
section.review{
    padding: 105px 0;
    .container{
        padding: 0 56px;
    }
}

.row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .col-6{
        flex-basis: calc((100% / 12)*6);
    }

    .col-5{
        flex-basis: calc((100% / 12)*5);
    }
}
.author-img{
    border-radius: 10px;
    box-shadow: 10px 10px 12px #dedede;
}
.review-content{
    max-width: 374px;
    h1{
        font-size: 32px;
        margin-bottom: 34px;
    }
}
.author{
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .occupation{
        font-size: 15px;
    }
}
</style>