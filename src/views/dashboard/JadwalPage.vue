<template>
    <JadwalLayout>
        <JadwalContent />
    </JadwalLayout>
</template>

<script>
import JadwalContent from '@/components/Admin/Jadwal/JadwalContent.vue';
import JadwalLayout from '@/components/Admin/Jadwal/JawalLayout.vue'

export default {
    components: {
        JadwalLayout,
        JadwalContent
    }
};
</script>