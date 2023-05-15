<template>
  <div>
    <header-component />
    <hero-item />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroItem from "./components/HeroItem.vue";

export default {
  name: "App",
  components: { HeaderComponent,HeroItem },
};
</script>

<style></style>
