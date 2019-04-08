// var beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
// console.log(beasts.indexOf('bison', 2))
// indexOf(yangdicari, yangditemukankeberapa)

// MANUAL BUILT-IN FUNCTION
function findBison (name, num) {
  var counter = 0
  var flag = false

  // ngecek variable yang dicari  / diindex ada atau gak
  for (var i = 0; i < beasts.length; i++) {
    if (beasts[i] === name) {
      flag = !flag 
    }
  }
  if (flag === false) {
    return -1
  }

  // kalau num-nya ga ada / ga diisi, yang dicari name / bison pertama
  if (num === undefined) {
    num = 1
  }

  // kalau ada ngecek dimana posisi indexnya
  for (var i = 0; i < beasts.length; i++) {
    if (beasts[i] === name) {
      counter++
    }
    if (beasts[i] === name && counter === num) {
      return i 
    }
  }

}

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'bison', 'camel']

console.log(findBison('bison', 2))