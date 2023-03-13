<script>
  export default{
    data(){
      return{
        menu:['Why Us','Case Studies', 'About','Blog']
      }
    }
  }
</script>

<template>
  <!-- Main header -->
  <header>
    <div class="container">
      <div class="logo">
        <a href="#">
          <img src="/avada-marketing-logo-2x-200x37.png" alt="logo">
        </a>
      </div>
      <div class="menu-header">
        <a href="#" class="home-menu">
          Home
          <font-awesome-icon icon="fa-solid fa-angle-down"/>
        </a>
        <a href="#">
          Services
          <font-awesome-icon icon="fa-solid fa-angle-down"/>
        </a>
        <a href="#" v-for="el in menu" :key="el.id"> 
          {{ el }}
        </a>
      </div>
      <div class="contact">
        <div class="phone-contact">
          <font-awesome-icon icon="fa-solid fa-phone"/>
          <p>(555)802-1234</p>
        </div>
        <button class="quote">Free Quote</button>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
