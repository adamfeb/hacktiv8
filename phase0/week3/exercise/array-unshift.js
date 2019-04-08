// var array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// expected output: 5 --- length of array1 after unshift

// console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

// MANUAL BUILT-IN FUNCTION
// UNSHIFT WITHOUT UNSHIFT

function unshiftAnimals (input) {
  var result = []
  for (var i = 0; i < input.length; i++) {
    result.push(input[i])
  }
  for (var j = 0; j < animals.length; j++) {
    result.push(animals[j])
  }
  return result
}

var animals = ['pigs', 'goats', 'sheep']

console.log(unshiftAnimals(['chicken', 'duck']))

// ['chicken', 'duck', 'pigs', 'goats', 'sheep']