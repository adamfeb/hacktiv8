// Isikan dengan nama kamu di dalam tanda petik
var nama = 'AdamFeb'
// Ada tiga peran yang kamu bisa pilih : Ksatria / Tabib / Penyihir
// Pastikan kamu menuliskan peran dengan benar
// Isikan peran yang kamu pilih di dalam tanda petik
var peran = 'peNyiHir'
// Antisipasi jika user menginput dengan case yang berbeda, Penyihir, penyihir, peNyiHir, PENYIHIR
peran = peran.toLowerCase()
// DRY - Don't Repeat Yourself
var pesan

if (nama !== '' && peran !== '') {
  if (peran === 'ksatria' || peran === 'tabib' || peran === 'penyihir') {
    if (peran === 'ksatria') {
      pesan = 'kamu dapat menyerang dengan senjatamu!'
    } else if (peran === 'tabib') {
      pesan = 'kamu akan membantu temanmu yang terluka.'
    } else {
      pesan = 'ciptakan keajaiban yang membantu kemenanganmu!'
    }
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo ' + peran + ' ' + nama + ', ' + pesan)
  } else {
    console.log('Maaf ' + nama + ', Peran yang kamu tuliskan tidak tersedia di game ini.')
  }
} else {
  if (nama === '' && peran === '') {
    console.log('Untuk memulai game, Nama dan Peran harus diisi!')
  } else if (peran === '') {
    console.log('Halo ' + nama + ', Kamu harus memilih peranmu untuk memulai game!')
  } else {
    console.log('Kamu telah memilih peran ' + peran + ', tetapi kamu harus mengisi nama terlebih dahulu untuk memulai game!')
  }
}
