<template>
    <div class="col-md-6">
        <form class="row g-3">
            <div class="col-md-6">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" required>
            </div>
            <div class="col-md-6">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" required>
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="col-md-6">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" required>
            </div>
            <div class="col-md-6">
                <label for="mobileNumber" class="form-label">Mobile Number</label>
                <input type="text" class="form-control" id="mobileNumber" required>
            </div>
            <div class="col-12">
                <label for="paymentMethod" class="form-label">Payment Method</label>
                <select class="form-select" id="paymentMethod" required>
                    <option selected disabled>Choose...</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Place Order</button>
            </div>
        </form>
    </div>
</template>

