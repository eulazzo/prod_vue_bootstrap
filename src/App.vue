<template>
  <div  >
    <header-component />
    <RouterView />

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components:{HeaderComponent}
}
</script>

<style>
 
</style>
