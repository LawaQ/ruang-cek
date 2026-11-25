# Dongeng Digital — Dengar dan Temukan

Website pendamping e-book Canva untuk siswa kelas III SD. Anak memilih dongeng, menyimak audio/video, kemudian mengerjakan latihan sebab–akibat dengan tingkat bantuan berbeda.

## Alur dan latihan

1. **Legenda Gunung Tampomas** — sebab tersedia; siswa memilih akibat yang tepat (pilihan ganda).
2. **Keong Mas** — sebab tersedia; siswa menulis akibat dengan kalimat sendiri.
3. **Lutung Kasarung** — akibat tersedia; siswa menulis sebab dengan kalimat sendiri.
4. **Malin Kundang** — siswa memilih peristiwa lalu menulis sebab, akibat, dan bukti yang diingat dari audio.

Pemeriksa esai memberi umpan balik tentang kelengkapan, bukan menyatakan jawaban salah hanya karena kalimatnya berbeda. Jawaban disimpan secara lokal di browser/perangkat yang sama.

## Menambahkan media

File media belum disertakan. Letakkan berkas yang kamu unggah di folder `assets/media/`, lalu buka `assets/app.js` dan isi properti `media` pada data cerita. Contoh:

```js
{id: 'tampomas', ..., media: 'assets/media/tampomas.mp4', ...}
```

Format harus didukung peramban siswa. Jika menggunakan video YouTube, kontrol dan tampilan player dikendalikan oleh YouTube; pemutar kustom ini ditujukan untuk file media yang dihosting bersama situs. Pastikan kamu berhak menggunakan dan membagikan file media yang diunggah.

Kontrol pemutar khusus menyediakan play/pause, timeline, waktu, volume, dan layar penuh. Berkas media tidak diunggah dalam repositori ini.

## Menjalankan dan deploy

Buka `index.html` atau jalankan server statis sederhana dari folder ini, misalnya:

```bash
python3 -m http.server 8000
```

Publikasi: GitHub Pages menggunakan branch `main` dan root folder.

## Catatan teknis

- Tampilan responsif untuk ponsel dan desktop.
- Semua interaksi utama berjalan tanpa layanan backend.
- Google Fonts dimuat daring; jika offline, font fallback akan dipakai.
- Data jawaban hanya tersimpan pada browser/perangkat tersebut, bukan terkirim ke guru.
- Kunci pilihan ganda Cerita 1 berada di `assets/app.js`; esai pada Cerita 2–4 tetap diperiksa dengan panduan dan audio.
- Materi soal disusun dari isi dongeng dan ringkasan yang tersedia. Sebelum digunakan siswa, tinjau kembali kecocokannya dengan versi audio/video yang akan dipasang.

Repositori: https://github.com/LawaQ/ruang-cek
Website: https://lawaq.github.io/ruang-cek/
```