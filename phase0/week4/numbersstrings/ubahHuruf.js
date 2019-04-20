function ubahHuruf(kata) {
  var alpha ='abcdefghijklmnopqrstuvwxyz'
  var hasil = ''
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < alpha.length; j++) {
      if (kata[i] === alpha[j]) {
        hasil += alpha[(j + 1) % 26]
      }
    }
  }
  return hasil
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
