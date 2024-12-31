import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        console.log("Data:", data); // Debugging hasil JSON

        this.products = data; // Simpan ke state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },


    filterProducts(query) {
      // Filter produk berdasarkan query
      this.filteredProducts = this.products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
});
