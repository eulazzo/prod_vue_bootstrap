<template>
  <div class="d-flex align-items-stretch flex-wrap justify-content-center">
    <div v-if="isLoading" class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
    <ProductItem
      v-else-if="!isLoading"
      v-for="product in listProducts"
      :key="product._id"
      :product="product"
    />
    <pagination />
  </div>
</template>
<script>
import Pagination from "./PaginationItem.vue";
import ProductItem from "./ProductItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { ProductItem, Pagination },

  async created() {
    await this.$store.dispatch("product/getProducts")
  },

  computed: {
    //product module namaspace
    ...mapGetters("product",["listProducts", "isLoading"]),
    //...mapActions("product",["getProducts"]),
  },
};
</script>

<style scoped></style>
