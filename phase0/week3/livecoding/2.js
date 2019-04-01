function findAndReplace (str, character) {
  if (character.length !== 1) {
    return 'Invalid input parameter !'
  } else {
    var total = 0
    for (var i = 0; i < str.length; i++) {
      if (str[i] === character) {
        total++
      }
    }
    return 'Terdapat ' + total + ' huruf ' + character
  }
}

console.log(findAndReplace('Menari dan bernyanyi', 'a'))
console.log(findAndReplace('Berdansa bersama', 'm'))
console.log(findAndReplace('Menari dan bernyanyi', ''))
console.log(findAndReplace('Dilarang merokok disini', 'cd'))
