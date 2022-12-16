<template>
  
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style lang="scss" >
:root{
  --primary:#5F9DF7;
  --secondary:#434242;
  --grey:#6B728E;
  --dark:#06283D;
  --light:#FAF7F0;
  
  --sidebar-max-width: 300px;
}
*{
  font-family: Fira Sans;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Fira Sans, sans-serif;
}
body{
  background-color: var(--light);
}
</style>
