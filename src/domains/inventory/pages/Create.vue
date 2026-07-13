<script setup lang="ts">

import ProductForm from '../components/ProductForm.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

import type { ProductItem } from '../store';
import { addProduct } from '../store';

const product: ProductItem = {
    name: '',
    actualAmount: 0,
    minimumAmount: 0
};

const handleCreateProductItem = (addedProduct: ProductItem) => {
    addProduct(addedProduct);
    router.push('/products');
};

</script>

<template>

    <h2>Product toevoegen</h2>
    <ProductForm :product="product" :does-exist="false" @submit="handleCreateProductItem" />
    <RouterLink to="/products">Annuleren</RouterLink>

</template>