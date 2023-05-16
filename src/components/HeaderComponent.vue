<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link class="nav-item nav-link active" to="/"
            >Home</router-link
          >
          <a class="nav-item nav-link" href="#">Product</a>
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemsQuantity }} Cart
            </button>
            <div @click="(e) => e.stopPropagation()">
              <MiniCart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "../components/MiniCart.vue";
import { mapGetters } from "vuex";
export default {
  name: "HeaderComponent",
  components: { MiniCart },
  computed: {
    // quantity() {
    //   return this.$store.state.cart.length
    // },

    ...mapGetters("cart", ["cartItemsQuantity"]),
  },
};
</script>

<style scoped></style>
