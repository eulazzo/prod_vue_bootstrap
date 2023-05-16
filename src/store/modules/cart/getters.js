export const isLoading = (state) => {
  return state.isLoading;
};

export const cartAddedProducts = (state) => {
  return state.cart;
};

export const cartAddedTotalValue = (state) => {
  return state.cart
    .map((item) => item?.quantity * item?.product?.price)
    .reduce((acc, cur) => acc + cur, 0);
};


export const cartItemsQuantity = (state) => {
  return  state.cart.length
}
