export const ADD_PRODUCT = (state, payload) => {
  state.products = payload;
};

export const SET_LOADING = (state, value) => {
  state.isLoading = value;
};

export const SET_ERROR = (state, value) => {
  state.isLoading = value;
};

export const GET_PRODUCT_BY_ID = (state, payload) => {
  state.currentProduct = payload;
};

export const ADD_TO_CART = (state, { product, quantity }) => {
  state.cart.push({ product, quantity });
};
