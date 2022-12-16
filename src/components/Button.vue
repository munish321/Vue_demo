<template>
    
       <button class="btn" :class="computedClass" >{{label}}</button>
    
</template>

<script>
    export default {
        name:'MainButton',
        props:{
           label:{
                type:String,
                default:''
            },
            primary:{
                    type:Boolean,
                    default:false
                },
            secondary:{
                    type:Boolean,
                    default:false
                },
            disabled:{
                    type:Boolean,
                    default:false
                },
              
        },
        computed:{
            computedClass(){
               return[
                {primary:this.primary},
                {secondary:this.secondary},
                {disabled:this.disabled}
               ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn{
   
    &.primary{
        background-color:  #54B435;
        color: #F8FFDB;
        font-weight: 700;
        font-family:sans-serif;

        &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

    }
    &.secondary{
      background-color: #B3FFAE;
      color: #4E6C50;
      transition: .3s ease-out;

      &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
    &.disabled{
        background-color: #D2D79F;
        cursor:not-allowed;
    }
}
</style>