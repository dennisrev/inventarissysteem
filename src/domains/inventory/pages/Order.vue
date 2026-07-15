<script setup lang="ts">

import ProductTable from '../components/ProductTable.vue';

import { getLowStockProducts } from '../store.ts';

const lowStockProducts = getLowStockProducts; 

</script>

<template>

<ProductTable :products="lowStockProducts"/> 
 
</template>