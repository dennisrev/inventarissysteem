<script setup lang="ts">

import type { ProductItemWithId } from '../store';

const props = defineProps<{
    products: ProductItemWithId[]
}>();

const emit = defineEmits<{
    (event: 'updateActualAmount', id: number, newActualAmount: number): void
}>();

const submitAmountChange = (id: number, event: Event) => {
    const input = event.target as HTMLInputElement;
    emit('updateActualAmount', id, Number(input.value));
};

</script>

<template>
 
<div>

    <table align="center">
        <thead> 
            <tr>
                <th colspan="3">Overzicht alle producten</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Naam product</th>
                <th>Aantal aanwezig</th>
                <th>Aantal vereist</th>
            </tr>
            <tr v-for="product in products" :key="product.id">
                <td> {{ product.name }}</td>
                <td> <input
                        :value="product.actualAmount"
                        type="number"
                        @input="submitAmountChange(product.id, $event)"
                    />
                </td>
                <td> {{ product.minimumAmount }}</td>
                <td>
                    <RouterLink :to="`/products/edit/${product.id}`">
                        <button type="button">Bewerken</button>
                    </RouterLink>
                </td>
            </tr>
        </tbody>

    </table>

</div>

</template>