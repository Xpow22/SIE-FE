<template>
  <div class="about-page">
    <UserNavbar />
    <div class="container flex-grow-1">
      <h1 class="about-custom my-3 fw-bolder">Tentang Sistem Informasi Eksekutif (SIE)</h1>
      <div class="container-fluid bg-white rounded-5 d-flex">
        <!-- Sidebar -->
        <div class="question flex-column">
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
              <a href="#" class="nav-link" :class="{ active: selectedIndex === index }"
                @click.prevent="selectMenu(index)">
                {{ item.title }}
              </a>
            </li>
          </ul>
          <div @click="toggleSidebar" class="btn toggle-btn">
            <img src="@/assets/chevron-circle-right-Filled.png" alt="Toggle Icon" class="toggle-icon"
              :class="{ 'rotate': isSidebarCollapsed }" />
          </div>
        </div>
        <!-- Content -->
        <div class="content flex-grow-1">
          <p>{{ selectedContent }}</p>
        </div>
      </div>
    </div>
    <UserFooter />
  </div>
</template>

<script>
import UserNavbar from '@/components/UserNavbar.vue';
import UserFooter from '@/components/UserFooter.vue';

export default {
  name: 'AboutUs',
  components: {
    UserNavbar,
    UserFooter
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Apa itu SIE?',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.'
        },
        { title: 'Logo SIE', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        {
          title: 'System',
          content:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'Sumber Data',
          content:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ],
      selectedIndex: 0,
      isSidebarCollapsed: false
    };
  },
  computed: {
    selectedContent() {
      return this.menuItems[this.selectedIndex].content;
    }
  },
  methods: {
    selectMenu(index) {
      this.selectedIndex = index;
    },
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }
};
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about-custom {
  background-color: #0260ce;
  padding: 15px;
  border-radius: 20px;
  color: white;
}

.container-fluid {
  display: flex;
  height: 55vh;
}

.question {
  padding: 20px;
  width: 280px;
  background-color: #fff;
  border-right: 1px solid;
  display: flex;
  flex-direction: column;
  border-radius: 20px 0 0 20px;
  position: relative;
}

.nav-link {
  color: black;
}

.nav-link.active {
  background-color: #0260ce;
  color: white;
  width: 200px;
}

.content {
  padding: 40px;
  overflow-y: auto;
  width: 50vh;
}

.toggle-btn {
  position: absolute;
  right: -5px;
  top: 20px;
  border: none;
  background: transparent;
}

.toggle-icon {
  width: 24px;
  height: 24px;
}
</style>
