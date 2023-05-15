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
        <strong>${{product.price}}</strong>
        <p class="card-text">
          {{ product.productDescription }}
        </p>
      </div>

      <div class="px-4 pb-3">
        <button class="btn btn-secondary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: { type: Object, required: true, default: null },
  },
};
</script>
<style lang=""></style>
