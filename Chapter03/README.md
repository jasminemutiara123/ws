# Otorisasi Web Service

Pada bagian ini dijelaskan bagaimana membangun otorisasi pada backend dan menggunakannya di frontend, beberapa langkah yang dilakukan :
* Bagaimana server mengenali siapa kita?
* membuat package golang
* membuat front end dengan tailwind container

Pastikan github pages sudah jalan di repo masing-masing.

## Cookie

Server membutuhkan identifikasi dari browser bahwa yang mengakses adalah orang yang punya hak akses. Bagaimana caranya server mengenali user? Caranya adalah dengan menggunakan Value dari Cookie dengan Name/Key yang sudah diberikan dari server. Cookie merupakan tempat penyimpanan pada browser. Cookie di definisikan sebagai key dan value. sebagai contoh :

* Dosen Membuka situs shuffle.dev dan login pada chrome. Kemudian klik kanan inspect, pilih tab Application. Kemudian pada bagian kiri pilih Storage -> Cookies -> alamat web yagn dikunjungi. maka akan terlihat Name(Key) dan Value disana. Struktur data Cookie : Name, Value, Domain, Path, Expires. dll. 
  ![image](https://user-images.githubusercontent.com/11188109/221475714-3b632155-031c-40ec-a859-d8a8dbedf373.png)
* Dilihat dari gambar diatas ada Cookie bernama PHPSESSID. Cookie tersebut merupakan standar dari session PHP. Jadi apa itu session? Setelah user melakukan login. Server membuat kode hash dan disimpan sebagai file yang berisi informasi username dan role di folder tmp, kemudian kode hash tersebut diberikan kepada client melalui browser melalu Set-Header HTTP, berisi Name dan Value. Dimana Name adalah nama cookiesnya dan value adalah kode hash yang sebelumnya disimpan di server. Selama user menggunakan browser maka interaksi dengan server selalu menyertakan Cookie dalam setiap permintaannya sebagai header setiap request. Sehingga user akan dikenali sebagai username apa dan role nya apa.
* Sekarang mahasiswa coba buka browser pada komputer masing-masing, dan bukalah situs yang sama. Kemudian masukkan Name dan Value dari browser dosen. Disini dicontohkan PHPSESSID. Selah diinputkan. silahkan refresh website. Dan lihatlah apa yang terjadi
* Cobalah dengan website kampus dilanjut dengan youtube dan gmail.

## Membuat container berbasis tailwindcss

Sebelumnya pilih dahulu studi kasus pembuatan dashboard yang akan dibuat selama kuliah. Setiap orang tidak boleh sama, boleh sama topik tapi berbeda menu yang di develop. Pilihan topik dashboard :

* Proyek 1
* Proyek 2
* Proyek 3
* Intership 1
* Intership 2
* Tugas Akhir
* DHS
* Jadwal Kuliah
* Undangan Rapat
* Surat Menyurat
* Kuisoner
* Helpdesk
* Profile
* Point of Sales Kantin
* Presensi
* Perwalian
* Monitoring Orang Tua
* Tagihan
* Penerimaan Mahasiswa Baru
* Nilai
* BAP
* Penelitian
* Pengabdian Masyarakat
* Pengembangan Bahan Ajar
* Penggajihan dan Honor
* Kemahasiswaan
* elearning
* kurikulum RPS
* Luaran Dosen
* Laminfokom

![image](https://user-images.githubusercontent.com/11188109/221479972-18ff68c8-cd28-4f8a-88b3-6c499a1d4900.png)

CSS mendefinisikan wilayah untuk tata letak dengan nama container. Biasanya dibatasi dengan tag div. Silahkan membuat containernya dahulu dan simpan. Isi dengan studi kasus yang diberikan.

![image](https://user-images.githubusercontent.com/11188109/221481502-a6590b6d-f039-4883-a0e5-7b1e6ff6f189.png)

Tambahkan chart, resume dan tabel.

![image](https://user-images.githubusercontent.com/11188109/221483647-a4836c01-d913-4c04-8c18-d44fafe9c135.png)


## Golang Package and Environment

Disini dipelajari bagaimana membuat package dan menggunakan environment variabel di golang. Pastikan :
1. Download dan Install golang
2. Membuat dan menjalankan aplikasi hello word
   Buat file main.go yang berisi
   ```go
   package main

   import "fmt"

   func main() {
        fmt.Println("Hello, World!")
   }
   ```
   ```sh
   go mod init hello
   go mod tidy
   go run .
   ```
## Struct di golang

Komunikasi di golang menggunakan json dipermudah dengan adanya struct type. Struct type ini akan mendefinisikan bagaimana bentuk json yang berkomunikasi dari frontend menuju backend.

## Fungsi di golang

Kita akan melakukkan

## Testing Packace

```go
package autoiteung

import (
	"fmt"
	"testing"
)

func TestBukaKelas(t *testing.T) {
	nama_group := "21666-2A-PEMOGRAMAN III | TYGUSAD"
	pesaniteung := BukaKelas(nama_group)
	fmt.Println(pesaniteung)

}

```

## Publish
GOPROXY=proxy.golang.org

```sh
git tag v0.0.1
git push origin --tags
go list -m github.com/whatsauth/wasocket@v0.0.1
```
