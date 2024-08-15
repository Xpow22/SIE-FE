<template>
  <div class="about-page">
    <UserNavbar />
    <div class="container flex-grow-1">
      <h1 class="about-custom my-3 fw-bolder">Tentang Sistem Informasi Eksekutif (SIE)</h1>
      <div class="container-fluid bg-white rounded-5 d-flex">
        <!-- Sidebar -->
        <div class="question flex-column">
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(item, index) in menuItems" :key="index"
              :class="{ active: selectedIndex === index }" @click.prevent="selectMenu(index)">
              <a href="#" class="nav-link">
                {{ item.title }}
              </a>
              <!-- Move the icon to the selected nav-item -->
              <img v-if="selectedIndex === index" src="@/assets/chevron-circle-right-Filled.png" alt="Selected Icon"
                class="selected-icon" />
            </li>
          </ul>
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
    UserFooter,
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Apa itu SIE?',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.',
        },
        { title: 'Logo SIE', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        {
          title: 'System',
          content:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          title: 'Sumber Data',
          content:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
      selectedIndex: 0,
    };
  },
  computed: {
    selectedContent() {
      return this.menuItems[this.selectedIndex].content;
    },
  },
  methods: {
    selectMenu(index) {
      this.selectedIndex = index;
    },
  },
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
  background-color: #0260CE;
  padding: 20px;
  border-radius: 20px;
  color: white;
  font-size: x-large;
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

.nav-item {
  position: relative;
}

.nav-link {
  color: black;
  padding-left: 30px;
}

/* .nav-item.active .nav-link {
  background-color: #0260ce;
  color: white;
  width: 200px;
} */

.selected-icon {
  /* position: absolute;
  left: 5px;
  top: 50%; */
  transform: translateY(-50%);
  position: absolute;
  right: -5px;
  top: 20px;
  border: none;
  width: 20px;
  height: 20px;
}

.content {
  padding: 40px;
  overflow-y: auto;
  width: 50vh;
}
</style>
