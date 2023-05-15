<template>
  <div>
    <header-component />
     
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: { HeaderComponent   },
};
</script>

<style></style>
