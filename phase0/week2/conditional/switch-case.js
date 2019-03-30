//  Isikan tanggal, bulan, dan tahun hanya dengan angka.
var tanggal = 30
var bulan = 9
var tahun = 1965
var namaBulan
var maxTanggal

// Switch Case penamaan bulan dan conditional tanggal maksimal dalam bulan tersebut
switch (bulan) {
  case 1:
    maxTanggal = 31
    namaBulan = 'Januari'
    break
  case 2:
    if ((tahun % 4) === 0) {
      maxTanggal = 29
    } else {
      maxTanggal = 28
    }
    namaBulan = 'Februari'
    break
  case 3:
    maxTanggal = 31
    namaBulan = 'Maret'
    break
  case 4:
    maxTanggal = 30
    namaBulan = 'April'
    break
  case 5:
    maxTanggal = 31
    namaBulan = 'Mei'
    break
  case 6:
    maxTanggal = 30
    namaBulan = 'Juni'
    break
  case 7:
    maxTanggal = 31
    namaBulan = 'Juli'
    break
  case 8:
    maxTanggal = 31
    namaBulan = 'Agustus'
    break
  case 9:
    maxTanggal = 30
    namaBulan = 'September'
    break
  case 10:
    maxTanggal = 31
    namaBulan = 'Oktober'
    break
  case 11:
    maxTanggal = 30
    namaBulan = 'November'
    break
  case 12:
    maxTanggal = 31
    namaBulan = 'Desember'
}

//  Validasi dan Output
if (typeof tanggal !== 'number' || typeof bulan !== 'number' || typeof tahun !== 'number') {
  console.log('Input tidak valid. Input harus berupa angka. Periksa lagi input anda')
} else {
  if (tanggal < 1 || tanggal > maxTanggal) {
    console.log('Penulisan tanggal salah, tanggal diantara 1 - ' + maxTanggal)
  } else if (bulan < 1 || bulan > 12) {
    console.log('Penulisan bulan salah, bulan diantara 1 - 12')
  } else if (tahun < 1900 || tahun > 2200) {
    console.log('Penulisan tahun salah, tahun diantara 1900 - 2200')
  } else {
    console.log(tanggal + ' ' + namaBulan + ' ' + tahun)
  }
}
