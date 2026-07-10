<script setup lang="ts">

const props = defineProps({
    products: Array
});

</script>

<template>

<div>

    <table align="center">
        <thead>
            <tr>
                <td colspan="3">Overzicht alle producten</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Naam product</th>
                <th>Aantal aanwezig</th>
                <th>Aantal vereist</th>
            </tr>
            <tr v-for="product in props.products" :key="product.id">
                <td> {{ product.name }}</td>
                <td> <input v-model="product.actualAmount" type="number"/></td>
                <td> {{ product.minimumAmount }}</td>
            </tr>
        </tbody>

    </table>

</div>

</template>