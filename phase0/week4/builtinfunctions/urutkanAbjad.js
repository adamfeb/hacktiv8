function urutkanAbjad(str) {
  var result = ''
  var alpha = 'abcdefghijklmnopqrstuvwxyz'

  for (var i = 0; i < alpha.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (str[j] === alpha[i]) {
        result += str[j]
      }
    }
  }
  return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
