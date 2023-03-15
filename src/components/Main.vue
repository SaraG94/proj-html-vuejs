<script>
    import Presentation from './Presentation.vue';
    import SectionServices from './SectionServices.vue';
    import SectionBrands from './SectionBrands.vue';
    import CardHorizontalConsultant from './CardHorizontalConsultant.vue';
    import SectionTeam from './SectionTeam.vue';
    import SectionUs from './SectionUs.vue';
    import SectionReview from './SectionReview.vue';
    import SectionMarketing from './SectionMarketing.vue';
    export default{
        components:{
            Presentation,
            SectionServices,
            SectionBrands,
            CardHorizontalConsultant,
            SectionTeam,
            SectionUs,
            SectionReview,
            SectionMarketing
        },
        data(){
            return{
                
            }
        }
    }
</script>

<template>
    <main>
      <Presentation/>
      <SectionServices/>
      <SectionBrands/>
      <!-- card!!! -->
      <CardHorizontalConsultant/>
    
      <SectionTeam/>
      <SectionUs/>
      <SectionReview/>
      <SectionMarketing/>
    </main>
</template>
  
<style lang="scss" scoped>

</style>