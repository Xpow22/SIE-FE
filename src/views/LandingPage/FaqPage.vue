<template>
    <div class="faq-page d-flex flex-column min-vh-100">
        <!-- UserNavbar -->
        <UserNavbar />
        <div class="container flex-grow-1">
            <h1 class="faq-custom my-3 fw-bolder">FAQ | Frequently Asked Questions</h1>
            <div class="accordion" id="faqAccordion">
                <div v-for="(category, catIndex) in faqCategories" :key="'cat-' + catIndex">
                    <!-- <h2>{{ category.title }}</h2> -->
                    <div v-for="(item, index) in category.items" :key="'item-' + index" class="accordion-item mb-2">
                        <h3 class="accordion-header" :id="'heading' + catIndex + '-' + index">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#collapse' + catIndex + '-' + index" aria-expanded="false"
                                :aria-controls="'collapse' + catIndex + '-' + index">
                                {{ item.question }}
                            </button>
                        </h3>
                        <div :id="'collapse' + catIndex + '-' + index" class="accordion-collapse collapse"
                            :aria-labelledby="'heading' + catIndex + '-' + index" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                {{ item.answer }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- UserFooter -->
        <UserFooter />
    </div>
</template>


<script>
import UserNavbar from "@/components/UserNavbar.vue";
import UserFooter from "@/components/UserFooter.vue";

export default {
    name: "FAQPage",
    components: {
        UserNavbar,
        UserFooter,
    },
    data() {
        return {
            faqCategories: [
                {
                    title: "Pertanyaan Seputar SIE",
                    items: [
                        {
                            question: "Apa itu Sistem Informasi Eksekutif (SIE)?",
                            answer: "Sistem Informasi Eksekutif (SIE) adalah sistem informasi yang dirancang khusus untuk memberikan informasi yang relevan dan akurat kepada para eksekutif dalam proses pengambilan keputusan. SIE mengumpulkan, memproses, dan menganalisis data dari berbagai sumber untuk memberikan wawasan yang berguna bagi pengambilan keputusan strategis."
                        },
                        {
                            question: "Apa saja manfaat menggunakan SIE?",
                            answer:
                                "Menggunakan SIE dalam organisasi dapat memberikan berbagai manfaat, termasuk peningkatan efisiensi operasional, pengurangan biaya, peningkatan kolaborasi antara departemen, dan dukungan yang lebih baik dalam perencanaan strategis. SIE juga membantu eksekutif mendapatkan pandangan menyeluruh tentang kinerja organisasi dan mengidentifikasi peluang serta tantangan.",
                        },
                        {
                            question: "Bagaimana cara SIE mengumpulkan dan menganalisis data?",
                            answer:
                                "SIE mengumpulkan data dari berbagai sumber internal dan eksternal seperti database, sistem ERP, dan laporan pasar. Data yang terkumpul kemudian diolah menggunakan alat analitik canggih untuk menghasilkan laporan dan visualisasi yang dapat membantu eksekutif memahami tren, kinerja, dan potensi area perbaikan.",
                        },
                    ]
                },
                {
                    title: "Pertanyaan Seputar SIE",
                    items: [
                        {
                            question: "Apa itu Sistem Informasi Eksekutif (SIE)?",
                            answer: "Sistem Informasi Eksekutif (SIE) adalah sistem informasi yang dirancang khusus untuk memberikan informasi yang relevan dan akurat kepada para eksekutif dalam proses pengambilan keputusan. SIE mengumpulkan, memproses, dan menganalisis data dari berbagai sumber untuk memberikan wawasan yang berguna bagi pengambilan keputusan strategis."
                        },
                        {
                            question: "Apa saja manfaat menggunakan SIE?",
                            answer:
                                "Menggunakan SIE dalam organisasi dapat memberikan berbagai manfaat, termasuk peningkatan efisiensi operasional, pengurangan biaya, peningkatan kolaborasi antara departemen, dan dukungan yang lebih baik dalam perencanaan strategis. SIE juga membantu eksekutif mendapatkan pandangan menyeluruh tentang kinerja organisasi dan mengidentifikasi peluang serta tantangan.",
                        },
                        {
                            question: "Bagaimana cara SIE mengumpulkan dan menganalisis data?",
                            answer:
                                "SIE mengumpulkan data dari berbagai sumber internal dan eksternal seperti database, sistem ERP, dan laporan pasar. Data yang terkumpul kemudian diolah menggunakan alat analitik canggih untuk menghasilkan laporan dan visualisasi yang dapat membantu eksekutif memahami tren, kinerja, dan potensi area perbaikan.",
                        },
                    ]
                },
                {
                    title: "Pertanyaan Seputar SIE",
                    items: [
                        {
                            question: "Apa itu Sistem Informasi Eksekutif (SIE)?",
                            answer: "Sistem Informasi Eksekutif (SIE) adalah sistem informasi yang dirancang khusus untuk memberikan informasi yang relevan dan akurat kepada para eksekutif dalam proses pengambilan keputusan. SIE mengumpulkan, memproses, dan menganalisis data dari berbagai sumber untuk memberikan wawasan yang berguna bagi pengambilan keputusan strategis."
                        },
                        {
                            question: "Apa saja manfaat menggunakan SIE?",
                            answer:
                                "Menggunakan SIE dalam organisasi dapat memberikan berbagai manfaat, termasuk peningkatan efisiensi operasional, pengurangan biaya, peningkatan kolaborasi antara departemen, dan dukungan yang lebih baik dalam perencanaan strategis. SIE juga membantu eksekutif mendapatkan pandangan menyeluruh tentang kinerja organisasi dan mengidentifikasi peluang serta tantangan.",
                        },
                        {
                            question: "Bagaimana cara SIE mengumpulkan dan menganalisis data?",
                            answer:
                                "SIE mengumpulkan data dari berbagai sumber internal dan eksternal seperti database, sistem ERP, dan laporan pasar. Data yang terkumpul kemudian diolah menggunakan alat analitik canggih untuk menghasilkan laporan dan visualisasi yang dapat membantu eksekutif memahami tren, kinerja, dan potensi area perbaikan.",
                        },
                    ]
                },
            ],
        };
    },
};
</script>

<style scoped>
.faq-page {
    min-height: 100vh;
}

.faq-custom {
    background-color: #0260CE;
    padding: 15px;
    border-radius: 20px;
    color: white;
}



.accordion-header {
    background-color: #fff;
    padding: 10px;
}

.accordion-button {
    background-color: #fff;
}


.accordion-body {
    background-color: #fff;
    color: #333;
}

.accordion-button:not(.collapsed) {
    color: black;
    background-color: #fff;
    box-shadow: inset 0 calc(-1* var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);
}

h2 {
    background-color: #003dc2;
    color: white;
    padding: 10px;
    margin-top: 10px;
}


.accordion-button:focus {
    z-index: 3;
    outline: 0;
    /* box-shadow: var(--bs-accordion-btn-focus-box-shadow); */
}
</style>
