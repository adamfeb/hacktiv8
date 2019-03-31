function larger (angka1, angka2) {
  if (angka1 > angka2) {
    return angka1
  } else if (angka1 < angka2) {
    return angka2
  } else {
    return 'angka sama'
  }
}

console.log(larger(2, 4))
