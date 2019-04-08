// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// inserts at 1st index position
// console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// months.splice(4, 1, 'May');
// replaces 1 element at 4th index
// console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// array.splice(di-index keberapa, berapa yang dihapus, apa yang dimasukin ke index keberapa-nya)

// var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']

// input.splice(1, 1, 'Roman Alamsyah Elsharawy')
// input.splice(2, 1, 'Provinsi Bandar Lampung')
// input.splice(4, 1, 'Pria', 'SMA International Metro')

// console.log(input)

function codename (input) {
  var result = []
  var start = input[0]
  var del = input[1]
  for (var i = 0; i < input.length; i++) {
    if (i > start && i < start + del) {
    } else if (i === start) {
      for (var j = 2; j < input.length; j++) {
        result.push(input[j])
      }
    } else {
      result.push(codes[i])
    }
  }
  return result
}

var codes = ['alpha', 'beta', 'charlie', 'delta', 'echo']

console.log(codename([1, 3, 'x-ray', 'yankee', 'zulu']))

// ['alpha', 'x-ray', 'yankee', 'zulu', 'echo']