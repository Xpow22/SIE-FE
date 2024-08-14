<template>
    <div v-if="isVisible" class="modal-backdrop">
        <div class="modal-dialog">
            <div class="modal-content position-relative">
                <button type="button" class="btn-close position-absolute top-0 end-0 me-4 mt-3" aria-label="Close"
                    @click="$emit('close')"></button>
                <div class="modal-header mb-3 mt-4">
                    <img src="@/assets/LupaKataSandi.png" width="650vw" alt="Illustration" class="img-fluid">
                </div>
                <div class="modal-body">
                    <h5 class="modal-title text-center mb-3" id="loginModalLabel">
                        Silahkan Hubungi Admin untuk merubah/mereset katasandi anda
                    </h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(8px);
}

.modal-content {
    background-color: white;
    padding: 20px;
    height: 80vh;
    width: 50vw;
    border-radius: 10px;
}

.masuk {
    background-color: #01c45b;
    color: white;
    width: 110px;
    text-align: center;
    border-radius: 20px;
}

.masuk:hover {
    background-color: #01c45b;
    color: white;
    width: 110px;
    text-align: center;
    border-radius: 20px;
}

.btn-close {
    color: red;
}
</style>