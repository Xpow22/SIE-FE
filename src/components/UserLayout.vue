<template>
  <div class="background">
    <UserNavbar @show-login-modal="showLoginModal" />
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
import UserNavbar from './UserNavbar.vue';
import UserFooter from './UserFooter.vue';

export default {
  components: {
    UserNavbar,
    UserFooter,
  },
  methods: {
    showLoginModal() {
      this.$emit('show-login-modal');
    },
  },
};
</script>
