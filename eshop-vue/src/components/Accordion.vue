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
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="rpg" id="rpg">
                                    <label class="form-check-label" for="rpg">
                                        RPG
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="action" id="action">
                                    <label class="form-check-label" for="action">
                                        Akcia
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="2D" id="2D">
                                    <label class="form-check-label" for="2D">
                                        2D
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="3D" id="3D">
                                    <label class="form-check-label" for="3D">
                                        3D
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>