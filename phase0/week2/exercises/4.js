function terbesar (angka1, angka2, angka3, angka4, angka5) {
  if (angka1 >= angka2 && angka1 >= angka3 && angka1 >= angka4 && angka1 >= angka5) {
    return angka1
  } else if (angka2 >= angka1 && angka2 >= angka3 && angka2 >= angka4 && angka2 >= angka5) {
    return angka2
  } else if (angka3 >= angka1 && angka3 >= angka2 && angka3 >= angka4 && angka3 >= angka5) {
    return angka3
  } else if (angka4 >= angka1 && angka4 >= angka2 && angka4 >= angka3 && angka4 >= angka5) {
    return angka4
  } else if (angka5 >= angka1 && angka5 >= angka2 && angka5 >= angka3 && angka5 >= angka4) {
    return angka5
  }
}

console.log(terbesar(-5, -2, 9, 0, -1))