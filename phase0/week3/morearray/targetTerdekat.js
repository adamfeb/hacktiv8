function targetTerdekat (arr) {
  var indexOfx = []
  var indexOfo = []
  var shortest = arr.length
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      indexOfx.push(i)
    } else if (arr[i] === 'o') {
      indexOfo.push(i)
    }
  }
  if (indexOfx.length !== 0 && indexOfo.length !== 0) {
    for (var p = 0; p < indexOfx.length; p++) {
      for (var q = 0; q < indexOfo.length; q++) {
        if (Math.abs(indexOfx[p] - indexOfo[q]) <= shortest) {
          shortest = Math.abs(indexOfx[p] - indexOfo[q])
        }
      }
    }
    return shortest
  } else {
    return 0
  }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2

// SETELAH KONSULTASI DENGAN INSTRUKTUR - VERSI PANJANG DAN MUDAH DIPAHAMI

// function targetTerdekat (arr) {
//   var indexOfx = []
//   var indexOfo = []
//   var shortest = arr.length

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 'x') {
//       indexOfx.push(i)
//       console.log(indexOfx)
//     } else if (arr[i] === 'o') {
//       indexOfo.push(i)
//       console.log(indexOfo)
//     }
//   }
//   console.log ('------')
//   console.log (indexOfx + ' --- ' + indexOfx.length)
//   console.log (indexOfo + ' --- ' + indexOfo.length)

//   if (indexOfx.length !== 0 && indexOfo.length !== 0) {
//     for (var p = 0; p < indexOfx.length; p++) {
//       for (var q = 0; q < indexOfo.length; q++) {
//         console.log('x = ' + indexOfx[p] + ' --- o = ' + indexOfo[q] + ' jarak = ' + Math.abs(indexOfx[p] - indexOfo[q]))
//         if (Math.abs(indexOfx[p] - indexOfo[q]) <= shortest) {
//           shortest = Math.abs(indexOfx[p] - indexOfo[q])
//           console.log(shortest)
//         }
//       }
//     }
//   } else {
//     return 0
//   }
// }

// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2

// VERSI PENDEKNYA

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
//       for (var j = 0; j < arr.length; j++) {
//         if (((arr[i] === 'o' && arr[j] === 'x') || (arr[i] === 'x' && arr[j] === 'o')) && Math.abs(j - i) < jarak) {
//           jarak = Math.abs(j - i)
//         }
//       }
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

// VERSI PANJANG DAN MUDAH DIBACANYA

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
