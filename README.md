# 🧠 Website Deteksi Dini Kesehatan Mental

Website deteksi dini kesehatan mental berbasis preventif untuk mahasiswa, fresh graduate, dan pekerja muda (18-35 tahun).

![Status](https://img.shields.io/badge/status-ready-success)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Deskripsi

Website ini dirancang untuk membantu pengguna mengenali tanda-tanda kelelahan mental sejak dini seperti:
- Kelelahan mental
- Stres ringan  
- Burnout

**PENTING:** Website ini **BUKAN** alat diagnosis medis dan tidak menggantikan peran profesional kesehatan mental.

---

## ✨ Fitur Utama

### 1️⃣ **Beranda**
- Penjelasan tujuan website
- 3 kartu informasi (Deteksi Dini, Preventif, Self-Care)
- Call-to-action untuk memulai tes
- Preview artikel edukasi

### 2️⃣ **Disclaimer**
- Pernyataan penting tentang batasan website
- User harus menyetujui sebelum melanjutkan
- Penekanan bahwa data tidak disimpan

### 3️⃣ **Kuesioner (10 Pertanyaan)**
- Skala Likert 1-4 (Tidak Pernah, Jarang, Sering, Sangat Sering)
- Progress bar real-time
- Aspek yang diukur:
  - Emosional (3 pertanyaan)
  - Kognitif (2 pertanyaan)
  - Perilaku (2 pertanyaan)
  - Fisik (3 pertanyaan)

### 4️⃣ **Sistem Skoring**
| Skor Total | Kategori | Keterangan |
|------------|----------|------------|
| 10-19 | ✅ Kondisi Stabil | Mental health dalam kondisi baik |
| 20-29 | ⚠️ Kelelahan Mental Ringan | Butuh perhatian & istirahat |
| 30-40 | 🚨 Peringatan Dini | Disarankan mencari bantuan profesional |

### 5️⃣ **Halaman Hasil**
- Skor total dengan visualisasi
- Kategori kondisi dengan color coding
- Penjelasan kondisi dengan bahasa humanis
- Rekomendasi aksi spesifik
- Peringatan untuk mencari bantuan profesional (jika skor tinggi)

### 6️⃣ **Artikel Edukasi**
- "Burnout Bukan Malas"
- "Capek Mental Itu Valid"
- "Overthinking Adalah Kebiasaan"

---

## 🎨 Desain UI/UX

### Warna Palette
- **Primary:** Gradient ungu-biru (#667eea → #764ba2)
- **Success:** Hijau (#10b981)
- **Warning:** Kuning (#f59e0b)
- **Danger:** Merah (#ef4444)
- **Neutral:** Abu-abu (#4a5568)

### Prinsip Desain
- ✅ Warna lembut dan menenangkan
- ✅ Typography mudah dibaca
- ✅ Responsive (mobile-friendly)
- ✅ Animasi smooth & subtle
- ✅ Fokus pada user experience

---

## 📁 Struktur Folder

```
mental-health-checker/
│
├── index.html          # File HTML utama
├── css/
│   └── style.css       # Semua styling
├── js/
│   └── script.js       # Logika & interaksi
└── README.md           # Dokumentasi ini
```

---

## 🚀 Cara Instalasi & Menjalankan

### Metode 1: Langsung di Browser (Termudah)

1. **Download semua file**
2. **Buka `index.html`** dengan browser (Chrome/Firefox/Edge)
3. Selesai! ✅

### Metode 2: Menggunakan VSCode + Live Server

1. **Install VSCode** dari https://code.visualstudio.com/

2. **Buat folder project:**
   ```bash
   mkdir mental-health-checker
   cd mental-health-checker
   ```

3. **Buka VSCode:**
   ```bash
   code .
   ```

4. **Buat struktur folder:**
   - Buat folder `css`
   - Buat folder `js`

5. **Copy file-file:**
   - Copy kode `index.html` ke file `index.html`
   - Copy kode `style.css` ke `css/style.css`
   - Copy kode `script.js` ke `js/script.js`

6. **Install Extension Live Server** di VSCode

7. **Klik kanan `index.html`** → "Open with Live Server"

8. Website akan otomatis terbuka di browser! 🎉

### Metode 3: Menggunakan Terminal/CMD

```bash
# Masuk ke folder project
cd mental-health-checker

# Windows - buka dengan browser default
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

---

## 🌐 Deploy ke GitHub Pages

### Step 1: Upload ke GitHub

```bash
# Inisialisasi Git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: Mental Health Checker"

# Rename branch ke main
git branch -M main

# Tambahkan remote repository (ganti username & repo-name)
git remote add origin https://github.com/username/mental-health-checker.git

# Push ke GitHub
git push -u origin main
```

### Step 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings**
3. Scroll ke bagian **Pages**
4. Di **Source**, pilih `main` branch
5. Folder: `/ (root)`
6. Klik **Save**

✅ Website akan live di:
```
https://belvafwn.github.io/mental-health-checker/
```

---

## 🔐 Privasi & Keamanan

- ✅ **Tidak ada database** - Data tidak disimpan di server
- ✅ **Tidak perlu login** - Bisa digunakan anonim
- ✅ **Data di memori saja** - Hilang saat browser ditutup
- ✅ **Tidak ada tracking** - Tidak menggunakan analytics
- ✅ **Fully client-side** - Semua proses di browser user

---

## 🛡️ Batasan Etika

Website ini dibangun dengan memperhatikan etika kesehatan mental:

❌ **TIDAK**
- Memberikan diagnosis medis
- Menyebut nama gangguan mental spesifik
- Menggantikan peran psikolog/psikiater
- Membuat user merasa di-judge
- Menyimpan data pribadi

✅ **YA**
- Edukasi preventif
- Bahasa humanis & netral
- Disclaimer yang jelas
- Rekomendasi mencari bantuan profesional
- Menjaga privasi pengguna

---

## 🧪 Testing Checklist

Sebelum deploy, pastikan semua berfungsi:

- [ ] Navigasi antar halaman berjalan lancar
- [ ] Disclaimer muncul sebelum tes
- [ ] Semua 10 pertanyaan tampil dengan benar
- [ ] Progress bar update sesuai jawaban
- [ ] Tombol "Lihat Hasil" hanya aktif jika semua dijawab
- [ ] Kalkulasi skor benar (10-40)
- [ ] Kategori sesuai range skor
- [ ] Rekomendasi muncul sesuai kategori
- [ ] Peringatan profesional muncul untuk skor ≥30
- [ ] Artikel edukasi dapat dibaca
- [ ] Responsive di mobile/tablet/desktop
- [ ] Tidak ada console error

---

## 🎯 Target Pengguna

- **Mahasiswa** - Stress akademik, tugas, ujian
- **Fresh Graduate** - Job hunting, transisi karir
- **Pekerja 18-35 tahun** - Work-life balance, burnout
- **Siapa saja** yang merasa capek mental tapi belum mencari bantuan

---

## 📚 Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling & animasi
- **Vanilla JavaScript** - Logika & interaksi
- **No Framework** - Ringan & cepat load
- **No Backend** - Bisa jalan di hosting statis

---

## 🔧 Customization

### Mengubah Pertanyaan

Edit array `questions` di `script.js`:

```javascript
const questions = [
    { id: 1, text: "Pertanyaan baru...", category: "emotional" },
    // tambahkan pertanyaan lain...
];
```

### Mengubah Range Skor

Edit fungsi `calculateResult()` di `script.js`:

```javascript
if (totalScore >= 10 && totalScore <= 19) {
    category = "Kondisi Stabil";
    // ...
}
```

### Menambah Artikel

Edit HTML di `index.html` bagian `articlesPage`:

```html
<article class="article-full">
    <h3>Judul Artikel Baru</h3>
    <p>Konten artikel...</p>
</article>
```

---

## 📞 Support & Kontak

Jika menemukan bug atau ingin berkontribusi:
- 🐛 [Report Issues](#)
- 💡 [Request Features](#)
- 📧 Email: nabilabelvafawnia@gmail.com

---

## 📝 License

MIT License - Bebas digunakan untuk project personal atau komersial.

---

## 🙏 Acknowledgments

Website ini dibuat dengan memperhatikan:
- Prinsip etika kesehatan mental
- Panduan WHO tentang mental health awareness
- Best practices web accessibility
- User experience design principles

---

## 🚦 Status Project

✅ **Version 1.0.0** - Fully Functional
- [x] Core features complete
- [x] Responsive design
- [x] Privacy compliant
- [x] Ethics guidelines followed

---

## 📈 Future Improvements

Ide untuk versi mendatang:
- [ ] Tambah bahasa Inggris
- [ ] Dark mode toggle
- [ ] Export hasil ke PDF
- [ ] Lebih banyak artikel edukasi
- [ ] Integrasi WhatsApp untuk berbagi
- [ ] Grafik visualisasi hasil

---

**⚠️ Disclaimer:** Website ini bersifat edukasi dan tidak menggantikan konsultasi profesional. Jika Anda mengalami masalah kesehatan mental serius, segera hubungi psikolog, psikiater, atau hotline kesehatan mental.

---

**Made by Nabila Belva Fawnia for better mental health awareness**