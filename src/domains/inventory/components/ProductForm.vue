<script setup lang="ts">

import { reactive } from 'vue';

import type { ProductItem } from '../store';

const props = defineProps<{
    product: ProductItem & { id?: number }
    buttonText: string
}>();

const emit = defineEmits<{
    (event: 'submit', product: ProductItem ): void
}>();

const productTemp = reactive<ProductItem>({
    name: props.product.name,
    actualAmount: props.product.actualAmount,
    minimumAmount: props.product.minimumAmount
});

const saveProduct = () => {
     emit('submit', {
        name: productTemp.name,
        actualAmount: productTemp.actualAmount,
        minimumAmount: productTemp.minimumAmount
     });
};

</script>

<template>

<div>

    <form @submit.prevent="saveProduct">

        <div>
            <label for="product-name">Naam product</label>
            <input id="product-name" v-model="productTemp.name" type="text" />
        </div>
        <div>
            <label for="actual-amount">Aantal aanwezig</label>
            <input id="actual-amount" v-model="productTemp.actualAmount" type="number" />
        </div>
        <div>
            <label for="minimum-amount">Aantal vereist</label>
            <input id="minimum-amount" v-model="productTemp.minimumAmount" type="number" />
        </div>
        <button type="submit" >{{ buttonText }}</button>
    </form>
</div>

</template>