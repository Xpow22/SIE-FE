<template>
    <div class="container">
        <!-- Wrapped Background and Table -->
        <div class="highlight-jadwal mt-3">
            <div class="ms-3">
                <h5 class="fw-bold text-white">JADWAL TAYANG</h5>
                <div class="text-white fw-semibold">
                    Lihat data list status perangkat aktif dan non-aktif perangkat anda pada tabel dibawah ini
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between my-3">
            <button class="btn-infografis me-2 p-2">
                Tambah Konten
                <img src="@/assets/Iconplus.png" class="plus-icon" alt="Plus Icon" />
            </button>
            <div class="form-group has-search w-75 flex-grow rounded-5 d-flex">
                <input type="text" class="form-control rounded-4" placeholder="Cari" v-model="searchQuery" />
                <img src="@/assets/search-Bold.png" class="search-icon" alt="Search Icon" />
            </div>
            <button class="btn-filter ms-2 p-2">
                Filter
                <img src="@/assets/Icon-filter.png" class="filter-icon" alt="Filter Icon" />
            </button>
        </div>
        <div class="table-responsive">
            <table class="table table-centered px-3 pt-3">
                <thead class="table-secondary">
                    <tr>
                        <th scope="col">KONTEN</th>
                        <th scope="col">TANGGAL TAYANG</th>
                        <th scope="col">JAM TAYANG</th>
                        <th scope="col">DURASI</th>
                        <th scope="col">PERANGKAT</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">AKSI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedJadwal" :key="index">
                        <td class="text-center">
                            <img :src="item.image" alt="Jadwal" class="img-fluid rounded-2" style="max-height: 50px;" />
                        </td>
                        <td class="text-center">{{ item.tanggalTayang }}</td>
                        <td class="text-center">{{ item.jamTayang }}</td>
                        <td class="text-center">{{ item.durasi }}</td>
                        <td class="text-center">{{ item.perangkat }}</td>
                        <td class="text-center">{{ item.status ? 'Aktif' : 'Non-Aktif' }}</td>
                        <td class="text-center">
                            <button class="btn btn-link p-0" @click="handleDelete(item.id)" title="Delete">
                                <img src="@/assets/icon-delete.png" alt="Delete" class="icon-delete" />
                            </button>
                            <button class="btn btn-link p-0" @click="handleEdit(item.id)" title="Edit">
                                <img src="@/assets/icon-edit.png" alt="Edit" class="icon-action mx-2" />
                            </button>
                            <button class="btn btn-link p-0" @click="handleInfo(item.id)" title="Info">
                                <img src="@/assets/icon-info.png" alt="Info" class="icon-action" />
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7">
                            <div class="pagination-container mt-2">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                        <a class="page-link" href="#" @click.prevent="prevPage" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li v-for="page in totalPages" :key="page" class="page-item"
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            Jadwal: [
                { id: 1, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-21', jamTayang: '08:00', durasi: '30m', perangkat: 'TV', status: true },
                { id: 2, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-22', jamTayang: '09:00', durasi: '35m', perangkat: 'TV', status: false },
                { id: 3, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-23', jamTayang: '09:00', durasi: '40m', perangkat: 'TV', status: false },
                { id: 4, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-24', jamTayang: '09:00', durasi: '45m', perangkat: 'TV', status: false },
                { id: 5, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-25', jamTayang: '09:00', durasi: '50m', perangkat: 'TV', status: false },
                { id: 6, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-26', jamTayang: '09:00', durasi: '60m', perangkat: 'TV', status: false },
                { id: 7, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-27', jamTayang: '09:00', durasi: '65m', perangkat: 'TV', status: false },
                { id: 8, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-28', jamTayang: '09:00', durasi: '70m', perangkat: 'TV', status: false },
                { id: 9, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-29', jamTayang: '09:00', durasi: '75m', perangkat: 'TV', status: false },
                { id: 10, image: 'https://placehold.co/600x400@2x.png', tanggalTayang: '2024-08-30', jamTayang: '09:00', durasi: '80m', perangkat: 'TV', status: false },
            ],
            currentPage: 1,
            itemsPerPage: 5
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.Jadwal.length / this.itemsPerPage);
        },
        paginatedJadwal() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            const filteredJadwal = this.Jadwal.filter(item =>
                item.tanggalTayang.includes(this.searchQuery) ||
                item.jamTayang.includes(this.searchQuery) ||
                item.durasi.includes(this.searchQuery) ||
                item.perangkat.includes(this.searchQuery) ||
                item.status.toString().includes(this.searchQuery)
            );
            return filteredJadwal.slice(start, end);
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
        handleDelete(id) {
            console.log("Delete", id);
        },
        handleEdit(id) {
            console.log("Edit", id);
        },
        handleInfo(id) {
            console.log("Info", id);
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
    background-color: #fff;
    border-radius: 20px 20px 0 0;
}

.table-centered td,
.table-centered th {
    text-align: center;
}

.highlight-jadwal {
    background-image: url('@/assets/highlight.png');
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding: 10px;
    display: block;
    overflow: hidden;
}
</style>
