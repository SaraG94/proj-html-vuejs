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
      <!-- logo -->
      <div class="logo">
        <a href="#">
          <img src="/avada-marketing-logo-2x-200x37.png" alt="logo">
        </a>
      </div>
      <!-- menu -->
      <div class="menu-header">
        <a href="#" class="home-menu">
          Home
          <font-awesome-icon class="arrow" icon="fa-solid fa-angle-down"/>
        </a>
        <a href="#">
          Services
          <font-awesome-icon class="arrow" icon="fa-solid fa-angle-down"/>
        </a>
        <a href="#" v-for="el in menu" :key="el.id"> 
          {{ el }}
        </a>
      </div>
      <!-- contact -->
      <div class="contact">
        <div class="phone-contact">
          <p>
            <font-awesome-icon class="phone-icone" icon="fa-solid fa-phone"/>
            (555)802-1234
          </p>
        </div>
        <button class="light">
          <strong>Free Quote</strong>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0 32px;
}
.menu-header{
  display: flex;
  gap: 34px;

  a{
    padding: 10px 5px;
  }
  .arrow{
    vertical-align: middle;
    margin-left: 5px;
  }
}

.contact{
  display: flex;
  gap:24px;
  align-items: center;
  
  .light{
    padding: 18px 40px;
  }
}

.home-menu,
.phone-icone{
  color: $primary-color;
}
.home-menu{
  border-bottom: 3px solid currentColor;
}
</style>