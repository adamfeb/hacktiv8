// READ AND STORE "param" with user input

// IF "param" divide by 2 equals to 0
//   SEND "Invalid Input" TO DISPLAY
// ELSE
//   SET "result" equals to []
//   SET initial "i" equals to 1
//   SET initial "j" equals to 0
//   WHILE "i" less than or equals to rounded up of "param" divide by 2
//     SET "baris" equals to []
//     SET "stars" equals to 2 multiple by i minus 1
//     SET "space" equals to (param substract by stars)
//     WHILE "j" less than "param"
//       IF "j" more than "space" AND "j" less than or equals to stars plus space
//         INSERT '*' into "baris"
//       ELSE
//         INSERT ' ' into "baris"
//       ENDIF
//       ADD 1 to "j"
//     ENDWHILE
//     INSERT "baris" into "result"
//     ADD 1 to "i"
//   ENDWHILE
//   SEND "result" TO DISPLAY
// ENDIF

function soal2 (param) {
  if (param % 2 === 0) {
    return 'Invalid input'
  } else {
    var result = []
    for (var i = 1; i <= Math.ceil(param / 2); i++) {
      var baris = []
      var stars = 2 * i - 1
      var space = (param - stars) / 2
      for (var j = 1; j <= param; j++) {
        if (j > space && j <= stars + space) {
          baris.push('*')
        } else {
          baris.push(' ')
        }
      }
      result.push(baris)
    }
    return result
  }
}

console.log(soal2(5))
// [
//   ['','','*','',''],
//   ['','*','*','*',''],
//   ['*','*','*','*','*']
// ]

console.log(soal2(3))
// [
//     ['','*',''],
//     ['*','*','*']
// ]

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input
