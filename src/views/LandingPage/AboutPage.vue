<template>
  <div class="about-page">
    <UserNavbar />
    <div class="container my-5 flex-grow-1">
      <h1 class="about-custom mb-4 fw-bolder">Tentang Sistem Informasi Eksekutif (SIE)</h1>
      <div class="container-fluid bg-white rounded-5 d-flex">
        <!-- Sidebar -->
        <div :class="['question flex-row', { 'sidebar-collapsed': isSidebarCollapsed }]">
          <ul class="nav ">
            <li class="nav-item flex-column" v-for="(item, index) in menuItems" :key="index">
              <a href="#" class="nav-link" :class="{ active: selectedIndex === index }"
                @click.prevent="selectMenu(index)">
                {{ item.title }}
              </a>
            </li>
          </ul>
          <button @click="toggleSidebar" class="btn toggle-btn">
            <img src="@/assets/chevron-circle-left-Filled.png" alt="Toggle Icon" class="toggle-icon"
              :class="{ 'rotate': isSidebarCollapsed }" />
          </button>
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
import UserNavbar from '@/components/UserNavbar.vue'
import UserFooter from '@/components/UserFooter.vue'

export default {
  name: 'AboutUs',
  components: {
    UserNavbar,
    UserFooter
  },
  data() {
    return {
      menuItems: [
        { title: 'Apa itu SIE?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Quisque ac libero aliquet, luctus quam eget, lacinia nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi nec velit feugiat, fermentum lectus eu, facilisis odio. Vivamus at fermentum lectus. Duis tristique, est vel vulputate dictum, nisl erat egestas magna, nec vehicula sapien dolor in nisi. Integer a ex nec lorem vestibulum suscipit. Etiam vel dapibus nisl. Nam sit amet bibendum tortor. Nulla et ante id orci convallis vehicula. Curabitur fermentum lorem at turpis auctor, at accumsan elit consequat. Vestibulum ut semper eros. Pellentesque a sapien a enim porttitor fringilla. Sed ut lacus eu mi lacinia lacinia. Suspendisse potenti. Vivamus accumsan nulla ac vehicula aliquam. Cras tincidunt tincidunt quam, sed bibendum dolor consectetur vel. Vivamus sit amet nibh sed nisi condimentum dapibus. Nunc facilisis dui a felis fermentum tristique. Nullam nec dignissim risus. Phasellus fermentum odio eu feugiat pretium. Ut vestibulum lorem at urna fermentum vehicula. Donec a suscipit magna. Vivamus dapibus urna sit amet purus eleifend, a consequat lorem pulvinar. Quisque vel velit sit amet ligula finibus hendrerit. Cras consectetur tincidunt ex, nec auctor ex efficitur at. Nam posuere, metus sit amet lacinia viverra, lacus risus egestas nisl, ac convallis nisi nulla sed velit. Mauris et convallis ex, at efficitur est. Integer vel sapien a libero gravida aliquet ac id nisl.' },
        { title: 'Logo SIE', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'System', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Sumber Data', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      ],
      selectedIndex: 0,
      isSidebarCollapsed: false
    }
  },
  computed: {
    selectedContent() {
      return this.menuItems[this.selectedIndex].content
    }
  },
  methods: {
    selectMenu(index) {
      this.selectedIndex = index
    },
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    }
  }
}
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
}

.container-fluid {
  display: flex;
  height: 50vh;
}

.question {
  padding: 20px;
  width: 250px;
  background-color: #fff;
  border-right: 1px solid;
  position: relative;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  border-radius: 20px 0 0 20px;
}

.sidebar-collapsed {
  width: 150px;
}

.toggle-btn {
  align-self: flex-start;
  border: none;
  background: transparent;
}

.toggle-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.rotate {
  transform: rotate(180deg);
}

.nav-link {
  color: black;
}

.nav-link.active {
  background-color: #0260CE;
  color: white;
}

.content {
  padding: 40px;
  overflow-y: auto;
  width: 50vh;
}
</style>
