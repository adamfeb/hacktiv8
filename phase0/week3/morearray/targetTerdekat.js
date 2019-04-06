function targetTerdekat (arr) {
  var jarak = arr.length
  var checkx = false
  var checko = false
  
  for (var h = 0; h < arr.length; h++) {
    if (arr[h] === 'x') {
      checkx = true
    } else if (arr[h] === 'o') {
      checko = true
    }
  }

  if (checkx === true && checko === true) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j <arr.length; j++) {
        console.log ('i ' + arr[i] + ' --- j ' + arr[j])
        if (arr[i] === 'o' && arr[j] === 'x') {
          console.log('i = ' + i + ' j = ' + j + ' - jarak = ' + Math.abs(j - i))
          if (Math.abs(j - i) < jarak) {
            jarak = Math.abs(j - i)
          } 
          console.log('jarak = ' + jarak)
        } else if  (arr[i] === 'x' && arr[j] === 'o') {
          console.log('i = ' + i + ' j = ' + j + ' - jarak = ' + Math.abs(j - i))
          if (Math.abs(j - i) < jarak) {
            jarak = Math.abs(j - i)
          }
          console.log('jarak = ' + jarak) 
        }
      }
      console.log('-------')
      console.log('jarak per baris = ' + jarak)
    }
  } else {
    jarak = 0
  }
  console.log(jarak)
}

targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])

// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2

// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
