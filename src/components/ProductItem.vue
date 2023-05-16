<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img class="w-full" :src="product.prodImgURL" />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="'/product/' + product.id">{{
            product.productName
          }}</router-link>
        </h4>
        <strong>${{ product.price }}</strong>
        <p class="card-text">
          {{ product.productDescription }}
        </p>
      </div>

      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCard">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
//import { mapActions } from "vuex";
export default {
  props: {
    product: { type: Object, required: true, default: null },
  },

  methods: {
    // ...mapActions(["cart", "addProductToCart"]),
    // addToCard() {
    //   this.addProductToCart({
    //     product: this.product,
    //     quantity: 1,
    //   });
    // },

    addToCard() {
      this.$store.dispatch("cart/addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>
<style lang=""></style>
