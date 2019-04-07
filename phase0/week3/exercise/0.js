// ====================
// Count Place Distance
// ====================

// [INSTRUCTION]
// Fungsi countDistance dibuat untuk menghitung jarak dua tempat yang diwakili oleh huruf 'o' di dalam array multidimensi
// Terdapat 2 parameter yang diperlukan oleh fungsi countDistance, param pertama berupa array multidimensi,
// param kedua berupa number yang menunjukkan uang yang kita miliki saat ini

// Ketika melewati huruf 'x' maka uang pengendara akan berkurang sebesar 10000 , dan jika uang habis atau kurang dari 10000
// maka perjalanan akan terhenti

// [EXAMPLE]
// Input :
// [
//   ['', 'o', 'x', 'x', '', 'o'],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
// ]
// dan uang = 40000
// output :
// Sisa uang : 20000, jarak tempuh: 30 km

// Input :
// [
//   ['', 'o', 'x', 'x', 'x', 'x'],
//   ['o', '', '', '', ''],
//   ['', '', '', '', ''],
// ]
// dan uang = 30000
// output :
// Uang anda habis, jarak tersisa sampai tujuan adalah 10 km

// [RULES]
// - Dilarang menggunakan indexOf, sort, includes.
// - Dilarang menggunakan regex .match dan lainnya!

// Pseudocode by adamfeb
// READ AND STORE "arr" with user input
// READ AND STORE "money" with user input

// SET initial "flag" equals to false
// SET initial "distance" equals to -1
// SET initial "distanceLeft" equals to 0
// SET initial "i" equals to 0
// SET initial "j" equals to 0

// WHILE "i" less than length of "arr"
//   WHILE "j" less than length of "arr" number "i" 
    
//     IF "arr" element number "j" in "arr" number "i" equals to 'o'
//       SET "flag" equals to NOT "flag"
//     ENDIF
//     IF "flag" equals to true 
//       IF "money" greater than 0
//         IF "arr" element number "j" in "arr" number "i" equals to 'x'
//           CALCULATE "money" substract by 10000
//           SET "money" with calculation result
//           ADD 1 to "distance"        
//         ELSE 
//           ADD 1 to "distanceLeft"
//         ENDIF
//       ENDIF
//     ENDIF
//     ADD 1 to "j"
//   ENDWHILE
//   ADD 1 to "i"
// ENDWHILE

// IF "money" greater than 0
//   SEND 'Sisa uang : ' + "money" value + ', jarak tempuh: ' + "distance" multiply by 10 + ' km' TO DISPLAY
// ELSE 
//   SEND 'Uang anda habis, jarak tersisa sampai tujuan adalah ' + "distanceLeft" multiply by 10 + ' km' TO DISPLAY
// ENDIFIF

function countDistance (arr, money) {
  var flag = false
  var distance = -1
  var distanceLeft = 0
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'o') {
        flag = !flag
      }
      if (flag === true) {
        if (money > 0) {
          if (arr[i][j] === 'x') {
            money -= 10000
          }
          distance++
        } else {
          distanceLeft++
        }
      }
    }
  }
  if (money > 0) {
    return 'Sisa uang : ' + money + ', jarak tempuh: ' + (distance * 10) + ' km'
  } else {
    return 'Uang anda habis, jarak tersisa sampai tujuan adalah ' + (distanceLeft * 10) + ' km'
  }
}

console.log(countDistance([
  ['', 'o', '', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', '']
], 40000))
// output:
// Sisa uang : 40000, jarak tempuh: 20 km

console.log(countDistance([
  ['', '', 'o', '', ''],
  ['', 'x', ''],
  ['', '', '', '', '', 'x'],
  ['', 'o', '', '']
], 50000))
// output:
// Sisa uang : 30000, jarak tempuh: 120 km

console.log(countDistance([
  ['', '', '', '', ''],
  ['o', 'x', 'x', 'x', ''],
  ['', '', '', 'x', '', 'x'],
  ['', 'o', '', '']
], 40000))
// output:
// Uang anda habis, jarak tersisa sampai tujuan adalah 30 km

console.log(countDistance([
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', '']
], 30000))
// output:
// Uang anda habis, jarak tersisa sampai tujuan adalah 10 km

// TEST CASE
// console.log(countDistance([
//   ['', '', 'o', 'x', 'x'],
//   ['', 'x', 'o', '', ''],
//   ['', '', '', '', ''],
// ], 30000))

// console.log(countDistance([
//   ['x', 'x', 'o', 'x', 'x'],
//   ['', 'x', '', 'o', ''],
//   ['', 'x', 'x', 'x', ''],
// ], 40000))
