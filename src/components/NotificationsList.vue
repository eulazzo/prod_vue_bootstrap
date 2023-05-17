<template>
  <div class="notifications-list">
    <notifications-message
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>

  <div>CASA {{ notifications }}</div>
</template>

<script>
import { mapGetters } from "vuex";
import NotificationsMessage from "./NotificationsMessage.vue";
export default {
  name: "NotificationsList",
  components: { NotificationsMessage },

  computed: {
    ...mapGetters["notifications"],
  },
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
