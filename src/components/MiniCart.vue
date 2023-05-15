<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div class="mt-2" v-for="item in cartAddedProducts" :key="item.id">
      <div class="d-flex px-3 justify-content-between gap-2">
        <div>
          <img class="my-custom-image" :src="item?.product?.prodImgURL" alt="" />
        </div>

        <div>
          <p class="fw-bold">{{ item?.product?.productName }}</p>
          <br />
          {{ item?.quantity }} X ${{ item?.product?.price }}
        </div>
        <div>
          <button
            @click="removeProductByIdHandler(item?.product?.id)"
            class="badge badge-secondary btn-remove"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

    <div>
      <template v-if="cartAddedProducts.length">
        <hr />
        <div class="d-flex justify-content-between">
          <span>Total: $ {{ cartAddedTotalValue }}</span>
          <button class="btn btn-success" @click="clearCartHandler">
            Clear Cart
          </button>
        </div>
        <button class="btn btn-success">Payment</button>
      </template>

      <template v-else>
        <div class="p-3 d-flex align-items-center">
          <img
            src="../assets/img/empty_box.png"
            class="w-2 h-2"
            alt="empty cart image"
          />
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
    ...mapGetters(["cartAddedProducts", "cartAddedTotalValue"]),
  },

  created() {
    this.$store.dispatch("getCartItens");
  },

  methods: {
    clearCartHandler() {
      return this.$store.dispatch("clearCart");
    },
    removeProductByIdHandler(id) {
      return this.$store.dispatch("removeItem", id);
    },
  },
};
</script>
<style scoped>
.btn {
  border: none;
  padding: 0.5rem;
  color: white;
}

.btn-remove {
  background-color: rgb(157, 157, 157);
}

.btn:hover {
  background-color: rgb(157, 157, 157);
  cursor: pointer;
  color: #fff;
}

.my-custom-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
