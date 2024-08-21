<template>
    <footer :class="['footer bg-transparent', { 'collapsed': isSidebarCollapsed }]">
        <div class="p-3 d-flex justify-content-end">
            <div class="bg-white rounded-4 p-1 text-center">
                Pusat Data dan Sistem Informasi | Kementerian Dalam Negeri
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'AdminFooter',
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

.bg-white {
    width: 50%;
}
</style>