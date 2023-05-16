<template>
  <div>
    <header-component />

    <div class="container">
      <RouterView />
    </div>
    <notifications-list />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import NotificationsList from "./components/NotificationsList.vue";

export default {
  name: "App",
  components: { HeaderComponent, NotificationsList },
};
</script>

<style></style>
