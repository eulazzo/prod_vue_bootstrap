<template>
  <div>
    <hero-item />
    <product-list />
  </div>
</template>
<script>
import ProductList from "../components/ProductList.vue";
import HeroItem from "../components/HeroItem.vue";

export default {
  components: { ProductList, HeroItem },
};
</script>
<style scoped></style>
