import { ref, computed } from 'vue';

export interface ProductItem {
    name: string;
    actualAmount: number;
    minimumAmount: number;
};

interface ProductItemWithId extends ProductItem {
    id: number;
};

const products = ref<ProductItemWithId[]>([
    { id: 1, name: "product1", actualAmount: 3, minimumAmount: 2 },
    { id: 2, name: "product2", actualAmount: 4, minimumAmount: 3 },
    { id: 3, name: "product3", actualAmount: 5, minimumAmount: 4 },
    { id: 4, name: "product4", actualAmount: 6, minimumAmount: 5 },
    { id: 5, name: "product5", actualAmount: 7, minimumAmount: 10 },
    { id: 6, name: "product6", actualAmount: 8, minimumAmount: 11 },
    { id: 7, name: "product7", actualAmount: 9, minimumAmount: 12 },
]);

export const getAllProducts = computed(() => products.value);

export const addProduct = (product: ProductItemWithId) => {
    const maxId = products.value.reduce((max, productItem) => (productItem.id > max ? productItem.id : max), 1);
    product.id = maxId + 1;
    products.value.push(product);
};