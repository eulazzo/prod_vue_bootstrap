export const ADD_TO_CART = (state, { product, quantity }) => {
  const foundedProduct = state.cart.find(
    (item) => item.product.id === product.id
  );

  foundedProduct
    ? (foundedProduct.quantity += quantity)
    : state.cart.push({ product, quantity });
};

export const CLEAR_CART = (state) => {
  state.cart = [];
};

export const REMOVE_ITEM = (state, id) => {
  state.cart = state.cart.filter((item) => item.product.id !== id);
};

export const SET_CART = (state, cartItens) => {
  state.cart = cartItens;
};

export const SET_LOADING = (state, value) => {
  state.isLoading = value;
};

export const SET_ERROR = (state, value) => {
  state.isLoading = value;
};

 

 