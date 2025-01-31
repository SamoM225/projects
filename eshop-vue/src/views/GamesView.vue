<script>
import ProductCard from '../components/ProductCard.vue';
import Accordion from '@/components/Accordion.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
    components: {
        ProductCard,
        Accordion,
        ShoppingCart
    }
}
</script>
<template>
    <div class="container mt-3">
        <div class="row">
            <!-- Ľavý panel - Akordeón -->
            <Accordion />

            <!-- Stredný panel - Hry -->
            <div class="col-12 col-md-8 order-md-2">
                <div class="row g-3">
                    <div class="col-md-4">
                        <ProductCard :name="'eldenring'" />
                    </div>
                    <div class="col-md-4">
                        <ProductCard :name="'gtav'" />
                    </div>
                    <div class="col-md-4">
                        <ProductCard :name="'terraria'" />
                    </div>
                </div>
            </div>

            <!-- Pravý panel - Košík -->
            <ShoppingCart />
        </div>
    </div>
</template>

