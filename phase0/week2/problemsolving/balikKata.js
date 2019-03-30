function balikKata (kata) {
  var i = kata.length - 1
  var j = 0
  var k = ''

  for (j = i; j >= 0; j--) {
    k += kata[j]
  }
  return k
}

console.log(balikKata('Hello World and Coders'))
console.log(balikKata('John Doe'))
console.log(balikKata('I am a bookworm'))
console.log(balikKata('Coding is my hobby'))
console.log(balikKata('Super'))
