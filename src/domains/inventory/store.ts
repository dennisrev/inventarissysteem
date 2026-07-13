import { ref, computed } from 'vue';

export interface ProductItem {
    name: string;
    actualAmount: number;
    minimumAmount: number;
};

export interface ProductItemWithId extends ProductItem {
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

export const getLowStockProducts = computed(() => products.value.filter(product => product.actualAmount < product.minimumAmount) );

export const getProductById = (id: number) => computed(() => products.value.find(product => product.id === id));

export const updateActualAmount = (id: number, newActualAmount: number) => {
    const productIndex = products.value.findIndex(productItem => productItem.id === id);
    if (productIndex !== -1) {
        products.value[productIndex].actualAmount = newActualAmount;
    };
};

export const updateProduct = (product: ProductItemWithId) => {
    const productIndex = products.value.findIndex(productItem => productItem.id === product.id);
    if (productIndex !== -1) {
        products.value.splice(productIndex, 1, product);
    };
};

export const addProduct = (product: ProductItem) => {
    const maxId = products.value.reduce((max, productItem) => (productItem.id > max ? productItem.id : max), 0);

    const newProduct: ProductItemWithId = {
        ...product,
        id: maxId + 1
    };
    products.value.push(newProduct);
};