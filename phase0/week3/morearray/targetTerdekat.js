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
      for (var j = 0; j < arr.length; j++) {
        if (((arr[i] === 'o' && arr[j] === 'x') || (arr[i] === 'x' && arr[j] === 'o')) && Math.abs(j - i) < jarak) {
          jarak = Math.abs(j - i)
        }
      }
    }
  } else {
    jarak = 0
  }
  return jarak
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2

// Versi Panjang dan Mudahnya

// function targetTerdekat (arr) {
//   var jarak = arr.length
//   var checkx = false
//   var checko = false

//   for (var h = 0; h < arr.length; h++) {
//     if (arr[h] === 'x') {
//       checkx = true
//     } else if (arr[h] === 'o') {
//       checko = true
//     }
//   }

//   if (checkx === true && checko === true) {
//     for (var i = 0; i < arr.length; i++) {
//       for (var j = 0; j <arr.length; j++) {
//         console.log ('i ' + arr[i] + ' --- j ' + arr[j])
//         if (arr[i] === 'o' && arr[j] === 'x') {
//           console.log('i = ' + i + ' j = ' + j + ' - jarak = ' + Math.abs(j - i))
//           if (Math.abs(j - i) < jarak) {
//             jarak = Math.abs(j - i)
//           }
//           console.log('jarak = ' + jarak)
//         } else if  (arr[i] === 'x' && arr[j] === 'o') {
//           console.log('i = ' + i + ' j = ' + j + ' - jarak = ' + Math.abs(j - i))
//           if (Math.abs(j - i) < jarak) {
//             jarak = Math.abs(j - i)
//           }
//           console.log('jarak = ' + jarak)
//         }
//       }
//       console.log('-------')
//       console.log('jarak per baris = ' + jarak)
//     }
//   } else {
//     jarak = 0
//   }
//   return jarak
// }

// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2
