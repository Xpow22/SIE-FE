<template>
    <div class="dashboard">
        <AdminSidebar :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <div class="main-content" :class="{ 'expanded': isSidebarCollapsed }">
            <AdminNavbar :isSidebarCollapsed="isSidebarCollapsed" @show-login-modal="toggleLoginModal" />
            <div class="content">
                <slot />
            </div>
            <UserFooter :class="{ 'collapsed': isSidebarCollapsed }" />
        </div>

    </div>
</template>

<script>
import AdminNavbar from '../AdminNavbar.vue';
import AdminSidebar from '../AdminSidebar.vue';
import UserFooter from '../../UserFooter.vue';
// import ModalLogin from '@/components/auth/ModalLogin.vue';

export default {
    components: {
        AdminNavbar,
        AdminSidebar,
        UserFooter,
        // ModalLogin
    },
    data() {
        return {
            isSidebarCollapsed: false,
            showLoginModal: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        },
        toggleLoginModal() {
            this.showLoginModal = !this.showLoginModal;
        }
    }
};
</script>

<style scoped>
.dashboard {
    display: flex;
}

.main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s;
}
</style>
