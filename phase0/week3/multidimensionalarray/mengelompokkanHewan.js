function groupAnimals (animals) {
  var firstLetters = []
  for (var i = 0; i < animals.length; i++) {
    var addFirstLetter = true
    for (var j = 0; j < firstLetters.length; j++) {
      if (animals[i][0] === firstLetters[j]) {
        addFirstLetter = false
      }
    }
    if (addFirstLetter === true) {
      firstLetters.push(animals[i][0])
    }
  }

  for (var a = 0; a < firstLetters.length - 1; a++) {
    for (var b = a + 1; b < firstLetters.length; b++) {
      if (firstLetters[a] > firstLetters[b]) {
        var temp = firstLetters[a]
        firstLetters[a] = firstLetters[b]
        firstLetters[b] = temp
      }
    }
  }

  var result = []
  for (var x = 0; x < firstLetters.length; x++) {
    var inside = []
    for (var y = 0; y < animals.length; y++) {
      if (animals[y][0] === firstLetters[x]) {
        inside.push(animals[y])
      }
    }
    result.push(inside)
  }

  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']))
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
