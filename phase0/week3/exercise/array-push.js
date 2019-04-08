// var animals = ['pigs', 'goats', 'sheep']

// console.log(animals.push('cows'))
// expected output: 4 - length of array after push item

// console.log(animals)
// expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens')

// console.log(animals)
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

// MANUAL BUILT-IN FUNCTION
// PUSH WITHOUT PUSH

function pushAnimals (input) {
  var result = []
  for (var i = input.length - 1; i >= 0; i--) {
    result.unshift(input[i])
  }

  for (var j = animals.length - 1; j >= 0; j--) {
    result.unshift(animals[j])
  }

  return result
}

var animals = ['pigs', 'goats', 'sheep']

console.log(pushAnimals(['chicken', 'duck']))

// ['pigs', 'goats', 'sheep', 'chicken', 'duck']