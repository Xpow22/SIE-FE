<template>
  <nav class="navbar navbar-expand-lg navbar-light px-5">
    <div class="container-fluid d-flex justify-content-evenly">
      <div class="navbar-brand ps-5">
        <img src="@/assets/logo-kemendagri.png" alt="Logo" height="80" class="me-2" />
        <div>
          <strong>KEMENTERIAN DALAM NEGERI</strong>
          <br />
          <strong>REPUBLIK INDONESIA</strong>
        </div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse pe-5" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-3">
            <router-link to="/faq" class="nav-link cursor-pointer">FAQ</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="/about" class="nav-link cursor-pointer">Tentang</router-link>
          </li>
          <li class="nav-item mx-3">
            <!-- Button to trigger modal -->
            <button class="nav-link masuk cursor-pointer" @click.prevent="emitShowLoginModal">Masuk</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    emitShowLoginModal() {
      console.log('Masuk button clicked - emitting show-login-modal event');
      this.$emit('show-login-modal');
    },
  },
};
</script>

<style scoped>
.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand img {
  margin-right: 15px;
}

.nav-link {
  color: #333;
  border-radius: 20px;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.masuk:hover {
  background-color: #01c45b;
  color: white;
  width: 90px;
  text-align: center;
  border-radius: 20px;
}

.masuk {
  background-color: #01c45b;
  color: white;
  width: 90px;
  text-align: center;
  border-radius: 20px;
}
</style>
