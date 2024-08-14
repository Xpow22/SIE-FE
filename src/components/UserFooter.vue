<template>
  <footer :class="['footer', { 'collapsed': isSidebarCollapsed }]">
    <div class="text-center p-3">
      PUSAT DATA KEMENDAGRI | © 2024
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
  /* width: calc(100% - 250px); */
  /* Adjust to match the sidebar width */
  /* position: fixed; */
  bottom: 0;
  /* left: 250px; */
  /* Adjust to match the sidebar width */
  /* background-color: #D1F1FF;
  transition: width 0.3s, left 0.3s; */
  /* padding: 10px; */
}

/* 
.footer.collapsed {
  width: calc(100% - 80px);
  Adjust to match the collapsed sidebar width
  left: 80px;
  Adjust to match the collapsed sidebar width
} */
</style>
