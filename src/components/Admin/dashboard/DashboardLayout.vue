<template>
    <div class="dashboard">
        <AdminSidebar :isCollapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
        <div class="main-content" :class="{ 'expanded': isSidebarCollapsed }">
            <AdminNavbar :isSidebarCollapsed="isSidebarCollapsed" />
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

export default {
    components: {
        AdminNavbar,
        AdminSidebar,
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
}

.main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s;
}
</style>
