<template>
    <nav :class="['navbar', { collapsed: isSidebarCollapsed }]"
        class="navbar bg-custom p-2 d-flex justify-content-between">
        <!-- Toggle Button Always Visible -->
        <div class="cursor-pointer" @click="toggleSidebar">
            <img :class="{ rotated: isSidebarCollapsed }" src="@/assets/chevron-circle-left-Filled.png"
                alt="Toggle Sidebar" />
        </div>

        <!-- Search bar -->
        <div class="form-group has-search shadow-lg w-75 flex-grow mx-2 rounded-5 d-lg-flex">
            <img src="@/assets/search-Bold.png" class="search-icon" alt="Search Icon" />
            <input type="text" class="form-control rounded-4" placeholder="Cari" />
        </div>

        <!-- User greeting and icon -->
        <div class="dropdown">
            <button class="btn custom-cover text-black rounded-5 shadow-lg" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="@/assets/lonceng.png" alt="User" class="mx-2 user-icon">
                Hi, Admin
                <img src="@/assets/user.png" alt="User" class="mx-2 user-icon">
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <!-- <li><a class="dropdown-item" href="#">Settings</a></li> -->
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="/" @click="logout">Logout</a></li>
            </ul>
        </div>

    </nav>
</template>


<script>
export default {
    name: "AdminNavbar",
    props: {
        isSidebarCollapsed: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        toggleSidebar() {
            this.$emit("toggle-sidebar");
        },
        logout() {
            // Implementasi logika logout
            console.log('Logging out...');
            // Redirect atau hapus data user di sini
        },
    },
};
</script>



<style scoped>
.navbar {
    transition: margin-left 0.3s, width 0.3s;
    background-color: #d1f1ff;
    width: 100%;
    z-index: 1000;
    height: 60px;
}

.collapsed {
    margin-right: 150px;
}

.cursor-pointer {
    cursor: pointer;
}

.cursor-pointer img {
    transition: transform 0.3s ease;
}

.rotated {
    transform: rotate(180deg);
}

.form-group.has-search {
    position: relative;
}

.search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    pointer-events: none;
}

.form-control {
    padding-left: 40px;
}

.user-icon,
.bell-icon {
    width: 24px;
    height: 24px;
}

.custom-cover {
    background-color: #fff;
    border: none;
}
</style>
