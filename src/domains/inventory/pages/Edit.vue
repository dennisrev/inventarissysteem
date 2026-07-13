<script setup lang="ts">

import ProductForm from '../components/ProductForm.vue';
import { useRoute, useRouter } from 'vue-router';

import type { ProductItem, ProductItemWithId } from '../store';
import { getProductById, updateProduct } from '../store';

const route = useRoute();
const router = useRouter();

const productwithId = getProductById(Number(route.params.id)).value as ProductItemWithId;
const { id, ...product } = productwithId;

const handleUpdateProductItem = (updatedProduct: ProductItem) => {
    const updatedProductWithId = { id, ...updatedProduct };
    updateProduct(updatedProductWithId);
    router.push('/products');
};

</script>

<template>

    <h2>Product bewerken</h2>
    <ProductForm :product="product" :does-exist="true" @submit="handleUpdateProductItem" />
    <RouterLink to="/products">Annuleren</RouterLink>

</template>