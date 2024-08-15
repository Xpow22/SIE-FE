<template>
    <div :class="['sidebar bg-transparent', { 'collapsed': isCollapsed }]">
        <div class="brand-container bg-transparent py-3">
            <img src="@/assets/logo-sie.png" class="logo px-1" alt="Logo SIE">
            <div v-if="!isCollapsed" class="brand-name my-2">
                <div class="text-primary fw-semibold">Sistem Informasi Eksekutif</div>
                <span class="fw-semibold">KEMENDAGRI</span>
            </div>
            <!-- Toggle Button in Sidebar -->
            <button @click="toggleSidebar" class="btn toggle-btn ms-4">
                <img :class="{ rotated: isCollapsed }" src="@/assets/chevron-circle-left-Filled.png"
                    alt="Toggle Sidebar" />
            </button>
        </div>
        <ul class="nav flex-column ">
            <!-- Mapped Menu Items -->
            <li v-for="(item, index) in menuItems" :key="index" class="nav-item mt-3">
                <router-link :to="item.route" class="nav-link">
                    <img :src="item.icon" class="nav-icon" :alt="item.title">
                    <span class="ms-2" v-if="!isCollapsed">{{ item.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import DashboardIcon from '@/assets/Property 1=dashboard.png';
import PerangkatIcon from '@/assets/Property 1=perangkat.png';
import MediaIcon from '@/assets/Property 1=media.png';
import TampilanIcon from '@/assets/Property 1=tampilan.png';
import SuperuserIcon from '@/assets/Property 1=superuser.png';

export default {
    name: 'AdminSidebar',
    props: {
        isCollapsed: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            menuItems: [
                { title: 'Infografis', route: '/Infografis', icon: DashboardIcon },
                { title: 'Jadwal Penayangan', route: '/jadwal-penayangan', icon: PerangkatIcon },
                { title: 'Dashboard Eksekutif', route: '/dashboard-eksekutif', icon: MediaIcon },
                { title: 'Laporan', route: '/laporan', icon: TampilanIcon },
                { title: 'Pengaturan', route: '/pengaturan', icon: SuperuserIcon },
            ],
        };
    },
    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        },
    },
};
</script>

<style scoped>
/* (Include your existing styles here, no changes needed) */
</style>



<style scoped>
.sidebar {
    transition: width 0.3s;
    width: 270px;
}

.collapsed {
    width: 120px;
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
    width: 20px;
    height: 20px;
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


.sidebar.collapsed .nav-icon {
    transform: translateX(20px);
}

.sidebar.collapsed .logo {
    transform: translateX(30px);
}

.sidebar.collapsed .brand-name {
    opacity: 0;
}

.fw-semibold {
    font-size: smaller;
}
</style>
