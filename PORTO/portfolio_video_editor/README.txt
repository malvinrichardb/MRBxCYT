PORTOFOLIO VIDEO EDITOR & CONTENT CREATOR
=========================================

CARA MENJALANKAN DI VISUAL STUDIO CODE
1. Ekstrak file ZIP ini.
2. Buka Visual Studio Code.
3. Pilih File > Open Folder, lalu pilih folder "portfolio_video_editor".
4. Buka file index.html.
5. Klik kanan pada index.html dan pilih "Open with Live Server".
   Jika Live Server belum tersedia, buka Extensions (Ctrl+Shift+X), cari
   "Live Server" dan instal. Kamu juga bisa membuka index.html langsung
   melalui browser, tetapi Live Server lebih nyaman untuk pengembangan.

STRUKTUR FOLDER
portfolio_video_editor/
├── index.html
├── README.txt
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── images/

BAGIAN YANG PERLU KAMU GANTI
- Nama/logo "PORTO+" di index.html.
- Statistik di bagian hero agar sesuai dengan pengalamanmu.
- Isi bagian Tentang Saya dan tingkat skill.
- Judul serta deskripsi tiga kartu proyek.
- Tautan Instagram, TikTok, dan YouTube.
- emailkamu@example.com menjadi alamat email kamu.
- Gambar proyek: saat ini kartu proyek memakai ilustrasi gradien CSS,
  bukan foto asli. Kamu bisa menggantinya dengan gambar/thumbnail sendiri.

CARA MENGGANTI ILUSTRASI PROYEK DENGAN GAMBAR
1. Taruh gambar milikmu di assets/images/, contoh: project-1.jpg.
2. Di css/style.css, cari .project-image-one:before.
3. Ganti properti background-nya menjadi:
   background: linear-gradient(0deg, rgba(0,0,0,.25), transparent),
               url("../assets/images/project-1.jpg") center/cover;
4. Ulangi untuk .project-image-two dan .project-image-three menggunakan
   project-2.jpg dan project-3.jpg.

FITUR
- Desain responsif untuk desktop dan ponsel.
- Animasi saat scroll dan elemen visual mengambang.
- Filter kategori proyek.
- Tombol dark/light mode (preferensi disimpan di browser).
- Bahasa Indonesia/Inggris (preferensi disimpan di browser).
- Menu mobile dan tombol kembali ke atas.

CATATAN
- Tautan media sosial masih contoh; ubah menjadi akun kamu.
- Tombol email memakai mailto dan akan membuka aplikasi email.
- Font dari Google Fonts memerlukan koneksi internet.
