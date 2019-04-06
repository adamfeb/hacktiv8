function mengelompokkanAngka (arr) {
  var group1 = []
  var group2 = []
  var group3 = []
  var allGroup = []

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      group1.push(arr[i])
    } else if (Math.abs(arr[i]) % 3 === 0) {
      group3.push(arr[i])
    } else if (Math.abs(arr[i]) % 2 === 1) {
      group2.push(arr[i])
    } else {
      group1.push(arr[i])
    }
  }
  allGroup.push(group1, group2, group3)
  return allGroup
}

console.log(mengelompokkanAngka([2, 4, 6]))
// [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]))
// [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([]))
// [ [], [], [] ]
