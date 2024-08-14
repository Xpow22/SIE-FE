<template>
  <div class="background">
    <Navbar @show-login-modal="showLoginModal" />
    <div class="d-flex px-5" id="wrapper">
      <div id="page-content-wrapper">
        <main class="container-fluid px-5">
          <slot />
        </main>
      </div>
    </div>
    <UserFooter />
  </div>
</template>

<script>
import Navbar from './UserNavbar.vue';
import UserFooter from './UserFooter.vue';

export default {
  components: {
    Navbar,
    UserFooter,
  },
  methods: {
    showLoginModal() {
      this.$emit('show-login-modal');
    },
  },
};
</script>
