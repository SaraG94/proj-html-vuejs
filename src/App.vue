<script>
  import HeaderMain from './components/HeaderMain.vue';
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue';
  export default{
    components:{
      HeaderMain,
      Main,
      Footer
    },
    data(){
        return{
            
        }
    }
  }
</script>

<template>
  <HeaderMain/>
  <Main/>
  <Footer/>
</template>

<style lang="scss">
@use './style/general.scss'
</style>
