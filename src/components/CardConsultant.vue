<script>
    export default{
        
    }
</script>

<template>
                
    <div class="contact-expert">
        <img class="profile-img" src="img/marketing-consultant-expert.jpg" alt="">
        <h3>Richard Madsen</h3>
        <p class="occupation"> Marketing consultant expert</p>
        <p class="phone">
            <font-awesome-icon class="phone-icone" icon="fa-solid fa-phone"/>
            (555)802-1234
        </p>
        <input type="text" placeholder="Your Name*">
        <input type="email" placeholder="Your Email*">
        <input type="text" placeholder="Your Phone Number*">
        <button>Get a Callback</button>
        <p class="privacy">
            By submitting my data I agree to be contacted
        </p>
    </div>
   
</template>
  
<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.contact-expert{
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 30px 32px;
    min-width: 477px;
    border-radius: 10px;
    box-shadow: 0px 10px 8px #dedede;
    background-color: white;

    .profile-img{
        aspect-ratio: 1;
        object-fit: cover;
        object-position: center;
        border-radius: 999px;
        max-width: 81px;
        margin: 0 auto;
    }

    h3{
        font-size: 26px;
    }

    .occupation{
        font-size: 19px;
        color:$text-grey;
    }

    .phone{
        margin-bottom: 15px;
        color: $orange-color;
    }

    button{
        padding: 17px 0;
        color: white;
        background-color: $orange-color;
    }

    input{
        padding: 17px 21px;
        border-radius: 10px;
        border: 1px solid #F0F0F0;
    }

    .privacy{
        font-size: 13px;
        color:$text-grey;
    }
}
</style>