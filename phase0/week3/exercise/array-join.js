// var elements = ['Fire', 'Wind', 'Rain'];

// console.log(elements.join());
// expected output: "Fire,Wind,Rain"

// console.log(elements.join(''));
// expected output: "FireWindRain"

// console.log(elements.join('-'));
// expected output: "Fire-Wind-Rain"

// MANUAL BUILT-IN FUNCTION
// POP WITHOUT POP

function joinElements (joiner) {
  var result = ''
  for (var i = 0; i < elements.length; i++) {
    if (i < elements.length - 1) {
      result += elements[i] + joiner
    } else {
      result += elements[i]
    }
  }
  return result
}

var elements = ['Fire', 'Wind', 'Rain', 'Storm', 'Earth'];

console.log(joinElements(' & '))