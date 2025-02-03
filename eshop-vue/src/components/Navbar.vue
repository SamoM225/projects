<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#" style="margin: auto">
                <img src="../icons/2.png" alt="navbar logo" width="50" height="50" class="d-none d-lg-block">
            </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="bi bi-house-door"></i> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/games"><i class="bi bi-controller"></i> Games</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-person-circle"></i> Account</a>
                    </li>
                    <li class="nav-item cart">
                        <button type="button" class="btn btn-secondary"><router-link class="nav-link" to="/shoppingcart"><i class="bi bi-cart"></i> Shopping Cart</router-link></button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar-brand {
    flex-shrink: 0;
}
@media (min-width: 768px) {
    .cart {
        position: absolute;
        right: 0;
        margin-right: 50px;
        top: 50;
    }
}
</style>

