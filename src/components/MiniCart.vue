<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div v-for="item in cartAddedProducts" :key="item.id">
      <div class="d-flex px-3 justify-content-between">
        <div>
          <strong>{{ item.product.productName }}</strong>
          <br />
          {{ item.product.quantity }} X ${{ item.product.price }}
        </div>
        <div>
          <button class="badge badge-secondary btn">Remove</button>
        </div>
      </div>
    </div>

    <div>
      <template v-if="cartAddedProducts.length">
        <hr />
        <div class="d-flex justify-content-between">
          <span>Total: $34.00</span>
          <a href="#">Clear Cart</a>
        </div>
      </template>

      <template v-else>
        <div class="p-3 d-flex align-items-center ">
           <img src="../assets/img/empty_box.png" class="w-2 h-2" alt="">
          <span>Your cart is empty!</span>
        </div>
      </template>
    </div>
  </div>

</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "MiniCart",
  computed: {
    ...mapGetters(["cartAddedProducts"]),
  },
};
</script>
<style scoped>
.btn {
  background-color: grey;
  border: none;
  padding: 0.5rem;
  color: white;
}

.btn:hover {
  background-color: rgb(157, 157, 157);
  cursor: pointer;
  color: #fff;
}
</style>
