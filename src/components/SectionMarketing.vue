<script>
    import FigureCardAndText from './FigureCardAndText.vue';
    export default{
        components:{
            FigureCardAndText
        },
        data(){
            return{
                suggests:[
                    {
                        img:'/img/blog-posts-6-400x267.jpg',
                        title:'Marketing tips and tricks for your website'
                    },
                    {
                        img:'/img/blog-posts-5-400x267.jpg',
                        title:'How to write stunning blog post titles'
                    },
                    {
                        img:'/img/blog-posts-4-400x267.jpg',
                        title:'Techniques to reduce facebook ads spend'
                    }
                ]
            }
        }
    }
</script>

<template>
    <section>
        <div class="container">
            <div class="row marketing">
                <div class="col-6 ">
                    <h1 class="marketing__title">
                        Marketing resources: insider advice on how to increase online sales
                    </h1>
                </div>
                <div class="col explore">
                    <button class="orange">
                        explore all resource
                    </button>
                </div>
            </div>
            <div class="row card-blog">
                <div class="col-4 suggest" v-for="suggest in suggests" :key="suggest.it">
                    <FigureCardAndText :element="suggest"/>
                </div>
            </div>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
section{
    background-color: $backgruond-secondary;
    padding: 155px 0;
}
.container{
    display: flex;
    flex-direction: column;
    gap: 95px;
}
.row.marketing{
    display: flex;
    justify-content: space-between;
    .col-6{
        flex-basis: calc((100% /12)*6);
    }
    .col.explore{
        align-self: flex-end;
    }
}
.marketing__title{
    font-size: 54px;
    text-transform: capitalize;
}

button.orange{
    padding: 21px 39px;
}

.row.card-blog{
    display: flex;
    margin: 0 -20px;

    .col-4{
        flex-basis: calc((100% /12)*4);
        padding: 0 20px;
    }
}
</style>