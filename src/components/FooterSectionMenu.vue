<script>
    import VerticalMenu from './VerticalMenu.vue';
    export default{
        components:{
            VerticalMenu
        },
        data(){
            return{
                socialsIcones:['fa-brands fa-facebook','fa-brands fa-twitter','fa-brands fa-instagram','fa-brands fa-youtube','fa-brands fa-linkedin','fa-brands fa-tiktok'],
                menu:[
                    {
                        title:'services',
                        links:['marketing plan','sales development','digital marketing','pricing','why us','case studies']
                    },
                    {
                        title:'resources',
                        links:['learning center','video tutorials','costumers','blog']
                    },
                    {
                        title:'company',
                        links:['who we are','contact us','career']
                    }
                ]
            }
        }
    }
</script>

<template>
    <section>
        <div class="container">
            <div class="col-5">
                <h1>
                    grow your online business strategivally, and improve customer retention
                </h1>
                <div class="social-links">
                    <div class="icone" v-for="icone in socialsIcones" :key="icone.id">
                        <font-awesome-icon class="social" :icon="icone"/>
                    </div>
                </div>
            </div>
            <div class="col" v-for="menuItem in menu" :key="menuItem.id">
                <VerticalMenu :menuItem="menuItem"/>
            </div>
        </div>
        <div class="container">
            <div class="row copyright">
                <p class="rights">
                    <font-awesome-icon class="copyright" icon="fa-regular fa-copyright"/>
                    2020
                    <ul>
                        <li>avada consultant</li>
                        <li>powerd by wordPress</li>
                    </ul>
                </p>
                <p class="contact-phone">Call us (555)802-1234</p>
                <p class="email">info@yourcompany.com</p>
            </div>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
.social-links{
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>