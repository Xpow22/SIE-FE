<template>
    <LaporanLayout>
        <LaporanContent />
    </LaporanLayout>
</template>

<script>
import LaporanContent from '@/components/Admin/Laporan/LaporanContent.vue';
import LaporanLayout from '@/components/Admin/Laporan/LaporanLayout.vue';

export default {
    components: {
        LaporanLayout,
        LaporanContent
    }
};
</script>