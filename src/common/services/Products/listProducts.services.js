import { ApiService } from "@/common/api/api.service";

export const ProductService = {
  async listAsync() {
    return await ApiService.get("/products");
  },

  async getById(id) {
    return await ApiService.get(`/products/${id}`);
  },
  async create(payload) {
    return await ApiService.post(`/products`, payload);
  },

  async postCart(payload) {
    return await ApiService.post(`/cart`, payload);
  },
  async getCardItens() {
    return await ApiService.get(`/cart`);
  },

  async remove(id="") {
      return await ApiService.delete(id);
  },
  async removeAll(){
    return await ApiService.deleteAll()
  }
};

export default ProductService;
