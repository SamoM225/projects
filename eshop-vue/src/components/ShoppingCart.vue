<template>
    <transition name="fade">
        <div class="cart-container col-12 col-md-2 order-md-3" v-show="store.cart.length > 0">
            <h4 style="font-weight: bold;">Shopping Cart</h4>

            <transition-group name="cart" tag="div">
                <div v-for="item in store.cart" :key="item.id" class="cart-item mt-2"
                    style="display: flex; justify-content: space-between;">
                    <button type="button" class="btn-close" aria-label="Close" @click="store.removeItemFromCart({id: item.id})"></button>
                    <span>{{ item.name }}</span>
                    <input type="number" v-model.number="item.quantity" min="0" max="10"
                        style="width: 50px; text-align: center;"
                        @change="item.quantity == 0 ? store.removeItemFromCart({id: item.id}) : null">
                    <span>${{ Math.round((item.price * item.quantity) * 100) / 100 }}</span>
                </div>
            </transition-group>

            <hr>

            <div style="display: flex; justify-content: space-between;">
                <span>Total Price: </span>
                <span>${{ store.getTotalPrice }}</span>
            </div>

            <button type="button" class="btn btn-secondary w-100">Proceed to checkout</button>
        </div>
    </transition>
</template>

<style>
.cart-container {
    position: sticky;
    top: 20px; /* Distance from the top when scrolling */
    height: fit-content;
}
.cart-enter-active,
.cart-leave-active {
    transition: opacity 0.5s ease;
}

.cart-enter-from,
.cart-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<script>
import { useCounterStore } from '@/stores/counter';

export default {
    data() {
        return {
            store: useCounterStore()
        }
    },
}
</script>
