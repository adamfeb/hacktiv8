function doubleReverse(arr) {
  var result = []
  if (arr.length === 0) {
    return 'Invalid input parameter'
  } else {
    for (var i = arr.length - 1; i >= 0; i--) {
      var inside = ''
      if (arr[i].length % 2 === 0) {
        for (var j = arr[i].length -1; j >= 0; j--) {
          inside += arr[i][j]
        }
      } else {
        inside = arr[i]
      }
      result.push(inside)
    }
    return result
  }
}

console.log(doubleReverse(['hari', 'senin', 'makan', 'sushi', 'enak']));
// [ 'kane', 'sushi', 'makan', 'senin', 'irah' ]
console.log(doubleReverse(['winter', 'is', 'coming']));
// [ 'gnimoc', 'si', 'retniw' ]
console.log(doubleReverse(['valar', 'morghulis', 'valar', 'dohaeris']));
//[ 'sireahod', 'valar', 'morghulis', 'valar' ]
console.log(doubleReverse([]))
// invalid input parameter