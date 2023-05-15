import { ApiService } from "@/common/api/api.service";

export const ProductService = {
  async listAsync() {
    return await ApiService.get("/products");
  },

  async getById(id) {
    return await ApiService.get(`/products/${id}`);
  },
};

export default ProductService;
