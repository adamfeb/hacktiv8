// INPUT DALAM BENTUK STRING
function balikString (word) {
  var result = ''
  for (var i = word.length - 1; i >= 0; i--) {
    result += word[i]
  }
  return result
}

console.log(balikString('Adam Febrianata'))





// INPUT DALAM BENTUK ARRAY
function balikString (array) {
  var result = ''
  for (var i = array.length - 1; i >= 0; i--) {
    for (var j = array[i].length - 1; j >= 0; j--)
      result += array[i][j]
  }
  return result
}

console.log(balikString(['Adam Febrianata']))
// Array berisi satu item
console.log(balikString(['Adam Febrianata ', 'Benny Irawan ', 'Edi Handoko']))
// Array berisi tiga items, yang dibalik katanya (decrement j), dan juga urutannya (decrement i)
