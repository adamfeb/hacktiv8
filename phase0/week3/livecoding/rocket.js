function wordSpreadReduction (words) {  
  for (var i = 0; i < (words.length *2 ) -1; i++) {
    var baris = ''
    if (i < words.length) {
      for (var j = 0; j <= i; j++) {
        baris += words[j]
      }
      console.log(baris)
    } else {
      for (var k = 5; k >= 0; k--) {
        baris += k
      }
      console.log(baris)
    }
  }
}

wordSpreadReduction('Dimas')

// baris = baris + alpha[((i * rows) + j) % 26]


/*wordSpreadReduction("Dimas")
    output: 
    D
    Di
    Dim
    Dima
    Dimas
    Dima
    Dim
    Di
    D */
/*
    baris 6 ulang 4 5-1
    baris 7 ulang 3 5-2
    baris 8 ulang 2 5-3
    baris 9 ulang 1 5-4
*/