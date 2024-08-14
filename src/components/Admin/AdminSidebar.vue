<template>
    <div :class="['sidebar', { 'collapsed': isCollapsed }]">
        <div class="brand-container bg-custom py-2">
            <img src="@/assets/logo-sie.png" class="logo px-1" alt="Logo SIE">
            <div v-if="!isCollapsed" class="brand-name">
                <div class="text-primary fw-semibold">Sistem Informasi Eksekutif</div>
                <span class="fw-semibold"> KEMENDAGRI</span>
            </div>
        </div>
        <ul class="nav flex-column bg-custom">
            <li class="nav-item mt-3">
                <router-link to="/dashboard" class="nav-link">
                    <img src="@/assets/Property 1=dashboard.png" class="nav-icon" alt="Dashboard">
                    <span class="ms-2" v-if="!isCollapsed">Dashboard</span>
                </router-link>
            </li>
            <!-- <li class="nav-item category-title my-3 mx-3 fw-bold">
                <span>Menu Utama</span>
            </li> -->
            <li class="nav-item "></li>
            <li class="nav-item">
                <router-link to="/perangkat" class="nav-link">
                    <img src="@/assets/Property 1=perangkat.png" class="nav-icon" alt="Perangkat">
                    <span class="ms-2" v-if="!isCollapsed">Perangkat</span>
                </router-link>
            </li>
            <li class="separator"></li>
            <li class="nav-item">
                <router-link to="/perangkat" class="nav-link">
                    <img src="@/assets/Property 1=media.png" class="nav-icon" alt="Perangkat">
                    <span class="ms-2" v-if="!isCollapsed">Media</span>
                </router-link>
            </li>
            <li class="separator"></li>
            <li class="nav-item">
                <router-link to="/perangkat" class="nav-link">
                    <img src="@/assets/Property 1=tampilan.png" class="nav-icon" alt="Perangkat">
                    <span class="ms-2" v-if="!isCollapsed">Tampilan</span>
                </router-link>
            </li>
            <!-- <li class="nav-item category-title my-3 mx-3 fw-bold">
                <span>Manajemen Pengguna</span>
            </li> -->
            <li class="nav-item "></li>
            <li class="nav-item">
                <router-link to="/perangkat" class="nav-link">
                    <img src="@/assets/Property 1=superuser.png" class="nav-icon" alt="Perangkat">
                    <span class="ms-2" v-if="!isCollapsed">Hak Akses</span>
                </router-link>
            </li>
            <li class="separator"></li>
            <li class="nav-item">
                <router-link to="/perangkat" class="nav-link">
                    <img src="@/assets/Property 1=users.png" class="nav-icon" alt="Perangkat">
                    <span class="ms-2" v-if="!isCollapsed">Pengguna</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'UserSidebar',
    props: {
        isCollapsed: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
/* Base styles for sidebar */
.sidebar {
    transition: width 0.3s;
    width: 250px;
    background-color: #f8f9fa;
    height: 100vh;
}

.collapsed {
    width: 100px;
    height: 100vh;
}

.logo {
    width: 45px;
    transition: transform 0.3s;
}

.brand-container {
    display: flex;
    align-items: center;
}

.brand-name {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    transition: opacity 0.3s;
}

.nav {
    height: 100%;
    padding: 0;
    list-style: none;
}

.nav-link {
    display: flex;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    color: #333;
    border-radius: 5px;
    /* Rounded corners */
    transition: background-color 0.3s, border-radius 0.3s;
}

/* Hover effect for nav-link */
.nav-link:hover {
    background-color: #004EA1;
    /* Background color on hover */
    color: #fff;
    /* Text color on hover */
    border-radius: 8px;
    /* Increase border radius on hover */
}

.nav-link:hover .nav-icon {
    filter: brightness(0) invert(1);
    /* Inverts colors to make the icon white */
}

.nav-icon {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    transition: transform 0.3s;
}

.nav-item {
    position: relative;
    margin-right: 10px;
}

/* Apply transformations when the sidebar is collapsed */
.sidebar.collapsed .logo,
.sidebar.collapsed .nav-icon {
    transform: translateX(20px);
    /* Adjust the value as needed */
}

.sidebar.collapsed .brand-name {
    opacity: 0;
    /* Hide the brand name when collapsed */
}
</style>
