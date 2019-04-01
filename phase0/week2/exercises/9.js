function nepal (rows) {
  for (var i = 1; i <= rows; i++) {
    var hasil = ''
    for (var j = 1; j <=i; j++) {
      hasil += i // or j or *
    }
    console.log(hasil)
  }
}

nepal(8)