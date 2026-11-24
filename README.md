# Ruang Cek Dongeng

Website pendamping untuk e-book/audiobook *Dongeng Digital* kelas III SD. Website ini dipakai setelah siswa mendengarkan audio di Canva untuk mengisi tiga hubungan **sebab → akibat** pada setiap dongeng.

## Yang dilakukan website

- Menyediakan latihan kosong untuk 4 dongeng: Legenda Gunung Tampomas, Keong Mas, Lutung Kasarung, dan Malin Kundang.
- Membolehkan jawaban siswa dengan kalimat yang berbeda-beda.
- Memeriksa **kelengkapan** jawaban: ada sebab, akibat, dan bukti dari audio.
- Mengenali beberapa peristiwa inti sebagai petunjuk tambahan, tanpa memberi label `Salah` hanya karena kata-kata siswa berbeda.
- Menyimpan jawaban pada perangkat/browser yang sama menggunakan penyimpanan lokal.

## Prinsip pemeriksaannya

Website ini tidak memakai satu kunci jawaban tunggal untuk esai. Jawaban dianggap layak jika siswa dapat:

1. menyebutkan peristiwa atau tindakan yang terjadi lebih dahulu (sebab);
2. menjelaskan peristiwa yang muncul setelahnya (akibat);
3. menyebutkan bukti dari audio; dan
4. menghubungkan sebab dengan akibat secara masuk akal.

Jika pemeriksa tidak mengenali kata siswa, tampilannya akan mengatakan **"bukan berarti salah"** dan meminta siswa menguji jawabannya lagi menggunakan audio. Ini disengaja agar siswa tidak dirugikan karena memakai sinonim atau susunan kalimat yang berbeda.

## Cara membuka

Buka `index.html` di peramban ponsel/laptop. Website ini tidak membutuhkan internet **untuk formulir dan pemeriksaannya**. Audio tetap diputar dari e-book Canva.

Untuk pengumpulan melalui URL publik, unggah seluruh folder ini ke GitHub Pages atau Netlify Drop.

## Audio

Saat ini halaman hanya menampilkan pengingat agar siswa memutar audio dari Canva. Tidak ada video/audio yang disalin ke website.

Sumber audio rujukan pembuat:

1. Legenda Gunung Tampomas — https://youtu.be/jLrSJhhRMns?si=FBqZL_1nJK7_3O5m
2. Keong Mas — https://youtu.be/KjizbU1aQ6w?feature=shared
3. Lutung Kasarung — https://youtu.be/0uyud9lFlvc?feature=shared
4. Malin Kundang — https://youtu.be/dvfiAdgfkJc?feature=shared

## Mengubah kata kunci atau petunjuk

Buka `assets/app.js`, lalu cari data cerita (`const stories`). Pada setiap cerita tersedia:

- `prompts`: judul bagian, instruksi singkat, dan petunjuk yang dilihat siswa.
- `pairs`: kelompok kata yang mewakili beberapa pasangan sebab–akibat. Tambahkan sinonim di dalam daftar ini jika diperlukan.

Penting: kata kunci hanya memberi petunjuk tambahan; kata kunci tidak mengubah jawaban siswa menjadi "salah".
