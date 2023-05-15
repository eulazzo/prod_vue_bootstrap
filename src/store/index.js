import { createStore } from "vuex";

import state from "./state";
import getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
  // state: {
  //   products: [],
  //   isLoading: false,
  //   isError:false
  // },
  // mutations: {
  //   ADD_PRODUCT(state, payload) {
  //     state.products = payload;
  //   },
  //   SET_LOADING(state, value) {
  //     state.isLoading = value;
  //   },
  //   SET_ERROR(state, value) {
  //     state.isLoading = value;
  //   },
  // },
  // actions: {
  //   async addProduct({ commit }) {
  //     try {
  //       commit("SET_LOADING", true);
  //       const response = await ProductService.listAsync();
  //       commit("ADD_PRODUCT", response);
  //       commit("SET_LOADING", false);
  //       commit("SET_ERROR",false)
  //     } catch (error) {
  //       commit("SET_ERROR",true)
  //     }
  //   },
  // },

  // getters: {
  //   listProducts(state) {
  //     return state.products;
  //   },
  //   isLoading(state) {
  //     return state.isLoading;
  //   },
  // },
});

export default store;
