<script>
import { useCounterStore } from '@/stores/counter';
import FormCheck from '../components/FormCheck.vue';
import OrderTable from '../components/OrderTable.vue';
export default {
    components: {
        FormCheck,
        OrderTable
    },
    data() {
        return {
            store: useCounterStore()
        }
    }
}

</script>


<template>
    <div>
        <div class="container">
            <div class="text-center pb-5">
                <span class="fw-bold fs-1 text-success mb-3">Summary</span>
            </div>
            <div class="row">
                <FormCheck />
                <OrderTable />
            </div>
        </div>
    </div>
</template>
