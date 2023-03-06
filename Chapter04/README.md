# Deployment Aplikasi

Disini kita akan melakukan :
1. Mendaftarkan diri ke github student pack
2. Menyatukan backend menjadi satu repositori
3. Menyatukan frontend menjadi satu repositori
4. Testing deployment boiler plate dari framework iteung
5. Mengatasi error dan kendala masalah umum yang terjadi pada deployment

## Github Student Pack

Student pack berguna untuk mendapatkan beberapa benefit gratis dari github. Untuk mendapatkan student pack. kita mendaftarkan diri dahulu ke alamat https://education.github.com/pack

![image](https://user-images.githubusercontent.com/11188109/223223891-b76d4099-127e-4d2a-8ff0-6bd79c85951b.png)

Disana terlihat beberapa Experiences yang bisa kita coba secara gratis atau free trial. untuk mendaftarkan diri klik Explore Student Programs. Kemudian pilih Student.

![image](https://user-images.githubusercontent.com/11188109/223224571-51a8dc42-8c7b-4a94-b2b5-9fbe07549f73.png)

Kemudian pilih email kampus ULBI, jika belum memiliki akun email ULBI, bisa meminta ke TIK di ruang Audit Lt.1. Selanjutnya adalah melengkapi keterangan mahasiswa dengan melakukan upload KTM, yang bisa diminta ke Iteung.

![image](https://user-images.githubusercontent.com/11188109/223224816-c6e45175-309b-4fd7-83b8-fb7133e5269b.png)

Proses verifikasi akan dilakukan, dan biasanya selesai 15 menit sudah ada pemberitahuan melalui email.

## Heroku Student offer

Heroku merupakan layanan cloud yang berguna untuk deployment atau pemasangan aplikasi berbasis web yang kita buat. Cara pemasangan aplikasi di Heroku cukup mudah, tinggal hubungkan saja dengan repositori github yang sudah ada.Untuk menikmati layanan heroku secara gratis hubungkan dengan akun github anda yang sudah diaktifkan student pack pada link https://www.heroku.com/github-students

![image](https://user-images.githubusercontent.com/11188109/223225509-4ad4da33-cb20-49fa-b49d-5cf1a5f18782.png)

Kemudian klik Get student offer. Gunakan email kampus anda, dan lanjutkan untuk mendaftarkan diri. Jika dibutuhkan verifikasi pembayaran dengan kartu kredit, bisa menggunakan Virtual Credit Card atau Virtual Debit Card atau Debit Card kartu dari Bank Digital yang bisa didapatkan dengan install aplikasi di handphone. Opsional sebagai pelengkap keamanan akun. Install juga aplikasi Google Authenticator https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&pli=1

![image](https://user-images.githubusercontent.com/11188109/223226670-c7afe93a-5bdc-4a74-be12-94945dbc807f.png)

## Dashboard Heroku

Setelah login, masuk ke laman https://dashboard.heroku.com/apps. Maka akan muncul list aplikasi yang sudah kita buat. Klik New dan pilih Create new app untuk melakukan deployment aplikasi baru kita.

![image](https://user-images.githubusercontent.com/11188109/223227248-d1e1019f-04ff-4f5e-942b-eb65549302ed.png)

Masukkan nama aplikasi kita, dan pilih lokasi server kita apakah amerika atau eropa. Kemudian klik Create app.

![image](https://user-images.githubusercontent.com/11188109/223227515-c25abd89-5b08-483a-bc47-432e5c4b0b28.png)

Lakukan instalasi Heroku CLI, untuk menghubungkan komputer kita dengan server heroku. Link Instalasi https://devcenter.heroku.com/articles/heroku-cli

![image](https://user-images.githubusercontent.com/11188109/223227952-1e166ee3-78db-4860-8956-6b643a3b57eb.png)

Pilih 64-bit installer

![image](https://user-images.githubusercontent.com/11188109/223228151-831c4735-be1c-413d-ad1c-3ab4583995fa.png)

Lanjutkan sampai selesai langkah instalasinya

![image](https://user-images.githubusercontent.com/11188109/223228251-84e36310-2fac-47b6-aa8d-9d3a6789f7f9.png)



Pre requisite :
1. Akun heroku yang diaktifkan dengan github student pack

Kerjakan
1. Semua fungsi(di folder module) dan type(di folder model) di pull request ke repo https://github.com/gocroot/kampus 
2. Frontend ditaruh di repo https://github.com/gocroot/app sesuaikan dengan folder topik pekerjaan
3. Mencoba deploy boiler plate https://github.com/aiteung/iteung ke heroku
