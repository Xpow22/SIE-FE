<template>
  <DashboardLayout>
    <DashboardContent />
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/Admin/dashboard/DashboardLayout.vue';
import DashboardContent from '@/components/Admin/dashboard/DashboardContent.vue';

export default {
  components: {
    DashboardLayout,
    DashboardContent
  }
};
</script>
