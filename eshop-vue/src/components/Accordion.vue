<script>
import { useCounterStore } from '../stores/counter';
import GameCategories from '../assets/GameCategories.json';

export default {
    data() {
        return {
            GameCategories: GameCategories,
            store: useCounterStore()
        }
    },
}
</script>

<template>
    <div class="col-12 col-md-2 order-md-1">
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Categories
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body" v-for="category in GameCategories" :key="category.id">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" :value="category.name" :id="category.name"
                                v-model="store.checkedCategories">
                            <label class="form-check-label" :for="category.name">
                                {{ category.name }}
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>