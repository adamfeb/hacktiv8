function angkaPalindrome (num) {
  function checkPalindrome (check) {
    var forward = ''
    var backward = ''
    check = check.toString()
    for (var i = 0; i < check.length; i++) {
      forward += check[i]
    }
    for (var j = check.length - 1; j >= 0; j--) {
      backward += check[j]
    }
    if (forward === backward) {
      return true
    } else {
      return false
    }
  }
  var find = num + 1
  while (checkPalindrome(find) === false) {
    find++
  }
  return find
}

console.log(angkaPalindrome(8)) // 9
console.log(angkaPalindrome(10)) // 11
console.log(angkaPalindrome(117)) // 121
console.log(angkaPalindrome(175)) // 181
console.log(angkaPalindrome(1000)) // 1001
