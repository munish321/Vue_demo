<template>
    <div class="wrapper">
        <SideBar />
        <div class="content">
           <slot name="main"></slot>
          
            <slot name="footer"></slot>
          
        </div>
       
    </div>
</template>

<script>


    export default {
        name:'MainLayout',
   
    }
</script>

<style lang="scss" scoped>
 .wrapper{
    display: flex;
    .content{
       
        width: 100%;
        height:100vh;
        flex:1 1 0;
        padding:2rem;
    
    @media (max-width:768px) {
    padding-left:6rem ;
  }
 }
 
  
 }
 
</style>