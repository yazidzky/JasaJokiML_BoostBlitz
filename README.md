# JasaJokiML_BoostBlitz

## 📌 Pengertian dan Tujuan Kode

Proyek ini adalah antarmuka interaktif berbasis JavaScript dan CSS untuk layanan **Joki Rank Mobile Legends**. Tujuannya adalah menyediakan tampilan yang menarik dan dinamis, lengkap dengan tab interaktif, pencarian, dan sistem perhitungan jumlah order (increment/decrement), serta navigasi menu.

---

## 🧠 Penjelasan Kode Tiap Baris

### 📄 File: `style.css`

```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: #fff;
}
```
- Mengatur seluruh tampilan halaman dengan font Arial, latar belakang hitam, dan teks putih (dark mode).

```css
.active-tab {
    background-color: #00f;
    color: #fff;
}

.active-menu {
    color: #00f;
}
```
- Memberikan gaya khusus (warna biru) pada tab/menu yang sedang aktif.

---

### 📜 File: `script.js`

#### 🔁 Inisialisasi Saat Halaman Dimuat

```javascript
document.addEventListener('DOMContentLoaded', function() {
```
- Menunggu sampai seluruh HTML selesai dimuat, lalu menjalankan logika JavaScript.

#### 🧠 Variabel dan State

```javascript
let activeTab = 'Joki Rank'; // tab yang sedang aktif
let activeMenu = 'Home';     // menu utama yang sedang aktif
let searchQuery = '';        // isi pencarian
let isSearchOpen = false;    // status panel search
let isMenuOpen = false;      // status panel menu
```

```javascript
const counts = {
    'Mythic Rank Boost': 1,
    'Epic Rank Boost': 2,
    'Legend Rank Boost': 3,
    'Grandmaster Rank Boost': 4
};
```
- Menyimpan jumlah masing-masing jenis joki rank yang dipilih oleh user.

#### 🕹️ Fungsi Interaktif

- **Tab & Menu Control**
```javascript
handleTabClick(tab), handleMenuClick(menu)
```
- Mengubah tab/menu yang aktif dan me-render ulang konten.

- **Counter (Tambah/Kurang)**
```javascript
handleIncrement(title), handleDecrement(title)
```
- Menambah atau mengurangi jumlah pesanan joki sesuai rank.

- **Search Toggle & Logic**
```javascript
handleSearchToggle(), handleSearchChange(e), handleSearchSubmit()
```
- Menampilkan form pencarian, menangkap input, dan melakukan scroll ke bagian tertentu jika ditemukan.

- **Navigasi Scroll**
```javascript
scrollToSection(sectionId)
```
- Mengarahkan pengguna ke bagian halaman tertentu dengan animasi smooth scroll.

#### 🧩 Fungsi `renderContent()`

```javascript
if (activeTab === 'Joki Rank') {
    return `...`
}
```
- Jika tab “Joki Rank” aktif, maka tampilkan konten utama seperti gambar-gambar hero, tombol tambah/kurang, dan deskripsi layanan.

#### 📱 Fungsi `renderMenuContent()`

```javascript
if (activeMenu === 'Home') { ... } else if (activeMenu === 'Promo') { ... }
```
- Menyesuaikan isi konten berdasarkan menu yang sedang dibuka.

#### 🎨 Fungsi `render()`

- Menggabungkan semua elemen UI sesuai state saat ini, dan menampilkan kembali isi halaman secara dinamis.

#### 🌐 Binding Fungsi ke `window`

```javascript
window.handleTabClick = handleTabClick; ...
```
- Agar fungsi-fungsi bisa diakses dari HTML inline (`onclick="..."`), fungsi tersebut ditetapkan ke `window`.

---

## 🧸 Analogi Sederhana

Bayangkan kamu mengelola **booth pameran joki Mobile Legends** di mall:

- **Tab** seperti **spanduk kategori**, yang bisa diklik untuk mengganti informasi.
- **Menu** seperti **brosur navigasi**, pindah ke promo atau kontak.
- **Search** adalah **mesin pencari brosur**, ketik “harga” maka kamu akan dibawa ke bagian harga.
- **Tombol + dan -** adalah seperti **kasir** yang menyesuaikan jumlah pesanan kamu.
- Dan semua perubahan (jumlah, menu, tab) langsung diperbarui di **papan digital** (fungsi `render()`).

---

## ✅ Kesimpulan

Kode ini membangun pengalaman pengguna interaktif berbasis JavaScript dan CSS sederhana. Penggunaan pendekatan event-driven dan render dinamis membuatnya ringan dan responsif, cocok untuk halaman promosi produk/jasa berbasis kategori. Fitur pencarian, counter, dan menu memastikan pengguna mudah menemukan dan menavigasi layanan yang ditawarkan.
