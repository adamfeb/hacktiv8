//
//
// 1. Menyusun Barisan Bintang
//
//

var rows1 = 5

for (var i = 1; i <= rows1; i++) {
  console.log('*')
}

//
//
// 2. Menyusun Barisan Bintang Dengan Nested Looping
//
//

var rows2 = 5

for (var k = 1; k <= rows2; k++) {
  var asterisk = ''
  for (var l = 1; l <= rows2; l++) {
    asterisk = asterisk + '*'
  }
  console.log(asterisk)
}

//
//
// 3. Menyusun Barisan Tangga Dengan Nested Looping
//
//

var rows3 = 5

for (var r = 1; r <= rows3; r++) {
  var asterisk2 = ''
  for (var s = 1; s <= r; s++) {
    asterisk2 = asterisk2 + '*'
  }
  console.log(asterisk2)
}
