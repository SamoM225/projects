<template>
    <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel"
        style="width: 1300px; margin: 0 auto; justify-content: center;">
        <div class="carousel-inner crsl">
            <div class="carousel-item active">
                <img src="../icons/eldenring.jpg" class="d-block w-100" style="filter: brightness(0.7);" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="fw-bold fire-text" data-text="Elden Ring">Elden Ring</h1>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../icons/gtav.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="fw-bold neon-text" data-text="Grand Theft Auto V">Grand Theft Auto V</h1>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../icons/terraria.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="fw-bold terraria-text" data-text="Terraria">Terraria</h1>
                </div>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style>
.carousel-inner img {
    object-fit: cover;
    max-height: 250px;
    min-width: 1000px;
}

.crsl {
    border: 1px solid #000;
    border-radius: 50px;
    box-shadow: 2px 2px 2px 2px #00000023;
}

.fire-text {
    position: relative;
    font-size: 3rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-weight: bold;
    display: inline-block;
    text-transform: uppercase;
}

.fire-text::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    background: linear-gradient(120deg, #ff3737, #ffa500, #ffea00, #ffffff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: fire-animation 2s infinite ease-in-out;
    opacity: 0.9;
    filter: blur(4px);
}

@keyframes fire-animation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.neon-text {
    position: relative;
    font-size: 3rem;
    color: white;
    text-shadow: 2px 2px 6px rgba(128, 0, 255, 0.7);
    font-weight: bold;
    display: inline-block;
    text-transform: uppercase;
}

.neon-text::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    background: linear-gradient(120deg, #ff00ff, #9400d3, #4b0082, #00ffff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: neon-animation 3s infinite ease-in-out;
    opacity: 0.9;
    filter: blur(3px);
}

@keyframes neon-animation {
    0% {
        background-position: 0% 50%;
        text-shadow: 2px 2px 10px rgba(255, 0, 255, 0.8);
    }

    50% {
        background-position: 100% 50%;
        text-shadow: 2px 2px 15px rgba(148, 0, 211, 0.9);
    }

    100% {
        background-position: 0% 50%;
        text-shadow: 2px 2px 10px rgba(255, 0, 255, 0.8);
    }
}

.terraria-text {
    position: relative;
    font-size: 3rem;
    color: white;
    text-shadow: 2px 2px 6px rgba(0, 128, 0, 0.7);
    font-weight: bold;
    display: inline-block;
    text-transform: uppercase;
}

.terraria-text::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    background: linear-gradient(120deg, #00ff00, #32cd32, #adff2f, #ffffff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: terraria-glow 3s infinite ease-in-out;
    opacity: 0.9;
    filter: blur(3px);
}

@keyframes terraria-glow {
    0% {
        background-position: 0% 50%;
        text-shadow: 2px 2px 10px rgba(0, 255, 0, 0.8);
    }

    50% {
        background-position: 100% 50%;
        text-shadow: 2px 2px 15px rgba(50, 205, 50, 0.9);
    }

    100% {
        background-position: 0% 50%;
        text-shadow: 2px 2px 10px rgba(0, 255, 0, 0.8);
    }
}
</style>

