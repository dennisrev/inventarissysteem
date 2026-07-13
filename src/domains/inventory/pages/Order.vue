<script setup lang="ts">

import ProductTable from '../components/ProductTable.vue';

import { getLowStockProducts } from '../store.ts';

// we willen lowStockProducts

const lowStockProducts = getLowStockProducts; 

// we willlen hier nu alleen producten waarvan te weining zijn

</script>

<template>

<ProductTable :products="lowStockProducts"/> 
 
</template>