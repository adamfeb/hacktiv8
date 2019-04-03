function dataHandling (array) {
  for (var i = 0; i < array.length; i++) {
    var id = ''
    var nama = ''
    var tempat = ''
    var tanggal = ''
    var hobi = ''
    for (var j = 0; j < array[i].length; j++) {
      if (j === 0) {
        id = 'Nomor ID: ' + array[i][j] + '\n'
      } else if (j === 1) {
        nama = 'Nama Lengkap: ' + array[i][j] + '\n'
      } else if (j === 2) {
        tempat = 'TTL: ' + array[i][j] + ' '
      } else if (j === 3) {
        tanggal = array[i][j] + '\n'
      } else {
        if (i !== array.length - 1) {
          hobi = 'Hobi: ' + array[i][j] + '\n' // hobi, dengan enter
        } else {
          hobi = 'Hobi: ' + array[i][j] // hobi, baris terakhir, tanpa enter
        }
      }
    }
    console.log(id + nama + tempat + tanggal + hobi)
  }
}

var input = [
  ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
  ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
  ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
  ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
]

dataHandling(input)
