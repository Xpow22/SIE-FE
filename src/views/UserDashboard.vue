<template>
  <DashboardLayout>
    <UserDeviceTable />
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/Admin/dashboard/DashboardLayout.vue';
import UserDeviceTable from '@/components/Admin/dashboard/UserDeviceTable.vue';

export default {
  components: {
    DashboardLayout,
    UserDeviceTable
  }
};
</script>
