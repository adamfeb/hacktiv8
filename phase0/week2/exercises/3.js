function sortNumber (angka1, angka2, angka3) {
  var atas = ''
  var tengah = ''
  var bawah = ''

  if (angka1 > angka2 && angka1 > angka3) {
    atas += angka1
    if (angka2 >= angka3) {
      tengah += angka2
      bawah += angka3
    } else {
      tengah += angka3
      bawah += angka2
    }
  } else if (angka2 > angka1 && angka2 > angka3) {
    atas += angka2
    if (angka1 >= angka3) {
      tengah += angka1
      bawah += angka3
    } else {
      tengah += angka3
      bawah += angka1
    }
  } else if (angka3 > angka1 && angka3 > angka2) {
    atas += angka3
    if (angka1 >= angka2) {
      tengah += angka1
      bawah += angka2
    } else {
      tengah += angka2
      bawah += angka1
    }
  } else {
    atas += angka1
    tengah += angka2
    bawah += angka3
  }

  return atas + ', ' + tengah + ', ' + bawah
}

console.log(sortNumber(-7, -2, 5))
