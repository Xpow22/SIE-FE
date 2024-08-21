<template>
    <div class="container">
        <div class="background-container mt-3">
            <div class="ms-3">
                <h5 class="fw-bold text-white">INFOGRAFIS</h5>
                <div class="text-white fw-semibold">
                    Lihat data list status perangkat aktif dan non-aktif perangkat anda pada tabel di bawah ini
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between my-3">
            <button class="btn-infografis me-2 p-2" @click="showModalResolusi = true">
                Tambah Infografis
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

        <!-- Table Content -->
        <div class="table-responsive">
            <table class="table table-centered px-3 pt-3">
                <thead class="table-secondary">
                    <tr>
                        <th scope="col">INFOGRAFIS</th>
                        <th scope="col">TANGGAL BUAT</th>
                        <th scope="col">RASIO</th>
                        <th scope="col">AKSI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedInfographics" :key="index">
                        <td class="text-center">
                            <img :src="item.image" alt="Infografis" class="img-fluid rounded-2"
                                style="max-height: 50px;" />
                        </td>
                        <td class="text-center">{{ item.created_at }}</td>
                        <td class="text-center">{{ item.ratio }}</td>
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
                        <td colspan="4">
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

        <!-- Modal Resolusi -->
        <ModalResolusi v-if="showModalResolusi" @close="showModalResolusi = false" />
    </div>
</template>

<script>
import ModalResolusi from "@/components/Admin/infografis/Modal/ModalResolusi.vue";

export default {
    name: "InfografisContent",
    components: {
        ModalResolusi,
    },
    data() {
        return {
            searchQuery: '',
            infographics: [
                {
                    id: 1,
                    image: "https://placehold.co/600x400@2x.png",
                    created_at: "30-07-2024",
                    ratio: "16:9",
                },
                {
                    id: 2,
                    image: "https://placehold.co/800x200@2x.png",
                    created_at: "20-09-2024",
                    ratio: "9:16",
                },
                {
                    id: 3,
                    image: "https://placehold.co/600x800@2x.png",
                    created_at: "11-07-2024",
                    ratio: "16:9",
                },
                {
                    id: 4,
                    image: "https://placehold.co/500x500@2x.png",
                    created_at: "30-07-2024",
                    ratio: "9:16",
                },
                {
                    id: 5,
                    image: "https://placehold.co/1200x400@2x.png",
                    created_at: "31-08-2024",
                    ratio: "16:9",
                },
                {
                    id: 6,
                    image: "https://placehold.co/600x400@2x.png",
                    created_at: "30-07-2024",
                    ratio: "16:9",
                },
                {
                    id: 7,
                    image: "https://placehold.co/600x400@2x.png",
                    created_at: "30-07-2024",
                    ratio: "16:9",
                },
                {
                    id: 8,
                    image: "https://placehold.co/600x400@2x.png",
                    created_at: "30-07-2024",
                    ratio: "16:9",
                },
                {
                    id: 9,
                    image: "https://placehold.co/600x400@2x.png",
                    created_at: "30-07-2024",
                    ratio: "16:9",
                },
                {
                    id: 10,
                    image: "https://placehold.co/600x400@2x.png",
                    created_at: "30-07-2024",
                    ratio: "16:9",
                },
            ],
            currentPage: 1,
            itemsPerPage: 4,
            showModalResolusi: false,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.infographics.length / this.itemsPerPage);
        },
        paginatedInfographics() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            const filteredInfographics = this.infographics.filter(item =>
                item.created_at.includes(this.searchQuery) ||
                item.ratio.includes(this.searchQuery)
            );
            return filteredInfographics.slice(start, end);
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

<style scoped>
.background-container {
    background-image: url('@/assets/highlight.png');
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    padding: 10px;
    display: block;
}

.table {
    background-color: #fff;
    border-radius: 20px 20px 0 0;
}

.table-centered td,
.table-centered th {
    text-align: center;
}

.icon-action {
    width: 20px;
    height: 20px;
}

.icon-delete {
    width: 30px;
    height: 30px;
}

.btn-success {
    background-color: #28a745;
}
</style>
