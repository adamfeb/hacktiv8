//var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

// console.log(plants.pop())
// expected output: "tomato" --- yang dihapus

// console.log(plants)
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// plants.pop()

// console.log(plants)
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

// POP TIDAK MENERIMA PARAMETER APAPUN

// MANUAL BUILT-IN FUNCTION
// POP WITHOUT POP

function popPlants () {
  var result = []
  for (var i = 0; i < plants.length - 1; i++) {
    result.push(plants[i])
  }
  return result
}

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(popPlants())