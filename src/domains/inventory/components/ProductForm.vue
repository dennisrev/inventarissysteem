<script setup lang="ts">

import { reactive } from 'vue';

import type { ProductItem } from '../store';

const props = defineProps({
    product: Object
});

const productTemp  = reactive<ProductItem>({
    name: props.product.name,
    actualAmount: props.product.actualAmountAmount,
    minimumAmount: props.product.minimumAmount
});

const emit = defineEmits(['submit']);

const saveGrocery = () => {
     emit('submit', {
        name: groceryTemp.name,
        price: groceryTemp.price,
        quantity: groceryTemp.quantity
     });
};

</script>

<template>

<div>

  <table align="center">
    <thead>
        <tr>
            <td colspan="2">Product toevoegen/bewerken</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Naam</td>
            <td> <input v-model="groceryTemp.name" type="text"/> </td>
        </tr>
        <tr>
            <td>Prijs</td>
            <td> <input v-model="groceryTemp.price" type="number"/> </td>
        </tr>
        <tr>
            <td>Hoeveelheid</td>
            <td> <input v-model="groceryTemp.quantity" type="number"/> </td>
        </tr>
    </tbody>
  </table>
  <button @click="saveGrocery">Opslaan</button>

</div>

</template>