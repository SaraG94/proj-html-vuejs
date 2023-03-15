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
        <div class="container option-menu">
            <div class="col-5">
                <h1 class="col__title">
                    grow your online business strategivally, and improve customer retention
                </h1>
                <div class="social-links">
                    <a href="#" class="icone" v-for="icone in socialsIcones" :key="icone.id">
                        <font-awesome-icon class="social" :icon="icone"/>
                    </a>
                </div>
            </div>
            <div class="col" v-for="menuItem in menu" :key="menuItem.id">
                <VerticalMenu :menuItem="menuItem"/>
            </div>
        </div>
        <div class="container copyright-statement">
            <div class="row copyright">
                <p class="rights">
                    <font-awesome-icon class="copyright" icon="fa-regular fa-copyright"/>
                    2020
                    <ul class="copyright-props">
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
section{
    padding: 120px 0;
}
.container.option-menu{
    display: flex;
    justify-content: space-between;
}

.col-5{
    flex-basis: calc((100% /12)*5);
    display: flex;
    flex-direction: column;
    gap:35px;

    .col__title{
        text-transform: capitalize;
        font-size: 33px;
    }
}
.social-links{
    display: flex;
    align-items: center;
    gap: 20px;
}
//second container
.copyright-statement{
    padding-top: 100px ;
}
.row.copyright{
    display: flex;
    gap:160px;
}
.rights{
    display: flex;
    align-items: center;
}
ul.copyright-props{
    display: contents;
    list-style: circle;
    li{
        margin-left: 15px;
        list-style-position: inside;
    }
}

p.email{
    margin-left: auto;
}
</style>