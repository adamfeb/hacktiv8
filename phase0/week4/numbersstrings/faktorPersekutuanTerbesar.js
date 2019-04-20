function fpb (angka1, angka2) {
  if (angka2 > angka1) {
    var a = angka2
    var b = angka1
  } else if (angka1 > angka2) {
    var a = angka1
    var b = angka2
  } else {
    return angka1
  }
  while (b !== 0) {
    var temp = a % b
    a = b
    b = temp
  }
  return a
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
