<template>
  <div class="notifications-list">
    <notifications-message />
  </div>
</template>

<script>
import NotificationsMessage from "./NotificationsMessage.vue";
export default {
  name: "NotificationsList",
  components: { NotificationsMessage },
};
</script>

<style>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
