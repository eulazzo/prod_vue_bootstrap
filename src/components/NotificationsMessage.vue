<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show"
    role="alert"
  >
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{ notification.message }}
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "NotificationsMessage",
  props: ["notification"],
  data(){
    timeout:null
  },

  computed: {
    typeClass() {
      console.log(this.notification);
      return `alert-${this.notification.type}`;
    },
  },

  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },

  beforeDestroy() {
    clearTimeout(this.timeout)
  },

  methods: mapActions(["removeNotification"]),
};
</script>
<style></style>
