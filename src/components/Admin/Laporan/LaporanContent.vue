<template>
    <div class="container">
        <!-- Wrapped Background and Table -->
        <div class="highlight-laporan mt-3"></div>
        <div class="d-flex justify-content-between my-3">
            <button class="btn-infografis me-2 p-2">
                Tambah Infografis
                <img src="@/assets/Iconplus.png" class="plus-icon" alt="Plus Icon" />
            </button>
            <div class="form-group has-search w-75 flex-grow rounded-5 d-flex">
                <input type="text" class="form-control rounded-4" placeholder="Cari" />
                <img src="@/assets/search-Bold.png" class="search-icon" alt="Search Icon" />
            </div>
            <button class="btn-filter ms-2 p-2">
                Filter
                <img src="@/assets/Icon-filter.png" class="filter-icon" alt="Filter Icon" />
            </button>
        </div>
        <table class="table my-3">
            <thead>
                <tr>
                    <th>Nama Perangkat</th>
                    <th>Jenis Perangkat</th>
                    <th>MAC Address</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="device in paginatedDevices" :key="device.id">
                    <td>{{ device.name }}</td>
                    <td>{{ device.type }}</td>
                    <td>{{ device.mac }}</td>
                    <td>
                        <span :class="{ 'text-success': device.status, 'text-danger': !device.status }">
                            {{ device.status ? 'Aktif' : 'Non Aktif' }}
                        </span>
                    </td>
                </tr>
            </tbody>
            <!-- Pagination Container Aligned Right -->
            <tfoot>
                <tr>
                    <td colspan="4">
                        <div class="pagination-container mt-2">
                            <ul class="pagination justify-content-end">
                                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                    <a class="page-link" href="#" @click.prevent="prevPage" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item" v-for="page in totalPages" :key="page"
                                    :class="{ active: page === currentPage }">
                                    <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
                                </li>
                                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                    <a class="page-link" href="#" @click.prevent="nextPage" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>



<script>
export default {
    data() {
        return {
            devices: [
                { id: 1, name: 'Perangkat-1', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 2, name: 'Perangkat-2', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 3, name: 'Perangkat-3', type: 'TABLET', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 4, name: 'Perangkat-4', type: 'TV', mac: '00-B0-D0-63-C2-26', status: false },
                { id: 5, name: 'Perangkat-5', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 6, name: 'Perangkat-6', type: 'TV', mac: '00-B0-D0-63-C2-27', status: true },
                { id: 7, name: 'Perangkat-7', type: 'TV', mac: '00-B0-D0-63-C2-28', status: true },
                { id: 8, name: 'Perangkat-8', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 9, name: 'Perangkat-9', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 10, name: 'Perangkat-10', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 11, name: 'Perangkat-11', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 12, name: 'Perangkat-12', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 13, name: 'Perangkat-13', type: 'TABLET', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 14, name: 'Perangkat-14', type: 'TV', mac: '00-B0-D0-63-C2-26', status: false },
                { id: 15, name: 'Perangkat-15', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 16, name: 'Perangkat-16', type: 'TV', mac: '00-B0-D0-63-C2-27', status: true },
                { id: 17, name: 'Perangkat-17', type: 'TV', mac: '00-B0-D0-63-C2-28', status: true },
                { id: 18, name: 'Perangkat-18', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 19, name: 'Perangkat-19', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 20, name: 'Perangkat-20', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 21, name: 'Perangkat-21', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 22, name: 'Perangkat-22', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 23, name: 'Perangkat-23', type: 'TABLET', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 24, name: 'Perangkat-24', type: 'TV', mac: '00-B0-D0-63-C2-26', status: false },
                { id: 25, name: 'Perangkat-25', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 26, name: 'Perangkat-26', type: 'TV', mac: '00-B0-D0-63-C2-27', status: true },
                { id: 27, name: 'Perangkat-27', type: 'TV', mac: '00-B0-D0-63-C2-28', status: true },
                { id: 28, name: 'Perangkat-28', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 29, name: 'Perangkat-29', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 30, name: 'Perangkat-30', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 31, name: 'Perangkat-31', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 32, name: 'Perangkat-32', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 33, name: 'Perangkat-33', type: 'TABLET', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 34, name: 'Perangkat-34', type: 'TV', mac: '00-B0-D0-63-C2-26', status: false },
                { id: 35, name: 'Perangkat-35', type: 'TV', mac: '00-B0-D0-63-C2-26', status: true },
                { id: 36, name: 'Perangkat-36', type: 'TV', mac: '00-B0-D0-63-C2-27', status: true },
                { id: 37, name: 'Perangkat-37', type: 'TV', mac: '00-B0-D0-63-C2-28', status: true },
                { id: 38, name: 'Perangkat-38', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 39, name: 'Perangkat-39', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true },
                { id: 40, name: 'Perangkat-40', type: 'TABLET', mac: '00-B0-D0-63-C2-29', status: true }
            ],
            currentPage: 1,
            itemsPerPage: 5
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.devices.length / this.itemsPerPage);
        },
        paginatedDevices() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.devices.slice(start, end);
        }
    },
    methods: {
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        goToPage(page) {
            this.currentPage = page;
        },
        handlePerangkatClick() {
            console.log("Perangkat button clicked");
        },
        handleTampilanClick() {
            console.log("Tampilan button clicked");
        }
    }
};
</script>

<style>
.btn-infografis {
    background-color: #01c45b;
    color: white;
    width: 190px;
    text-align: center;
    border-radius: 20px;
    margin: 5px 0;
    font-size: 14px;
    border: none;
}

.btn-filter {
    background-color: #464646;
    color: white;
    width: 120px;
    text-align: center;
    border-radius: 20px;
    margin: 5px 0;
    font-size: 14px;
    border: none;
}

.form-group.has-search {
    position: relative;
    display: flex;
    align-items: center;
}

.form-control {
    padding-left: 40px;
}

.search-icon {
    position: absolute;
    left: 10px;
    width: 24px;
    height: 24px;
}

input.form-control {
    padding-left: 40px;
}



.table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 20px;
    overflow: hidden;
}

.highlight-laporan {
    background-image: url('/src/assets/laporan.png');
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding: 40px;
    display: block;
    overflow: hidden;
}
</style>
