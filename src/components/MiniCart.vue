<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto"
    aria-labelledby="triggerId"
  >
    <div>
      <div class="d-flex px-3 justify-content-between">
        <div>
          <strong>Product Title</strong>
          <br />
          1 X $34
        </div>
        <div>
          <a href="#" class="badge badge-secondary btn">Remove</a>
        </div>
      </div>
    </div>

    <hr />

    <div class="d-flex justify-content-between">
        <span>Total: $34.00</span>
        <a href="#">Clear Cart</a>
    </div>

  </div>
</template>
<script>
export default {};
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
