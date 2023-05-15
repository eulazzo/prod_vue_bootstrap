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
  console.log(state.cart);
  return state.cart;
};

export default { listProducts, isLoading, currentProduct,cartAddedProducts };
