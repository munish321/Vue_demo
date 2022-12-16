<template>
    <div>
      <label>{{label}}</label>
      <input  :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" v-bind="$attrs" required/>
     
    </div>
</template>

<script>
    export default {
        name:'BaseInput',
        props:{
            label:{
                type:String,
                default:''
            },
            modelValue:{
                type:String,
                default:''
            },
            error:{
              type:String  
            },
            
        }
    }
</script>

<style scoped>
 input{
    display: block;
    outline:none;
    border:1px solid grey;
    padding:5px;
    font-size:1.2rem;
    color:#808080 ;
    margin: 2px auto 15px auto;
    inline-size:20rem;
    border-radius: 5px;
 }
 label{
    padding: 5px;
     margin:0 0 0 85px;
    display:block;
 }
</style>