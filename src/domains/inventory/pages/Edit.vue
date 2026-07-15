<script setup lang="ts">

import ProductForm from '../components/ProductForm.vue';
import { useRoute, useRouter } from 'vue-router';

import type { ProductItem } from '../store';
import { getProductById, updateProduct } from '../store';

const route = useRoute();
const router = useRouter();

const productWithId = getProductById(Number(route.params.id));

const handleUpdateProductItem = (updatedProduct: ProductItem) => {
    updateProduct(Number(route.params.id), updatedProduct);
    router.push('/products');
};
</script>

<template>

    <h2>Product bewerken</h2>
    <ProductForm v-if="productWithId" :product="productWithId" button-text="Aanpassen" @submit="handleUpdateProductItem" />
    <RouterLink to="/products">Annuleren</RouterLink>

</template>