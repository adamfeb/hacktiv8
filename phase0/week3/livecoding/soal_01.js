[INSTRUCTION]
Buatlah Algoritma/Pseudocode untuk kasus berikut !

Seorang polisi sedang melakukan razia kepada pengendara sepeda motor di jalan raya. 
Untuk setiap pengendara akan di cek kelengkapan berupa : 
- Menggunakan helm atau tidak
- Membawa STNK atau tidak
- Membawa SIM atau tidak
- Apakah tanggal PLAT NOMOR masih berlaku atau tidak
untuk setiap aturan yang dilanggar maka pengendara harus membayar tilang sebesar 500 ribu rupiah.

Tampilkan biaya denda pengendara sesuai dengan pelanggaran yang dilakukan

write your Pseudocode / alogorithm here

//
// Algorithm 
//

1. Polisi menghentikan pengendara dan mulai mengecek kelengkapan
2. Polisi melakukan pengecekan apakah pengendara menggunakan HELM atau tidak
  3. Jika pengendara menggunakan HELM, maka polisi akan melakukan pengecekan item selanjutnya  
  4. Jika pengendara tidak menggunkan HELM, maka polisi akan mencatat penambahan denda sebesar 500k.
5. Kemudian polisi akan melakukan pengecekan apakah pengendara membawa STNK atau tidak
  6. Jika pengendara membawa STNK, maka polisi akan melakukan pengecekan item selanjutnya
  7. Jika pengendara tidak membawa STNK, maka polisi akan mencatat penambahan denda sebesar 500k.
8. Kemudian polisi akan melakukan pengecekan apakah pengendara membawa SIM atau tidak
  9. Jika pengendara membawa SIM, maka polisi akan melakukan pengecekan item selanjutnya
  10. Jika pengendara tidak membawa SIM, maka polisi akan mencatat penambahan denda sebesar 500k.
11. Kemudian polisi akan melakukan pengecekan PLAT NOMOR, apakah masih berlaku atau tidak
  12. Jika PLAT NOMOR masih berlaku, maka polisi selesai melakukan pengecekan.
  13. Jika PLAT NOMOR tidak berlaku, maka polisi akan mencatat penambahan denda sebesar 500k.
14. Selanjutnya polisi akan menghitung total seluruh denda yang diberikan kepada pengendara dari hasil pengecekan diatas.
15. Polisi akan memberikan surat tilang sesuai dengan total denda yang telah dihitung


//
// Pseudocode
//

IF pengendara did not use helm
  ADD 500k to denda
  WRITE denda
ENDIF

IF pengendara did not bring stnk
  ADD 500k to denda
  WRITE denda
ENDIF 

IF pengendara did not bring sim
  ADD 500k to denda
  WRITE denda
ENDIF

IF pengendara plat nomor not valid
  ADD 500k to denda
  WRITE denda
ENDIF

DISPLAY denda