import { createStore } from "vuex";

import product from "./modules/product";
import cart from "./modules/cart";
import notifications from "./modules/notifications";


export const store = createStore({
  

  modules: {
    product,
    cart,
    notifications
  },
});

export default store;
