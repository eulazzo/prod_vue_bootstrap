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
};

export default ProductService;
