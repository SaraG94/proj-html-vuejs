<script>
    export default{
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
            <div class="row">
                <div class="col title">
                    <h1>
                        Marketing resources: insider advice on how to increase online sales
                    </h1>
                </div>
                <div class="col explore">
                    <button class="orange">
                        explore all resource
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col suggest" v-for="suggest in suggests" :key="suggest.it">
                    <div class="card-suggest">
                        <img :src="suggest.img" alt="">
                        <h2>{{ suggest.title }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

</style>