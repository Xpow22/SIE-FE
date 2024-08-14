<template>
    <div :class="['sidebar bg-transparent', { 'collapsed': isCollapsed }]">
        <div class="brand-container bg-transparent py-2">
            <img src="@/assets/logo-sie.png" class="logo px-1" alt="Logo SIE">
            <div v-if="!isCollapsed" class="brand-name my-2">
                <div class="text-primary fw-semibold">Sistem Informasi Eksekutif</div>
                <span class="fw-semibold"> KEMENDAGRI</span>
            </div>
            <!-- Toggle Button in Sidebar -->
            <button @click="toggleSidebar" class="btn toggle-btn ms-4">
                <img :class="{ rotated: isCollapsed }" src="@/assets/chevron-circle-left-Filled.png"
                    alt="Toggle Sidebar" />
            </button>
        </div>
        <ul class="nav flex-column ">
            <!-- Menu Items -->
            <li class="nav-item mt-3">
                <router-link to="/dashboard" class="nav-link">
                    <img src="@/assets/Property 1=dashboard.png" class="nav-icon" alt="Dashboard">
                    <span class="ms-2" v-if="!isCollapsed">Infografis</span>
                </router-link>
            </li>
            <li class="nav-item mt-3">
                <router-link to="/perangkat" class="nav-link">
                    <img src="@/assets/Property 1=perangkat.png" class="nav-icon" alt="Perangkat">
                    <span class="ms-2" v-if="!isCollapsed">Jadwal Penayangan</span>
                </router-link>
            </li>
            <li class="nav-item mt-3">
                <router-link to="/media" class="nav-link">
                    <img src="@/assets/Property 1=media.png" class="nav-icon" alt="Media">
                    <span class="ms-2" v-if="!isCollapsed">Dashboard Eksekutif</span>
                </router-link>
            </li>
            <li class="nav-item mt-3">
                <router-link to="/tampilan" class="nav-link">
                    <img src="@/assets/Property 1=tampilan.png" class="nav-icon" alt="Tampilan">
                    <span class="ms-2" v-if="!isCollapsed">Laporan</span>
                </router-link>
            </li>
            <li class="nav-item mt-3">
                <router-link to="/hak-akses" class="nav-link">
                    <img src="@/assets/Property 1=superuser.png" class="nav-icon" alt="Hak Akses">
                    <span class="ms-2" v-if="!isCollapsed">Pengaturan</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AdminSidebar',
    props: {
        isCollapsed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        }
    }
};
</script>

<style scoped>
.sidebar {
    transition: width 0.3s;
    width: 300px;
}

.collapsed {
    width: 150px;
}

.rotated {
    transform: rotate(180deg);
}

.logo {
    width: 45px;
    transition: transform 0.3s;
}

.brand-container {
    display: flex;
    align-items: center;
    position: relative;
}

.brand-name {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    transition: opacity 0.3s;
}

.toggle-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
}

.toggle-btn img {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
}

.nav {
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
    transition: background-color 0.3s, border-radius 0.3s;
}

.nav-link:hover {
    background-color: #004EA1;
    color: #fff;
    border-radius: 8px;
}

.nav-link:hover .nav-icon {
    filter: brightness(0) invert(1);
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

.sidebar.collapsed .logo,
.sidebar.collapsed .nav-icon {
    transform: translateX(20px);
}

.sidebar.collapsed .brand-name {
    opacity: 0;
}

.fw-semibold {
    font-size: smaller;
}
</style>
