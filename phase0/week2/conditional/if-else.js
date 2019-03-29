// Isikan dengan nama kamu di dalam tanda petik
var nama = 'AdamFeb'
// Ada tiga peran yang kamu bisa pilih : Ksatria / Tabib / Penyihir
// Pastikan kamu menuliskan peran dengan benar
// Isikan peran yang kamu pilih di dalam tanda petik
var peran = 'peNyiHir'
peran = peran.toLowerCase()

if (nama !== '' && peran !== '') {
  if (peran === 'ksatria') {
    console.log('\"Selamat datang di Dunia Proxytia, ' + nama + '\"\n\"Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!\"')
  } else if (peran === 'tabib') {
    console.log('\"Selamat datang di Dunia Proxytia, ' + nama + '\"\n\"Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.\"')
  } else if (peran === 'penyihir') {
    console.log('\"Selamat datang di Dunia Proxytia, ' + nama + '\"\n\"Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!\"')
  } else {
    console.log('\"Maaf ' + nama + ', Peran yang kamu tuliskan tidak tersedia di game ini.\"')
  }
} else {
  if (nama === '' && peran === '') {
    console.log('\"Untuk memulai game, Nama dan Peran harus diisi!\"')
  } else if (peran === '') {
    console.log('\"Halo ' + nama + ', Kamu harus memilih peranmu untuk memulai game!\"')
  } else {
    console.log('\"Kamu telah memilih peran ' + peran + ', tetapi kamu harus mengisi nama terlebih dahulu untuk memulai game!\"')
  }
}
