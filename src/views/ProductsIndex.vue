<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Welcome to Products Page!",
        products: [],
      };
    },
    created: function () {
      this.indexProducts();
    },
    methods: {
      indexProducts: function () {
        axios.get("/products").then((response) => {
          console.log("getting products index", response);
          this.products = response.data;
        });
      }
    },
  };
</script>

<template>
  <div class="index">
    <h1>{{ message }}</h1>

    <h2>{{products}}</h2>
  </div>
</template>

<style></style>