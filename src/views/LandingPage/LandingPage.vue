<template>
    <UserLayout @show-login-modal="showLoginModal">
        <div class="container-fluid rounded-4 poppins-font bg-light">
            <div class="row align-items-center">
                <div class="col-md-6 px-4">
                    <img src="@/assets/logo-sie.png" width="150px" alt="Illustration" class="img-fluid mb-3" />
                    <h1 class="text-custom text-primary poppins-bold">
                        SISTEM INFORMASI EKSEKUTIF
                    </h1>
                    <span class="text-custom1 text-dark poppins-light">KEMENDAGRI</span>
                    <p class="lead">
                        Lorem Ipsum Dolor Sit Amet Consectetur, Semper Pharetra Gravida
                        Elitard Adipiscing Una Urna Placerat Convallis, Turpis Sagittis A
                        Aliquet Et Odio, Maecenas Libero Lachina Amet Odio Vestibulum
                        Fermentum Et Malesuada, A Consequat Sagittis Tellus Faucibus Sed
                        Duis Sapien Erat Interdum.
                    </p>
                </div>
                <div class="col-md-6 d-flex justify-content-end align-items-end">
                    <div class="image-container">
                        <img src="@/assets/Rectangle 1.png" alt="Illustration"
                            class="img-fluid rounded-right foreground-image" />
                        <Vue3Lottie :animationData="animationData" class="img-fluid background-image" />
                    </div>
                </div>
            </div>
        </div>

        <teleport to="body">
            <ModalLogin v-if="isLoginModalVisible" @close="isLoginModalVisible = false"
                :is-visible="isLoginModalVisible" />
        </teleport>
    </UserLayout>
</template>

<script>
import UserLayout from "@/components/UserLayout.vue";
import ModalLogin from "@/components/auth/ModalLogin.vue";
import animationData from "../../assets/sielanding.json";
import { Vue3Lottie } from 'vue3-lottie'

export default {
    name: "LandingPage",
    components: {
        UserLayout,
        ModalLogin,
        Vue3Lottie,
    },
    data() {
        return {
            isLoginModalVisible: false,
            animationData,
        };
    },
    methods: {
        showLoginModal() {
            console.log("Opening login modal");
            this.isLoginModalVisible = true;
        },
    },
};
</script>

<style scoped>
.image-container {
    position: relative;
    width: 100%;
    height: auto;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin-top: 25vh;
    height: 60vh;
    object-fit: cover;
}

.foreground-image {
    top: 0;
    right: 0;
    z-index: 2;
    display: flex;
    border-radius: 0 20px 20px 0;
    height: 100vh;
    object-fit: cover;
    margin-left: auto;
}

.text-custom {
    color: #005fa4;
    font-size: 2.5vw;
    font-weight: bolder;
}

.text-custom1 {
    color: black;
    font-size: 2.5vw;
    font-weight: bolder;
}

.lead {
    font-size: 1.2rem;
    font-weight: 300;
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
