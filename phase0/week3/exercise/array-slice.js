// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4)); // 4 positif, hitung batas dari depan
// expected output: Array ["camel", "duck"]

// console.log(animals.slice(0, -2)); // -2 negatif, hitung batas dari belakang
// expected output: Array ["ant", "bison", "camel"]

// console.log(animals.slice(4, 2)); // coba lebih dari limit
// expected output: Array []

// console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// MANUAL BUILT-IN FUNCTION
// PUSH WITHOUT PUSH

function sliceAnimal (start, limit) {
  var result = []
  if (limit === undefined || limit > animals.length) {
    limit = animals.length
  } else if (limit < 0 && limit >= -Math.abs(animals.length)) {
    limit = animals.length + limit
  }
  for (var i = start; i < limit; i++) {
    result.push(animals[i])
  }
  return result
}

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(sliceAnimal(2, 4));