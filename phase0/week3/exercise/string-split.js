// var kalimat = "saya adalah full-stack javascript programmer!";
// var kata = kalimat.split(" "); 
// kalimat dipecah dengan separator berupa spasi.
// console.log(kata); 
// ["saya", "adalah", "full-stack", "javascript", "programmer!"]

// MANUAL BUILT-IN FUNCTION
// SPLIT WITHOUT SPLIT

function pecahString (input) {
  var result = []
  var spaceCounter = 0

  input = input.trim() // menghapus whitespace di depan dan akhir, jika ada
  for (var i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      spaceCounter++
    }
  }

  var lanjut = 0
  for (var a = 0; a <= spaceCounter; a++) {
    var inside = ''    
    for (var b = lanjut; b < input.length; b++) {
      if (input[b] !== ' ') {
        inside += input[b]
      } else {
        lanjut = b + 1
        break
      }
    }
    result.push(inside)
  }
  return result
}

console.log(pecahString('saya adalah full-stack javascript programmer!'))