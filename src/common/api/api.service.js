import { API_URL } from "../config/config.js";
import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp();
app.use(VueAxios, axios);

export const ApiService = {
  init() {
    app.axios.defaults.baseURL = API_URL;
  },
  async get(resource) {
      this.init();
    try {
      const { data } = await axios.get(`${resource}`);
      console.log(data);

      return data;
    } catch (error) {
       console.log(error);
    }
  },

  async post(resource, info) {
    this.init();
    try {
      const { data } = await axios.post(`/${resource}`, JSON.stringify(info), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return error.response.data;
    }
  },

  async put(resource, info) {
    this.init();
    try {
      const { data } = await axios.put(`/${resource}`, JSON.stringify(info), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return error.response.data;
    }
  },

  async delete(resource) {
    try {
      const data = await fetch(`${API_URL}/${resource}`, {
        method: "DELETE",
      });
      return await data.json();
    } catch (error) {
      return console.log(error);
    }
  },
};
