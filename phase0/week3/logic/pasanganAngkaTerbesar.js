function pasanganTerbesar (num) {
  var terbesar = 0
  num = num.toString()
  for (var i = 0; i < num.length - 1; i++) {
    var couple = num.slice(i, i + 2)
    if (couple > terbesar) {
      terbesar = couple
    }
  }
  return terbesar
}

console.log(pasanganTerbesar(641573)) // 73
console.log(pasanganTerbesar(12783456)) // 83
console.log(pasanganTerbesar(910233)) // 91
console.log(pasanganTerbesar(71856421)) // 85
console.log(pasanganTerbesar(79918293)) // 99
