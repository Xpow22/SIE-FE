<template>
  <footer :class="['footer bg-transparent', { 'collapsed': isSidebarCollapsed }]">
    <div class="text-center p-3">
      PUSDATIN KEMENDAGRI | 2024
    </div>
  </footer>
</template>


<script>
export default {
  name: 'UserFooter',
  props: {
    isSidebarCollapsed: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.footer {
  bottom: 0;
}
</style>
