<script>
    import Presentation from './Presentation.vue';
    import SectionServices from './SectionServices.vue'
    export default{
        components:{
            Presentation,
            SectionServices
        }
    }
</script>

<template>
    <main>
      <Presentation/>
      <SectionServices/>
  
    </main>
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;

</style>