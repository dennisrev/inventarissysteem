<script setup lang="ts">

import ProductForm from '../components/ProductForm.vue';

import type { ProductItem } from '../store.ts';
import { addProduct } from '../store.ts';

const product: ProductItem = {
    name: '',
    actualAmount: 0,
    minimumAmount: 0
};

</script>

<template>

    <h2>Product toevoegen</h2>
    <ProductForm :product="product" @submit="addProduct" />

</template>