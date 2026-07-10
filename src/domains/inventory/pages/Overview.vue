<script setup lang="ts">

import ProductTable from '../components/ProductTable.vue';

import { getAllProducts } from '../store.ts';

const allProducts = getAllProducts;

</script>

<template>

<ProductTable :products="allProducts"/> 
 
</template>