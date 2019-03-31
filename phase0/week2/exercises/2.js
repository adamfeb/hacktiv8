function findTheSign (angka1, angka2, angka3) {
  if (angka1 < 0 || angka2 < 0 || angka3 < 0) {
    var hasil = ''
    if (angka1 < 0) {
      hasil += angka1 + ' '
    }
    if (angka2 < 0) {
      hasil += angka2 + ' '
    }
    if (angka3 < 0) {
      hasil += angka3
    }
    return hasil
  } else {
    return 'tidak ada angka negatif'
  }
}

console.log(findTheSign(-5, 7, -9))
