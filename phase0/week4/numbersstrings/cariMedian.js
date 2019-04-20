function cariMedian(arr) {
  if (arr.length % 2 === 1) {
    for (var a = 0; a < arr.length - 1; a++) {
      for (var b = a + 1; b < arr.length; b++) {
        if (arr[a] > arr[b]) {
          var temp = arr[a]
          arr[a] = arr[b]
          arr[b] = temp
        }
      }
    }
    var median = Math.round(arr.length / 2)
    return arr[median - 1]
  } else {
    for (var a = 0; a < arr.length - 1; a++) {
      for (var b = a + 1; b < arr.length; b++) {
        if (arr[a] > arr[b]) {
          var temp = arr[a]
          arr[a] = arr[b]
          arr[b] = temp
        }
      }
    }
    var median = arr.length / 2
    return (arr[median - 1] + arr[median]) / 2
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

// Test Case Ketiga hasilnya harusnya 6, bukan 7, salah soal.
