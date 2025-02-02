<script>
import ProductCard from '../components/ProductCard.vue';
import Accordion from '@/components/Accordion.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import product_data from '../assets/product_data.json';
import { useCounterStore } from '../stores/counter';

export default {
    components: {
        ProductCard,
        Accordion,
        ShoppingCart,
    },
    data() {
        return {
            product_data,
            store: useCounterStore(),
        }
    }
}
</script>
<template>
    <div class="container mt-3">
        <div class="row g-3">
            <!-- Ľavý panel - Akordeón -->
            <Accordion style="padding-right: 15px;" />

            <!-- Stredný panel - Hry -->
            <div class="col-12 col-md-8 order-md-2">
                <div class="row g-3">
                    <div class="col-md-4 mb-4" v-for="game in product_data" :key="game.id">
                        <ProductCard :name="game.name" />
                    </div>
                </div>
            </div>

            <!-- Pravý panel - Košík -->
            <ShoppingCart v-if="store.cart.length > 0" />
        </div>
    </div>
</template>