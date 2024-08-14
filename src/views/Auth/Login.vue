<template>
    <div class="container-fluid d-flex justify-content-center align-items-center bg-custom">
        <div class="row w-100">
            <div class="col-md-6 text-center login-side">
                <img src="@/assets/logo-sie.png" alt="Dashboard Analytics" class="img-fluid" />
                <h1 class="mt-3 fw-bolder text-primary">SISTEM INFORMASI EKSEKUTIF</h1>
                <h1 class="mt-3 fw-bolder text-dark">KEMENDAGRI</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center shadow-lg login-form">
                <form @submit.prevent="handleLogin" class="w-100" style="max-width: 400px;">
                    <h1 class="text-center">LOGIN</h1>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input v-model="username" type="text" id="username" class="form-control"
                            placeholder="Enter your username" />
                        <span v-if="errors.username" class="text-danger">{{ errors.username }}</span>
                    </div>
                    <div class="mb-3 position-relative">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" :type="showPassword ? 'text' : 'password'" id="password"
                            class="form-control " placeholder="Enter your password" />
                        <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'"
                            class="position-absolute top-50 mt-3 end-0 translate-middle-y me-3 cursor-pointer"
                            @click="togglePasswordVisibility" />
                        <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                    </div>

                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'

export default {
    name: 'LoginPage',
    setup() {
        const router = useRouter()
        const schema = yup.object({
            username: yup.string().required('Username is required'),
            password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        })

        const { handleSubmit, errors, resetForm } = useForm({ validationSchema: schema })
        const { value: username } = useField('username')
        const { value: password } = useField('password')
        const showPassword = ref(false)

        const handleLogin = handleSubmit(values => {
            const { username, password } = values

            if (username === 'admin' && password === 'admin123') {
                console.log('Login sukses')
                router.push('/dashboard')
                resetForm()
            } else {
                console.log('Login gagal')
                alert('Username atau password salah')
            }
        })

        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value
        }

        return {
            username,
            password,
            showPassword,
            errors,
            handleLogin,
            togglePasswordVisibility
        }
    }
}
</script>

<style scoped>
html,
body {
    height: 100%;
    margin: 0;
}

.container-fluid {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-login {
    background-color: #004C93;
}

.row {
    width: 100%;
}

.login-form {
    border-radius: 100px 0 0 100px;
    background-color: #fff;
    height: 100vh;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x)* .5);
    padding-left: calc(var(--bs-gutter-x)* .5);
    margin-right: auto;
    margin-left: auto;
}
</style>
