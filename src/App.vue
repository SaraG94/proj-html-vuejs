<script>
  import HeaderMain from './components/HeaderMain.vue';
  import Main from './components/Main.vue'
  export default{
    components:{
      HeaderMain,
      Main
    }
  }
</script>

<template>
  <HeaderMain/>
  <Main/>
</template>

<style lang="scss">
@use './style/general.scss'
</style>
