<template>
  <div class="row mt-5">
    <div class="col-4">
      <img
        :src="currentProduct?.prodImgURL"
        alt="product-image"
        class="w-100"
      />
    </div>
    <div class="col-8">
      <h1>{{ currentProduct?.productName }}</h1>
      <h3>$45</h3>

      <div class="d-flex gap-2 mb-4 mt-2">
        <input
          v-model.number="quantity"
          placeholder="Quantity"
          class="col-2 mr-2 p-1"
          type="number"
        />
      </div>
      <button @click="addToCard" class="btn btn-primary">Add To Cart</button>

      <p class="mt-4">
        {{ currentProduct?.productDescription }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      quantity: "",
    };
  },

  async created() {
    await this.getProductById(this.id);
  },

  computed: {
    ...mapGetters("product", ["currentProduct"]),
  },

  methods: {
    ...mapActions("product", ["getProductById"]),
    ...mapActions("cart", ["addProductToCart"]),
    addToCard() {
      this.addProductToCart({
        product: this.currentProduct,
        quantity: this.quantity,
      });
    },
  },
};
</script>
<style></style>
