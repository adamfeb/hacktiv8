function palindrome (kata) {
  var forward = ''
  var backward = ''
  for (var i = 0; i < kata.length; i++) {
    forward += kata[i]
  }
  for (var j = kata.length - 1; j >= 0; j--) {
    backward += kata[j]
  }
  if (forward === backward) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('katak')) // true
console.log(palindrome('blanket')) // false
console.log(palindrome('civic')) // true
console.log(palindrome('kasur rusak')) // true
console.log(palindrome('mister')) // false
