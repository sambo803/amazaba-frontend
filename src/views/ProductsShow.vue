<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        product: {},
      };
    },
    created: function () {
      axios.get("/products/" + this.$route.params.id).then((response) => {
      console.log("products show", response);
      this.product = response.data;
    });
    },
    methods: {},
  };
</script>

<template>
  <div class="products-show">
    <h2>{{ product.name }}</h2>
    <img v-bind:src="product.image_url" v-bind:alt="product.name" />
<router-link to="/products">Back to all products</router-link>
  </div>
</template>

<style></style>