<template>
    <div class="modal fade show d-block p-5" tabindex="-1" role="dialog" @click.self="handleClose">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content p-4">
                <div class="modal-header text-center border-0">
                    <h5 class="modal-title  fw-bold">Pilih Resolusi Layar Anda</h5>
                </div>
                <div class="modal-body">
                    <p class="text-center">
                        Resolusi 16:9 digunakan untuk layar laptop, TV, wall screen, tablet (landscape) dan resolusi
                        9:16 digunakan untuk layar telepon genggam dan display signage. Pilihlah resolusi sesuai dengan
                        kebutuhan desain Anda.
                    </p>
                    <div class="row">
                        <div class="col-6">
                            <div class="card text-center">
                                <img src="@/assets/laptop.png" class="card-img-top p-3" alt="Laptop">
                                <div class="card-body">
                                    <h5 class="card-title">16 : 9</h5>
                                    <p class="card-text">Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card text-center">
                                <img src="@/assets/mobile.png" class="card-img-top p-3" alt="Mobile">
                                <div class="card-body">
                                    <h5 class="card-title">9 : 16</h5>
                                    <p class="card-text">Portrait</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalResolusi",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.modal {
    width: 100vw;
    padding: 50px;
}

.modal-content {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: #f8f9fa;
}

.modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.card {
    border: 1px solid #e3e3e3;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
    max-width: 100%;
    margin: auto;
}

.card-title {
    font-size: 1.25rem;
}

.card-text {
    color: #6c757d;
}
</style>
