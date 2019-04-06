function tentukanDeretGeometri (arr) {
  var compare = arr[1] / arr[0]
  var flag = true
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j <= i + 1; j++) {
      var diff = arr[j] / arr[i]
      if (compare !== diff) {
        flag = false
      }
    }
  }
  return flag
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])) // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])) // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])) // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])) // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])) // false
