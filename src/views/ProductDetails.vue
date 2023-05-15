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

      <input class="text-center col-1 mr-2 p-1" type="text" />
      <button @click="addToCard" class="btn btn-primary">Add To Cart</button>

      <p class="mt-4">
        {{ currentProduct?.productDescription }}
      </p>

    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],

  async created() {
    await this.$store.dispatch("getProductById", this.id);
  },

  computed: {
    ...mapGetters(["currentProduct"]),
  },

  
};
</script>
<style></style>
