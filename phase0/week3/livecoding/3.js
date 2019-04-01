function alphabetIteration (rows) {
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  console.log(alpha.length)

  for (var i = 0; i < rows; i++) {
    var baris = ''
    for (var j = 0; j < rows; j++) {
      baris = baris + alpha[((i * rows) + j) % 26]
    }
    console.log(baris)
  }
}

alphabetIteration(9)
