<template>
    <div class="dashboard">
        <UserSidebar :isCollapsed="isSidebarCollapsed" />
        <div class="main-content bg-custom" :class="{ 'expanded': isSidebarCollapsed }">
            <AdminNavbar :isSidebarCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
            <div class="content bg-custom">
                <slot />
            </div>
            <UserFooter :class="{ 'collapsed': isSidebarCollapsed }" />
        </div>
    </div>
</template>

<script>
import AdminNavbar from '../AdminNavbar.vue';
import UserSidebar from '../AdminSidebar.vue';
import UserFooter from '../../UserFooter.vue';

export default {
    components: {
        AdminNavbar,
        UserSidebar,
        UserFooter
    },
    data() {
        return {
            isSidebarCollapsed: false
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        }
    }
};
</script>

<style scoped>
.dashboard {
    display: flex;
    height: 100vh;
}

.main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s;
}
</style>