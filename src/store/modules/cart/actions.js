import ProductService from "@/common/services/Products/listProducts.services";

export const addProductToCart = async ({ commit }, { product, quantity }) => {
  try {
    commit("ADD_TO_CART", { product, quantity });
    commit("SET_ERROR", false);

    await ProductService.postCart({
      product_id: product.id,
      ...product,
      quantity,
    });
  } catch (error) {
    commit("SET_ERROR", true);
  }
};

export const clearCart = async ({ commit }) => {
  commit("CLEAR_CART");
  await ProductService.removeAll();

};

export const removeItem = async ({ commit }, id) => {
  commit("REMOVE_ITEM", id);
  await ProductService.remove(id);
};

export const getCartItens = async ({ commit }) => {
  const response =   await ProductService.getCardItens();
  commit("SET_CART", response);
};