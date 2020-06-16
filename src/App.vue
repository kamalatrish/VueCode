<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/home/Header'
export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  margin: 30px;
}
</style>
