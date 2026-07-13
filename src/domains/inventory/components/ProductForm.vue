<script setup lang="ts">

import { reactive } from 'vue';

import type { ProductItem } from '../store';

const props = defineProps<{
    product: ProductItem
    doesExist?: boolean
}>();

const emit = defineEmits<{
    (event: 'submit', product: ProductItem): void
}>();

const productTemp  = reactive<ProductItem>({
    name: props.product.name,
    actualAmount: props.product.actualAmount,
    minimumAmount: props.product.minimumAmount
});

const saveGrocery = () => {
     emit('submit', {
        name: productTemp.name,
        actualAmount: productTemp.actualAmount,
        minimumAmount: productTemp.minimumAmount
     });
};

</script>

<template>

<div>

  <table align="center">
    <thead>
        <tr>
            <td colspan="2">
                Product {{ props.doesExist ? "bewerken" : "toevoegen" }}
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Naam product</td>
            <td> <input v-model="productTemp.name" type="text"/> </td>
        </tr>
        <tr>
            <td>Aantal aanwezig</td>
            <td> <input v-model.number="productTemp.actualAmount" type="number"/> </td>
        </tr>
        <tr>
            <td>Aantal vereist</td>
            <td> <input v-model.number="productTemp.minimumAmount" type="number"/> </td>
        </tr>
    </tbody>
  </table>
  <button @click="saveGrocery">{{ props.doesExist ? "Aanpassen" : "Toevoegen" }}</button>

</div>

</template>