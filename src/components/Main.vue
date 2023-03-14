<script>
    import Presentation from './Presentation.vue';
    import SectionServices from './SectionServices.vue';
    import SectionBrands from './SectionBrands.vue'
    export default{
        components:{
            Presentation,
            SectionServices,
            SectionBrands
        },
        data(){

        }
    }
</script>

<template>
    <main>
      <Presentation/>
      <SectionServices/>
      <SectionBrands/>
     
    </main>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

</style>