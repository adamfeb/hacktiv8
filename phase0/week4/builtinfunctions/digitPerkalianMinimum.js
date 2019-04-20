function digitPerkalianMinimum (angka) {
  var x = 0
  var str = ''
  var result = ''

  for (var i = 1; i <= angka; i++) {
    x = angka / i
    if (x % 1 === 0) {
      str = i.toString() + x.toString()
      if (result === '') {
        result = str
      } else {
        if (str.length < result.length) {
          result = str
        }
      }
    }
  }
  return result.length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)) // 2
console.log(digitPerkalianMinimum(90)) // 3
console.log(digitPerkalianMinimum(20)) // 2
console.log(digitPerkalianMinimum(179)) // 4
console.log(digitPerkalianMinimum(1)) // 2
