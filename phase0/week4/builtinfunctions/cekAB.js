function checkAB (num) {
  var result = false
  for (var i = 0; i < num.length; i++) {
    for (var j = i; j < num.length; j++) {
      if (Math.abs(i - j) === 4) {
        if ((num[i] === 'a' && num[j] === 'b') || (num[i] === 'b' && num[j] === 'a')) {
          result = true
        }
      }
    }
  }
  return result
}

// TEST CASES
console.log(checkAB('lane borrowed')) // true
console.log(checkAB('i am sick')) // false
console.log(checkAB('you are boring')) // true
console.log(checkAB('barbarian')) // true
console.log(checkAB('bacon and meat')) // false
