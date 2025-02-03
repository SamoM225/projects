<script>
import Navbar from '@/components/Navbar.vue';
import Carousel from '@/components/Carousel.vue';
import ProductCard from '@/components/ProductCard.vue';
import SaleProductCard from '@/components/saleProductCard.vue';

export default {
  components: {
    Navbar,
    Carousel,
    ProductCard,
    SaleProductCard,
  }
}

</script>

<template>
  <div>


    <main>
      <Carousel />
      <p class="text-center fs-3 fw-bold mt-3">Check out some of our discounted best selling games</p>
      <p class="text-center fs-5 fw-bold mt-1">To see our all products, click <router-link class="text-bg-info fs-4 border border-1 border-dark rounded text-decoration-none" to="/games">here</router-link></p>
      <div class="d-flex flex-row flex-wrap col-12 justify-content-center">
        <SaleProductCard :sale="20" :name="'eldenring'" />
        <SaleProductCard class="mx-2" :sale="10" :name="'gtav'" />
        <SaleProductCard :sale="50" :name="'terraria'" />
      </div>

    </main>
    <div class="p-5">

    </div>

  </div>
</template>