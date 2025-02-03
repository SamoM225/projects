<template>
    <div class="col-md-6">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Order Summary</h5>
                        <table class="table table-striped table-bordered">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">Game Name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in store.cart">
                                    <td>{{ item.name }}</td>
                                    <td>${{ item.price }}</td>
                                </tr>
                                <tr class="table-info">
                                    <th scope="row">Total</th>
                                    <td>${{ store.getTotalPrice }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCounterStore } from '../stores/counter';
export default {
    name: "OrderTable",
    setup() {
        const store = useCounterStore();
        return { store };
    }
}
</script>