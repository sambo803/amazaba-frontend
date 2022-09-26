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
    <div v-for="product in products" v-bind:key="product.id">
    <h2>{{product.name}}</h2>
    <img v-bind:src="product.image_url" v-bind:alt="product.name" />
  </div>
</div>
</template>

<style></style>

