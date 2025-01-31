<template>
    <div class="card mt-5" style="width: 18em; min-height: 24em; box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2); position: relative;">
        <img :src="store.getGamePicutre(name)" class="card-img-top" alt="..." style="height: 150px;">
        <!-- <div class="position-absolute top-0 start-0 rounded-circle bg-danger text-white bdg">
            -20%</div> -->
        <div class="card-body text-center d-flex flex-column">
            <h5 class="card-title">{{ store.getGameName(name) }}</h5>
            <p class="card-text" style="font-size: 12px;">{{ store.getGameDescription(name) }}</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
                <p class="mb-0">Price: ${{ store.getGamePrice(name) }}</p>
                <a href="#" class="btn btn-success">Buy</a>
            </div>
        </div>
    </div>
</template>

<script>
import { useCounterStore } from '../stores/counter';

export default {
    props: {
        name: String,
    },
    data() {
        return {
            store: useCounterStore()
        }
    },
}

</script>

<style>
.card:hover {
    transform: scale(1.1);
}

.bdg {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    font-size: 0.8em;
    transform: rotate(-25deg);
    clip-path: polygon(50% 0%, 58% 10%, 68% 5%, 72% 15%, 80% 10%, 78% 22%, 90% 20%, 85% 32%,
            98% 40%, 90% 48%, 98% 55%, 85% 60%, 90% 70%, 78% 75%, 82% 85%, 70% 88%,
            75% 98%, 62% 92%, 60% 100%, 50% 94%, 40% 100%, 38% 92%, 25% 98%, 30% 88%,
            18% 85%, 22% 75%, 10% 70%, 15% 60%, 2% 55%, 10% 48%, 2% 40%, 15% 32%,
            10% 20%, 22% 22%, 20% 10%, 28% 15%, 32% 5%, 42% 10%);
}
</style>
