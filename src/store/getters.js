export const listProducts = (state) => {
  return state.products;
};

export const isLoading = (state) => {
  return state.isLoading;
};

export const currentProduct = (state) => {
  return state.currentProduct;
};

export const cartAddedProducts = (state) => {
  return state.cart;
};

export const cartAddedTotalValue = (state) => {
  return state.cart
    .map((item) => item?.quantity * item?.product?.price)
    .reduce((acc, cur) => acc + cur, 0);
};

export default {
  listProducts,
  isLoading,
  currentProduct,
  cartAddedProducts,
  cartAddedTotalValue,
};
