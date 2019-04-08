// var months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// var array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// var numbers = [4, 2, 5, 1, 3]
// numbers.sort(function(a, b) {
//   return a - b
// })
// console.log(numbers)

// [1, 2, 3, 4, 5]

// MANUAL BUILT-IN FUNCTION
//

function sortNumber () {
  for (var i = 0; i < numbers.length - 1; i++) {
    for(var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        var temp = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  return numbers
}

var numbers = [4, 7, 2, 5, 6, 1, 0, 8, 3, 9]

console.log(sortNumber())

// var stringArray = ['Blue', 'Humpback', 'Beluga'];
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// console.log('stringArray:', stringArray.join());
// console.log('Sorted:', stringArray.sort());

// console.log('numberArray:', numberArray.join());
// console.log('Sorted without a compare function:', numberArray.sort());
// console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

// console.log('numericStringArray:', numericStringArray.join());
// console.log('Sorted without a compare function:', numericStringArray.sort());
// console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

// console.log('mixedNumericArray:', mixedNumericArray.join());
// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));

