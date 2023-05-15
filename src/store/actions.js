import ProductService from "@/common/services/Products/listProducts.services";

export const getProducts = async ({ commit }) => {
  try {
    commit("SET_LOADING", true);
    const response = await ProductService.listAsync();
    commit("ADD_PRODUCT", response);
    commit("SET_LOADING", false);
    commit("SET_ERROR", false);
  } catch (error) {
    commit("SET_ERROR", true);
  }
};

export const getProductById = async ({ commit }, payload) => {
  try {
    const response = await ProductService.getById(payload);
    commit("GET_PRODUCT_BY_ID", response);
    commit("SET_ERROR", false);
  } catch (error) {
    commit("SET_ERROR", true);
  }
};

export const addProductToCart = async ({ commit }, { product, quantity }) => {
  try {
    commit("ADD_TO_CART", { product, quantity });
    commit("SET_ERROR", false);
  } catch (error) {
    commit("SET_ERROR", true);
  }
};

export const clearCart = async ({ commit }) => {
  commit("CLEAR_CART");
};

export const removeItem = async ({ commit },id) => {
  commit("REMOVE_ITEM",id);
};
