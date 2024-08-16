<template>
    <div v-if="isVisible" class="modal-backdrop">
        <div class="modal-dialog">
            <div class="modal-content position-relative">
                <button type="button" class="position-absolute top-0 end-0 me-4 my-2 close" aria-label="Close"
                    @click="$emit('close')">
                    <img src="@/assets/times-square-Bold.svg" alt="Close" style="width: 25px;" />
                </button>
                <div class="modal-header mb-3 mt-4">
                    <img src="@/assets/graphic frame.png" width="650vw" alt="Illustration" class="img-fluid">
                </div>
                <div class="modal-body">
                    <h5 class="modal-title text-center mb-3" id="loginModalLabel">Form Login</h5>
                    <form @submit.prevent="validateForm">
                        <div class="mb-3">
                            <input type="text" v-model="username" class="form-control rounded-3" id="username"
                                placeholder="Masukkan Username/NIK" />
                            <span v-if="errors.username" class="text-danger">{{ errors.username }}</span>
                        </div>
                        <div class="mb-3 position-relative">
                            <input v-model="password" :type="showPassword ? 'text' : 'password'" id="password"
                                class="form-control " placeholder="Enter your password" />
                            <font-awesome-icon :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
                                class="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                                @click="togglePasswordVisibility" />
                            <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <div v-if="showError" class="text-danger mb-3">Ups! Username/NIK Anda Tidak Ditemukan</div>
                            <div v-if="!showError" class="mb-3">
                                Lupa kata sandi?
                                <a class="text-decoration-none cursor-pointer" @click="showForgotPasswordModal">
                                    <span class="text-danger spasi">Klik disini</span>
                                </a>
                            </div>
                            <button type="submit" class="masuk btn">Masuk</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <ForgotPassword v-if="isForgotPasswordVisible" :isVisible="isForgotPasswordVisible"
        @close="closeForgotPasswordModal" />
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ForgotPassword from './ForgotPassword.vue';

export default {
    components: {
        FontAwesomeIcon,
        ForgotPassword,
    },
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const router = useRouter();
        const username = ref('');
        const password = ref('');
        const errors = ref({});
        const showError = ref(false);
        const showPassword = ref(false);
        const isForgotPasswordVisible = ref(false);

        const dummyUsername = 'admin';
        const dummyPassword = 'admin123';

        const schema = Yup.object({
            username: Yup.string().required('Username/NIK harus diisi'),
            password: Yup.string().required('Password harus diisi'),
        });

        const validateForm = async () => {
            errors.value = {};
            showError.value = false;

            try {
                await schema.validate({ username: username.value, password: password.value }, { abortEarly: false });

                if (username.value !== dummyUsername || password.value !== dummyPassword) {
                    showError.value = true;
                } else {
                    alert('Login berhasil');
                    router.push('/infografis');
                    emit('close');
                }
            } catch (validationErrors) {
                validationErrors.inner.forEach((error) => {
                    errors.value[error.path] = error.message;
                });
            }
        };

        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
        };

        const showForgotPasswordModal = () => {
            isForgotPasswordVisible.value = true;
        };

        const closeForgotPasswordModal = () => {
            isForgotPasswordVisible.value = false;
        };

        return {
            username,
            password,
            errors,
            showError,
            validateForm,
            showPassword,
            togglePasswordVisibility,
            isForgotPasswordVisible,
            showForgotPasswordModal,
            closeForgotPasswordModal,
        };
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
    height: 100%;
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

.cursor-pointer {
    cursor: pointer;
}

.spasi {
    margin-left: 1px;
}

.close {
    border: none;
    padding: 0;
}
</style>