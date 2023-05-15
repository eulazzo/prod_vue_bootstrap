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
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async post(resource, info) {
    this.init();
    try {
      const { data } = await axios.post(
        `http://localhost:3000/cart`,
        JSON.stringify(info),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
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
      const data = await fetch(`http://localhost:3000/cart/${resource} `, {
        method: "DELETE",
      });
      return await data.json();
    } catch (error) {
      return console.log(error);
    }
  },

  async deleteAll( ) {
    try {
      await fetch(`http://localhost:3000/cart`, {
        method: "DELETE",
      });
    } catch (error) {
      return console.log(error);
    }
  },
};
