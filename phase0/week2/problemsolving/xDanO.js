function xo (str) {
  var p = str.length
  var i = 0
  var countx = 0
  var counto = 0

  for (i = 0; i < p; i++) {
    if (str[i] === 'x') {
      countx++
    } else if (str[i] === 'o') {
      counto++
    }
  }

  if (countx === counto) {
    return true
  } else {
    return false
  }
}

console.log(xo('xoxoxo'))
console.log(xo('oxooxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))
