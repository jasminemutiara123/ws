# HTTP Header Barrier

## Syarat Umum

* Memiliki akun requestcatcher.com atau webhook.site atau pipedream.com
* Coba melakukan method post dengan Postman dengan header token
  ![image](https://user-images.githubusercontent.com/11188109/220023489-ebb8d666-f099-4384-b2d4-0d165f402ab6.png)
* Lihat hasilnya di web, terlihat ada token disana
  ![image](https://user-images.githubusercontent.com/11188109/220023734-cf442863-7ec4-40eb-abfc-4058f0ca8380.png)
* Setting Repo untuk Github Pages
  ![image](https://user-images.githubusercontent.com/11188109/220018093-6ac9f3ea-af03-47b9-a038-76a2f5a295a2.png)
  
## Setting Endpoint di Pipedream

Pipedream merupakan endpoint testing API, untuk membaca header dan body(raw message) dari http client yang kita request. Http client request bisa dari postman maupun kode javascript kita. Pada langkah ini kita akan melakukan:
1. Membuat Akun pipedream
2. Testing Endpoint menggunakan Postman
3. Membangun HTML Form dengan Tailwind CSS Component
4. Membuat file js untuk mengirimkan data form ke endpoint pipedream
5. Melihat hasilnya di dashboard pipedream

Disini kita akan melakukan request dengan menggunakan javascript fetch.

### Membuat Akun

* Kunjungi pipedream.com , terus klik Sign Up Free! 
  ![image](https://user-images.githubusercontent.com/11188109/220200037-5f556ae6-3bd6-4aa3-9869-00c1d119bb51.png)
  
* Klik sign up with github
  ![image](https://user-images.githubusercontent.com/11188109/220200140-783f1a04-e00b-425b-a5b2-b43f546b022c.png)
  
* Authorize
  ![image](https://user-images.githubusercontent.com/11188109/220200197-98f46bc2-2217-4697-9e54-9034e864d4cd.png)
  
* Pilih Nama Workspace yang tersedia, ditandai dengan tanda centang hijau, kemudian klik Continue
  ![image](https://user-images.githubusercontent.com/11188109/220200320-707ff8e0-cc32-4196-ad3a-8cfa083b2d11.png)
* Opsional membagikan link workspace seperti ini, https://pipedream.com/@bukupedia/invite?token=4adefabe60301ac06b000ee620533e73 . Lanjutkan dengan menekan tombol Skip.
  ![image](https://user-images.githubusercontent.com/11188109/220201017-bf5ac24b-78fc-4195-a507-8a7f4b1a1d09.png)
* Klik New HTTP / Webhook REquest
  ![image](https://user-images.githubusercontent.com/11188109/220201239-3a98da54-3349-4cc6-be73-cce215681da1.png)
* Pilih Event Data : Raw REquest, HTTP Response : 200 OK . Kemudian klik Save and Continue
  ![image](https://user-images.githubusercontent.com/11188109/220201352-08e86d50-0b57-4bb9-98f5-b6ff3d09d420.png)
* Akan keluar unique URL untuk endpoint : https://eol0j1lmdtbpzp.m.pipedream.net . Kemudian kita coba dengan postman dahulu
![image](https://user-images.githubusercontent.com/11188109/220201459-1d403095-0585-40d3-b478-e33d0d510ce2.png)

### Melakukan Testing Endpoint

Disini kita akan membuka Postman untuk melakukan testing endpoint dahulu, dengan contoh :
* Method POST Headers kita isi dengan Key : Login , Value : Bebas. Pada bagian body isi dengan data json .Kemudian klik Send
![image](https://user-images.githubusercontent.com/11188109/220201693-d5189d91-116b-42cf-9632-b553822a0327.png)
![image](https://user-images.githubusercontent.com/11188109/220202209-9bc7b8d0-2483-423e-8b80-da10be5bba50.png)
* Dashboard Pipedream akan muncul 1 New Event, kita buka event tersebut.
![image](https://user-images.githubusercontent.com/11188109/220201839-cf090239-88eb-4506-8d4c-a0e57b68b4f6.png)
![image](https://user-images.githubusercontent.com/11188109/220201921-6e223896-90cf-4442-b242-7eba8b433aab.png)
* Disana akan terlihat pada bagian headers ada Login yang kita masukkan dan pada bagian body ada json yang kita masukkan ke postman. Artinya endpoint dan http request bekerja dengan baik untuk menangkap header dan body yang dikirimkan.
  ![image](https://user-images.githubusercontent.com/11188109/220202117-9ab13390-2fd6-4be2-9020-a2bba9c8f7e4.png)
* Simpan kode javascript yang dibuat oleh postman dengan menekan tanda </> dibagian pojok kanan atas, kemudian pilih javascipt - Fetch
![image](https://user-images.githubusercontent.com/11188109/220202673-ddf58908-ef14-44ad-8e32-d39d6b80be8e.png)
```javascript
var myHeaders = new Headers();
myHeaders.append("Login", "rollygantengsekali");
myHeaders.append("Content-Type", "text/plain");

var raw = "{\r\n    \"uuid\" : \"sadsadsad\",\r\n    \"phonenumber\" : \"6281312000300\",\r\n    \"delay\" :1\r\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eol0j1lmdtbpzp.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```


### Membangun Aplikasi Pendaftaran










  



## Pre Test

* Buatlah form dan button yang berisi sign up biodata(minimal 5 field) yang melakukan POST ke requestcatcher.com atau webhook.site atau pipedream.com ketika klik button
* Ingat selalu inspect console untuk melihat error javascript, jika terjadi error CORS Police, maka ganti ke pipedream.com
* CSS menggunakan tailwind componen
* Pull Request dengan nama 2-Kelas-NPM-NAMA di folder Chapter02/A/NPM
* Sertakan skrinsutan dari requestcatcher.com atau webhook.site atau pipedream.com
* Github Pages Sudah jalan di repo masing-masing
* Nama file html wajib diberi nama index.html


## Tugas

Ambil sertifikasi :
* https://www.mygreatlearning.com/academy/learn-for-free/courses/go-programming-language 
* https://www.mindluster.com/certificate/3394
* https://www.codecademy.com/learn/learn-go
* https://www.coursera.org/specializations/google-golang

lampirkan pada saat pull request chapter ini, bisa di deskrimsi maupun komentar
