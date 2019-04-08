// var array1 = [1, 2, 3]

// var firstElement = array1.shift()

// console.log(array1)
// expected output: Array [2, 3]

// console.log(firstElement)
// expected output: 1 --- element yang di-shift / dihapus

// SHIFT TIDAK MENERIMA PARAMETER APAPUN

// MANUAL BUILT-IN FUNCTION
// POP WITHOUT POP

function shiftNumber () {
  var result = []
  for (var i = 1; i < numbers.length; i++) {
    result.push(numbers[i])
  }
  return result
}

var numbers = [7, 5, 2, 8, 3]

console.log(shiftNumber())
