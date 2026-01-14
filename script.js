// ========================================
// DATA PERTANYAAN
// ========================================

const questions = [
    { id: 1, text: "Merasa lelah atau kehabisan energi meskipun sudah istirahat", category: "physical" },
    { id: 2, text: "Sulit berkonsentrasi atau mudah lupa hal-hal sederhana", category: "cognitive" },
    { id: 3, text: "Merasa mudah tersinggung atau marah tanpa alasan jelas", category: "emotional" },
    { id: 4, text: "Kehilangan minat pada aktivitas yang biasanya menyenangkan", category: "behavioral" },
    { id: 5, text: "Mengalami gangguan tidur (sulit tidur atau tidur berlebihan)", category: "physical" },
    { id: 6, text: "Merasa cemas atau khawatir berlebihan tentang banyak hal", category: "emotional" },
    { id: 7, text: "Sulit membuat keputusan, bahkan untuk hal-hal kecil", category: "cognitive" },
    { id: 8, text: "Menghindari bertemu orang atau menarik diri dari lingkungan sosial", category: "behavioral" },
    { id: 9, text: "Merasa tidak berharga atau terlalu mengkritik diri sendiri", category: "emotional" },
    { id: 10, text: "Mengalami keluhan fisik seperti sakit kepala atau perut tanpa penyebab medis", category: "physical" }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let answers = {};

// ========================================
// NAVIGASI HALAMAN
// ========================================

function goToPage(pageName) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
        
        // Generate pertanyaan jika masuk ke halaman test
        if (pageName === 'test') {
            generateQuestions();
        }
    }
}

// ========================================
// GENERATE PERTANYAAN
// ========================================

function generateQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    questions.forEach((question) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        
        const questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.textContent = `${question.id}. ${question.text}`;
        
        const optionsGrid = document.createElement('div');
        optionsGrid.className = 'options-grid';
        
        const options = [
            { value: 1, label: 'Tidak Pernah' },
            { value: 2, label: 'Jarang' },
            { value: 3, label: 'Sering' },
            { value: 4, label: 'Sangat Sering' }
        ];
        
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.label;
            button.onclick = () => handleAnswer(question.id, option.value, button);
            
            // Jika sudah ada jawaban, tandai sebagai selected
            if (answers[question.id] === option.value) {
                button.classList.add('selected');
            }
            
            optionsGrid.appendChild(button);
        });
        
        questionBlock.appendChild(questionText);
        questionBlock.appendChild(optionsGrid);
        container.appendChild(questionBlock);
    });
    
    updateProgress();
}

// ========================================
// HANDLE JAWABAN
// ========================================

function handleAnswer(questionId, value, buttonElement) {
    // Simpan jawaban
    answers[questionId] = value;
    
    // Update tampilan button
    const parentGrid = buttonElement.parentElement;
    const allButtons = parentGrid.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.classList.remove('selected'));
    buttonElement.classList.add('selected');
    
    // Update progress
    updateProgress();
}

// ========================================
// UPDATE PROGRESS BAR
// ========================================

function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    const totalQuestions = questions.length;
    const percentage = (answeredCount / totalQuestions) * 100;
    
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const submitBtn = document.getElementById('submitBtn');
    
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = `${answeredCount} dari ${totalQuestions}`;
    }
    
    if (submitBtn) {
        if (answeredCount === totalQuestions) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Lihat Hasil';
        } else {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Jawab Semua Pertanyaan';
        }
    }
}

// ========================================
// KALKULASI HASIL
// ========================================

function calculateResult() {
    // Hitung total skor
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    
    let category, categoryClass, description, recommendations;
    
    // Tentukan kategori berdasarkan skor
    if (totalScore >= 10 && totalScore <= 19) {
        category = "Kondisi Stabil";
        categoryClass = "success";
        description = "Kondisi mentalmu saat ini terlihat cukup baik. Kamu tampak mampu mengelola tekanan sehari-hari dengan baik. Tetap jaga keseimbangan hidup dan lanjutkan kebiasaan positif yang sudah kamu lakukan.";
        recommendations = [
            "Pertahankan rutinitas tidur yang teratur",
            "Luangkan waktu untuk hobi atau aktivitas yang menyenangkan",
            "Jaga hubungan sosial dengan orang-orang terdekat",
            "Tetap aktif secara fisik dengan olahraga ringan"
        ];
    } else if (totalScore >= 20 && totalScore <= 29) {
        category = "Kelelahan Mental Ringan";
        categoryClass = "warning";
        description = "Kamu mungkin sedang mengalami kelelahan mental ringan. Ini adalah sinyal bahwa tubuh dan pikiranmu butuh perhatian lebih. Tidak ada yang salah dengan kondisimu—ini adalah pengalaman yang wajar ketika kita menghadapi banyak tuntutan.";
        recommendations = [
            "Ambil waktu istirahat lebih sering, bahkan hanya 10-15 menit",
            "Coba journaling untuk menuangkan pikiran dan perasaan",
            "Kurangi konsumsi media sosial sementara waktu",
            "Lakukan aktivitas sederhana seperti jalan kaki atau mendengarkan musik",
            "Bicarakan perasaanmu dengan teman atau orang terpercaya"
        ];
    } else {
        category = "Peringatan Dini";
        categoryClass = "danger";
        description = "Hasil ini menunjukkan kamu mungkin sedang mengalami tekanan mental yang cukup berat. Kondisi ini bukan sesuatu yang harus kamu hadapi sendirian. Perasaan ini valid, dan mencari bantuan adalah tanda kekuatan, bukan kelemahan.";
        recommendations = [
            "Prioritaskan istirahat dan self-care dengan serius",
            "Pertimbangkan untuk berbicara dengan konselor atau psikolog",
            "Identifikasi sumber stres utama dan cari cara menguranginya",
            "Jangan ragu meminta bantuan dari orang-orang terdekat",
            "Hindari keputusan besar saat kondisi mental sedang tidak stabil"
        ];
    }
    
    // Tampilkan hasil
    displayResult(totalScore, category, categoryClass, description, recommendations);
}

// ========================================
// TAMPILKAN HASIL
// ========================================

function displayResult(score, category, categoryClass, description, recommendations) {
    // Update skor
    document.getElementById('resultScore').textContent = score;
    
    // Update icon
    const resultIcon = document.getElementById('resultIcon');
    resultIcon.className = `result-icon ${categoryClass}`;
    
    let iconSVG;
    if (categoryClass === 'success') {
        iconSVG = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        `;
    } else {
        iconSVG = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        `;
    }
    resultIcon.innerHTML = iconSVG;
    
    // Update kategori
    const resultCategory = document.getElementById('resultCategory');
    resultCategory.className = `result-category ${categoryClass}`;
    resultCategory.innerHTML = `
        <h3>${category}</h3>
        <p>${description}</p>
    `;
    
    // Update rekomendasi
    const recommendationsList = recommendations.map(rec => `<li>${rec}</li>`).join('');
    document.getElementById('resultRecommendations').innerHTML = `
        <h3>Rekomendasi untuk Kamu:</h3>
        <ul>${recommendationsList}</ul>
    `;
    
    // Tampilkan pesan bantuan profesional jika skor tinggi
    const professionalHelp = document.getElementById('professionalHelp');
    if (score >= 30) {
        professionalHelp.style.display = 'flex';
    } else {
        professionalHelp.style.display = 'none';
    }
    
    // Pindah ke halaman hasil
    goToPage('result');
}

// ========================================
// RESET TEST
// ========================================

function resetTest() {
    // Kosongkan semua jawaban
    answers = {};
    
    // Kembali ke halaman home
    goToPage('home');
}

// ========================================
// INISIALISASI
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Pastikan halaman home aktif saat pertama kali load
    goToPage('home');
    
    console.log('Website Deteksi Dini Kesehatan Mental - Siap digunakan!');
    console.log('Data Anda tidak disimpan dan sepenuhnya anonim.');
});