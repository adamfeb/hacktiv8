function wordSpreadReduction (word) {
  var kolom = 1
  for (var i = 0; i < (word.length * 2) - 1; i++) {
    var baris = ''
    
    for (var j = 0; j < kolom; j++) {
      baris += word[j]
    }
    
    if (i < word.length - 1) {
      kolom++
    } else {
      kolom--
    }
    
    console.log(baris);
  } 
}

wordSpreadReduction('Adam Febrianata')