import ProductService from "@/common/services/Products/listProducts.services";

export const addProductToCart = async (
  { commit, dispatch },
  { product, quantity }
) => {
  try {
    commit("ADD_TO_CART", { product, quantity });
    commit("SET_ERROR", false);

    dispatch(
      "addNotification",
      {
        type: "success",
        message: "Item added successfully",
      },
      { root: true }
    );

    await ProductService.postCart({
      product_id: product.id,
      ...product,
      quantity,
    });
  } catch (error) {
    dispatch(
      "addNotification",
      {
        type: "warming",
        message: "Error in add to cart.",
      },
      { root: true }
    );
    commit("SET_ERROR", true);
  }
};

export const clearCart = async ({ commit }) => {
  commit("CLEAR_CART");
  await ProductService.removeAll();
};

export const removeItem = async ({ commit,dispatch}, id) => {
  commit("REMOVE_ITEM", id);
  await ProductService.remove(id);

  dispatch()
};

export const getCartItens = async ({ commit }) => {
  const response = await ProductService.getCardItens();
  commit("SET_CART", response);
};
