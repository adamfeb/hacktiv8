function tukarBesarKecil(kalimat) {
  var alphaS = 'abcdefghijklmnopqrstuvwxyz'
  var alphaB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var result = ''
  var flag = ''
  for (var i = 0; i < kalimat.length; i++) {
    for (var j = 0; j < alphaS.length; j++) {
      if (kalimat[i] === alphaS[j] || kalimat[i] === alphaB[j]) {
        flag = true
        break
      } else {
        flag = false
      }
    }
    if (flag === true) {
      if (kalimat[i] === alphaS[j]) {
        result += alphaB[j]
      } else {
        result += alphaS[j]
      }
    } else {
      result += kalimat[i]
    }
  }
  return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
