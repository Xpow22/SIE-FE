<template>
    <div class="container">
        <!-- Wrapped Background and Table -->
        <div class="highlight-dashboard mt-3">
            <div class="ms-3">
                <h5 class="fw-bold text-white">DASHBOARD EKSEKUTIF</h5>
                <div class="text-white fw-semibold">
                    Lihat data list status perangkat aktif dan non-aktif perangkat anda pada tabel dibawah ini
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between my-3">
            <button class="btn-infografis me-2 p-2" @click="handlePerangkatClick">
                Tambah Konten
                <img src="@/assets/Iconplus.png" class="plus-icon" alt="Plus Icon" />
            </button>
            <div class="form-group has-search w-75 flex-grow rounded-5 d-flex">
                <input type="text" class="form-control rounded-4" v-model="searchQuery" placeholder="Cari" />
                <img src="@/assets/search-Bold.png" class="search-icon" alt="Search Icon" />
            </div>
            <button class="btn-filter ms-2 p-2" @click="handleTampilanClick">
                Filter
                <img src="@/assets/Icon-filter.png" class="filter-icon" alt="Filter Icon" />
            </button>
        </div>
        <table class="table table-centered my-3">
            <thead class="table-secondary">
                <tr>
                    <th>KONTEN</th>
                    <th>JABATAN</th>
                    <th>TANGGAL BUAT</th>
                    <th>TANGGAL EDIT</th>
                    <th>AKSI</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in paginatedDashboard" :key="index">
                    <td class="text-center">{{ item.name }}</td>
                    <td class="text-center">{{ item.type }}</td>
                    <td class="text-center">{{ item.createdDate }}</td>
                    <td class="text-center">{{ item.updatedDate }}</td>
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
            <!-- Pagination Container Aligned Right -->
            <tfoot>
                <tr>
                    <td colspan="5">
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
            Dashboard: [
                { id: 1, name: 'Mentri', type: 'Mentri', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 2, name: 'Wakil Mentri', type: 'Mentri', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 3, name: 'Komponen A', type: 'Eselon I', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 4, name: 'Komponen A', type: 'Eselon II', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 5, name: 'Komponen B', type: 'Eselon III', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 6, name: 'Perangkat-1', type: 'TV', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 7, name: 'Perangkat-1', type: 'TV', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 8, name: 'Perangkat-1', type: 'TV', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 9, name: 'Perangkat-1', type: 'TV', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
                { id: 10, name: 'Perangkat-1', type: 'TV', createdDate: '2024-01-01', updatedDate: '2024-01-10', status: true },
            ],
            currentPage: 1,
            itemsPerPage: 5,
            searchQuery: ''
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredDashboard.length / this.itemsPerPage);
        },
        paginatedDashboard() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredDashboard.slice(start, end);
        },
        filteredDashboard() {
            const query = this.searchQuery.toLowerCase();
            return this.Dashboard.filter(dashboard =>
                dashboard.name.toLowerCase().includes(query) ||
                dashboard.type.toLowerCase().includes(query) ||
                dashboard.createdDate.toLowerCase().includes(query) ||
                dashboard.updatedDate.toLowerCase().includes(query)
            );
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
            console.log("Tambah Konten button clicked");
        },
        handleTampilanClick() {
            console.log("Filter button clicked");
        },
        handleEdit(id) {
            console.log("Edit dashboard with id:", id);
        },
        handleDelete(id) {
            console.log("Delete dashboard with id:", id);
        },
        handleInfo(id) {
            console.log("Delete dashboard with id:", id);
        }
    }
};
</script>


<style scoped>
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
    width: 20px;
    height: 20px;
}

.filter-icon {
    margin-left: 10px;
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

.highlight-dashboard {
    background-image: url('@/assets/highlight.png');
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding: 10px;
    display: block;
    overflow: hidden;
}
</style>
