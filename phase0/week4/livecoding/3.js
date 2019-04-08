function tukarKolomBaris(arr) {
  var result = []
  if (arr.length === 0 || arr.length === '') {
    return 'invalid input parameter'
  } else {
    var baris = arr.length
    var kolom = arr[0].length
    for (var i = 0; i < kolom; i++) {
      var inside = []
      for (var j = 0; j < baris; j++) {
        inside.push(arr[j][i])
      }
      result.push(inside)
    }
    return result
  }
}

console.log(tukarKolomBaris([
  [4, 6, 7, 10],
  [9, 2, 1, 3],
  [1, 1, 2, 2],
  [4, 4, 4, 4],
  [5, 6, 7, 8]
]));
/* output : 
[ 
  [ 4, 9, 1, 4, 5 ],
  [ 6, 2, 1, 4, 6 ],
  [ 7, 1, 2, 4, 7 ],
  [ 10, 3, 2, 4, 8 ] 
]
*/

console.log(tukarKolomBaris([
  [5, 3, 1, 1],
  [2, 1, 4, 1],
  [0, 2, 4, 1]
]));
/* output :
  [ 
    [ 5, 2, 0 ], 
    [ 3, 1, 2 ], 
    [ 1, 4, 4 ], 
    [ 1, 1, 1 ] 
  ]
*/

console.log(tukarKolomBaris([]));
// Invalid input parameter

console.log(tukarKolomBaris(''));
// Invalid input parameter


